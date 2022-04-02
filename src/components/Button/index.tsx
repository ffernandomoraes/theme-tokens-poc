import styled from '@emotion/styled';
import IStylesProps from 'interface/styles';

interface IButtonProps extends IStylesProps {
  children?: React.ReactNode;
  variant?: 'primary' | 'secondary';
}

function Button({ className, children, variant }: IButtonProps) {
  return (
    <button type='button' className={`${className} ${variant ? `--${variant}` : ''}`}>
      {children}
    </button>
  );
}

export default styled(Button)`
  background: ${({ theme }) => theme.primary.main};
  border: 0;
  padding: 10px 20px;
  border-radius: 4px;
  font-size: 14px;
  color: white;
  font-family: 'Poppins';
  font-weight: 500;
  cursor: pointer;
  transition: 0.2s linear;
  border: 1px solid transparent;

  &:hover {
    background: ${({ theme }) => theme.primary.dark};
  }

  &.--secondary {
    background: transparent;
    border: 1px solid ${({ theme }) => theme.primary.main};
    margin-left: 10px;
    color: ${({ theme }) => (theme.type === 'dark' ? theme.typography.primary : theme.primary.main)};
  }
`;
