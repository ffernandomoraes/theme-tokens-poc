import styled from '@emotion/styled';
import Alert from 'components/Alert';
import Button from 'components/Button';
import Card from 'components/Card';
import Header from 'components/Header';
import Input from 'components/Input';
import ThemeTokens from 'components/ThemeTokens';
import IStylesProps from 'interface/styles';
import styles from 'pages/styles';

function DarkPreview({ className }: IStylesProps) {
  return (
    <div className={className}>
      <Header />

      <Card>
        <Input label='Nome' />
        <Input label='E-mail' />
        <Button>Enviar</Button>
        <Button variant='secondary'>Resetar</Button>
      </Card>

      <br />

      <Input label='Código de barras' />
      <Button>Verificar</Button>

      <br />
      <br />

      <Alert />
      <Alert variant='error' />
      <Alert variant='success' />

      <br />

      <Card>
        <ThemeTokens />
      </Card>
    </div>
  );
}

export default styled(DarkPreview, { label: 'dark-preview' })`
  ${styles}

  background: ${({ theme }) => theme.paper.background};
  color: ${({ theme }) => theme.typography.primary};
`;
