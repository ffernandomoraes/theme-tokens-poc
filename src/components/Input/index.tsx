import styled from '@emotion/styled';
import IStylesProps from 'interface/styles';

interface IInputProps extends IStylesProps {
  label?: string;
}

function Input({ className, label }: IInputProps) {
  return (
    <div className={className}>
      {label && <label>{label}</label>}
      <input type='text' />
    </div>
  );
}

export default styled(Input)`
  width: 100%;
  margin-bottom: 12px;

  label {
    margin-bottom: 4px;
    display: block;
    color: ${({ theme }) => theme.typography.secondary};
  }

  input {
    width: 100%;
    height: 40px;
    border-radius: 4px;
    color: ${({ theme }) => theme.typography.secondary};
    border: 1px solid ${({ theme }) => theme.border.main};
    background-color: ${({ theme }) => theme.paper.element};
    font-family: 'Poppins';
    padding: 4px 10px;

    &:focus {
      outline: none;
      border-color: ${({ theme }) => theme.border.hover};
    }
  }
`;
