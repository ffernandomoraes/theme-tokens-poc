import ITheme from 'interface/theme';

const light: ITheme = {
  type: 'light',

  primary: {
    light: '#6573c3',
    main: '#3f51b5',
    dark: '#2c387e'
  },

  paper: {
    background: '#f1f1f1',
    card: '#fff',
    element: '#fff'
  },

  border: {
    main: '#cfcfcf',
    hover: '#a2a2a2'
  },

  shadow: {
    100: '0 1px 6px 0 rgb(32 33 36 / 28%)'
  },

  typography: {
    primary: '#000',
    secondary: 'rgba(0, 0, 0, 0.87)',
    disabled: 'rgba(0, 0, 0, 0.38)'
  }
};

export default light;
