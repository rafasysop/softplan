import { ApolloClient, InMemoryCache, gql } from '@apollo/client'

export const GET_COUNTRY = gql`
query GetCOUNTRYCache {
  Country @client
}
`;

export const countries =  gql`
query GetCOUNTRY {
  Country {
    name
    area
    population
    capital
    location {
      latitude
      longitude
    }
    numericCode
    flag {
      svgFile
    }
    topLevelDomains {
      name
    }
  }
}`;

export const client = new ApolloClient({
  uri: 'https://countries-274616.ew.r.appspot.com/',
  cache: new InMemoryCache(),
})
