
import { ApolloProvider } from '@apollo/client';
import '../styles/globals.css'
import '../styles/dashboard.css'
import '../styles/modal.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useApollo } from '../lib/ApolloClientt'

import React from 'react';

function MyApp({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps)
  const getLayout = Component.getLayout || ((page) => page)

  return (
    <>
      <ApolloProvider client={apolloClient}>
        {getLayout(<Component {...pageProps} />)}
      </ApolloProvider>
    </>
  )
}

export default MyApp
