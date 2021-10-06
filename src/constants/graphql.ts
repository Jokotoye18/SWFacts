import {ApolloClient, InMemoryCache, gql} from '@apollo/client';

export const uri = 'https://graphql.org/swapi-graphql/';

export const client = new ApolloClient({
  uri,
  cache: new InMemoryCache(),
});

export const PLANETS_QUERY = gql`
  query PlanetsQuery {
    allPlanets {
      totalCount
      planets {
        id
        name
        diameter
      }
    }
  }
`;
