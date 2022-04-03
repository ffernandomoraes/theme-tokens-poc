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

  /*
    Another example:

    background: {
      100: x
      200: x
      300: x
    }
  */

  border: {
    100: string;
    200: string;
  };

  shadow: {
    100: string;
  };

  typography: {
    family: string;
    primary: string;
    secondary: string;
    disabled: string;
  };
}

export default ITheme;
