import { createGlobalStyle } from 'styled-components';
import ThemeProvider from '../components/ThemeProvider';

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    height: 100%;
    width: 100%;
  }

  //body {display: flex}
`;

const lightTheme = {
  colors: {
    primary: '#0070f3',
    secondary: '#00a300',
    background: '#ffffff',
    backgroundInverse: '#000000',
  },
};

const darkTheme = {
  colors: {
    primary: '#ffff00',
    secondary: '#ffffff',
    background: '#000000',
    backgroundInverse: '#ffffff',
  },
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
