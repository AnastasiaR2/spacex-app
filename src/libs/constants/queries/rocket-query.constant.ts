import { gql } from '@apollo/client';

const ROCKETS_QUERY = gql`
  query RocketsQuery {
    rockets {
      id
      description
      name
    }
  }
`;

export { ROCKETS_QUERY };
