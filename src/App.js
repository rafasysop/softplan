import React from 'react'

import { client } from './config/client-graphql';
import { ApolloProvider } from '@apollo/client';
import Header from './components/Header';
import Routes from './routes/routes';

function App() {


  return (
    <ApolloProvider client={ client }>
      <Header title='Listagem de Paises' subtitle='Rafael Moura' />
      <Routes />
    </ApolloProvider>
  )
}

export default App;
