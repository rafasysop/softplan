import React from 'react'

import { client } from './config/client-graphql';
import { ApolloProvider } from '@apollo/client'
import Card from './components/Card';
import Header from './components/Header';

function App() {


  return (
    <ApolloProvider client={ client }>
      <Header title='Listagem de Paises' subtitle='Rafael Moura' />
      <Card />
    </ApolloProvider>
  )
}

export default App;
