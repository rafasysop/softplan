import { ApolloClient, InMemoryCache, gql } from '@apollo/client'

export const GET_COUNTRY = gql`
query GetCOUNTRY {
  Country @client
}
`;

export const client = new ApolloClient({
  uri: 'https://countries-274616.ew.r.appspot.com/',
  cache: new InMemoryCache(),
})
