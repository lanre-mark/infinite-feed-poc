import {ApolloServer, gql} from 'apollo-server-micro'
import * as resolvers from './resolvers'

const typeDefs = gql`

  type User {
    id: Int!
    name: String!
    bio: String
    avatar_url: String!
    fellowship: String!
    created_ts: String!
    updated_ts: String!
  }

  type Query {
    user(id: Int!): User!
  }
`;

export const server = new ApolloServer({typeDefs, resolvers})
