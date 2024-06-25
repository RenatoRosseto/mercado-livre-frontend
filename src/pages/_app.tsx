import { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from 'styles/global';
import theme from 'styles/theme';

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Mercado Livre</title>
        <meta
          name="description"
          content="Projeto simples para buscar e detalhar produtos do Mercado Livre"
        />
        <meta
          name="keywords"
          content="Mercado Livre, produtos, busca, detalhes"
        />
        <meta name="author" content="Renato Rosseto Neto" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <GlobalStyles />

      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;
