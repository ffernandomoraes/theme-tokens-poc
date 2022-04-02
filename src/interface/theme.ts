interface ITheme {
  type?: 'dark' | 'light';

  primary: {
    light: string;
    main: string;
    dark: string;
  };

  paper: {
    background: string;
    card: string;
    element: string;
  };

  border: {
    main: string;
    hover: string;
  };

  shadow: {
    100: string;
  };

  typography: {
    primary: string;
    secondary: string;
    disabled: string;
  };
}

export default ITheme;
