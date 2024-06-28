import { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from 'styles/global';
import theme from 'styles/theme';
import Header from 'components/organism/Header';
import Provider from 'context/Provider';

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

      <Provider>
        <Header />

        <Component {...pageProps} />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
