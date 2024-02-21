import gql from "graphql-tag";

export const typeDefs = gql`
  type Query {
    # Query definitions go here
    # Replace with your own Query definitions
    things: [Thing!]!
  }

  # Schema definitions go here
  # Replace with your own schema config
  type Thing {
    amabob: String!
  }
`;
