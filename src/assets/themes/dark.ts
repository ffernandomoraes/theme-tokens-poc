import ITheme from 'interface/theme';

const dark: ITheme = {
  type: 'dark',

  primary: {
    light: '#6573c3',
    main: '#3f51b5',
    dark: '#2c387e'
  },

  paper: {
    background: '#000',
    card: '#222',
    element: '#333'
  },

  border: {
    100: '#535353',
    200: '#8b8b8b'
  },

  shadow: {
    100: '0 1px 6px 0 rgb(32 33 36 / 28%)'
  },

  typography: {
    family: "'Poppins', sans-serif",
    primary: '#fff',
    secondary: 'rgba(255, 255, 255, 0.7)',
    disabled: 'rgba(255, 255, 255, 0.5)'
  }
};

export default dark;
