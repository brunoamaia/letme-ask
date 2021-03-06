import React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components';

import { AuthContextProvider } from '../contexts/AuthContext'

import colors from '../styles/theme.json'

const themes = colors

import { GlogalStyles } from '../styles/globalStyles'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&family=Roboto:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <meta property="og:image" content="" />

        {/* <!-- Primary Meta Tags --> */}
        <title>Letmeask</title>
        <meta name="title" content="Let me ask - aplicação para gerenciamento de perguntas durantes eventos de Streaming " />
        <meta name="description" content="" />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="" />
        <meta property="og:title" content="Let me ask - aplicação para gerenciamento de perguntas durantes eventos de Streaming " />
        <meta property="og:description" content="" />
        <meta property="og:image" content="" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="" />
        <meta property="twitter:title" content="Let me ask - aplicação para gerenciamento de perguntas durantes eventos de Streaming " />
        <meta property="twitter:description" content="" />
        <meta property="twitter:image" content="" />

        <link rel="shortcut icon" href="favicon.png" />
      </Head>

      <ThemeProvider theme={themes}>
        <AuthContextProvider>
          <GlogalStyles />
          <Component {...pageProps} />
        </AuthContextProvider>
      </ThemeProvider>
    </>
  );
}
