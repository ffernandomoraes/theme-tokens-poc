import styled from '@emotion/styled';
import IStylesProps from 'interface/styles';

interface ICardProps extends IStylesProps {}

function Card({ ...rest }: ICardProps) {
  return <div {...rest} />;
}

export default styled(Card)`
  margin-top: 20px;
  border-radius: 4px;
  padding: 20px;
  background: ${({ theme }) => theme.paper.card};
  box-shadow: ${({ theme }) => theme.shadow[100]};
`;
