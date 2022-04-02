import { ThemeProvider as ThemeProviderEmotion } from '@emotion/react';
import ITheme from 'interface/theme';

interface IThemeProvider {
  theme: ITheme;
  children?: React.ReactNode;
}

function ThemeProvider({ theme, ...rest }: IThemeProvider) {
  return <ThemeProviderEmotion theme={theme} {...rest} />;
}

export default ThemeProvider;
