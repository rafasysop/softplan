import React from 'react'
import './App.css';

import { client } from './config/client-graphql';
import { ApolloProvider } from '@apollo/client';
import Routes from './routes/routes';

function App() {


  return (
    <ApolloProvider client={ client }>
      <Routes />
    </ApolloProvider>
  )
}

export default App;
