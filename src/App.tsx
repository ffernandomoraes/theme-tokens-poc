import styled from '@emotion/styled';
import { light, dark } from 'assets/themes';
import ThemeProvider from 'components/ThemeProvider';
import GlobalStyles from 'globalStyles';
import IStylesProps from 'interface/styles';
import DarkPreview from 'pages/dark';
import LightPreview from 'pages/light';

function App({ className }: IStylesProps) {
  return (
    <>
      <GlobalStyles />

      <div className={className}>
        <ThemeProvider theme={light}>
          <LightPreview />
        </ThemeProvider>

        <ThemeProvider theme={dark}>
          <DarkPreview />
        </ThemeProvider>
      </div>
    </>
  );
}

export default styled(App)`
  display: flex;
  flex-wrap: wrap;
`;
