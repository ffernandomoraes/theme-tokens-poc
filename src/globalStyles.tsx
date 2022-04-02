import { Global, css } from '@emotion/react';

function GlobalStyles() {
  return (
    <Global
      styles={css`
        * {
          padding: 0;
          margin: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Poppins', sans-serif;
          font-size: 15px;
          line-height: 1.4;
        }
      `}
    />
  );
}

export default GlobalStyles;
