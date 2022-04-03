import styled from '@emotion/styled';
import IStylesProps from 'interface/styles';

function Header({ className }: IStylesProps) {
  return (
    <div className={className}>
      <h1>Theme</h1>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates eaque dolores, sunt accusantium earum quas
        animi iure, repellat possimus consectetur, facilis expedita unde praesentium nulla vel cumque vitae delectus
        porro.
      </p>

      <i>Este texto deve estar desabilitado!</i>
    </div>
  );
}

export default styled(Header)`
  h1 {
    color: ${({ theme }) => theme.typography.primary};
    margin-bottom: 10px;
  }

  p {
    color: ${({ theme }) => theme.typography.secondary};
    margin-bottom: 10px;
  }

  i {
    color: ${({ theme }) => theme.typography.disabled};
  }
`;
