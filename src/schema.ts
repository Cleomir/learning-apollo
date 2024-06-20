export const typeDefs = `#graphql
  # Define the schema with the types and fields
  type Game {
    id: ID!
    title: String!
    platform: [String!]!
    reviews: [Review]
  }
  type Review {
    id: ID!
    rating: Int!
    content: String!
    game: Game!
    author: Author!
  }
  type Author {
    id: ID!
    name: String!
    verified: Boolean!
    reviews: [Review]
  }

  # Define the input types for mutations
  input AddGameInput {
    title: String!
    platform: [String!]!
  }
  input EditGameInput {
    title: String
    platform: [String!]
  }

  # Define the queries 
  type Query {
    authors: [Author]
    author(id: ID!): Author
    games: [Game]
    game(id: ID!): Game
    reviews: [Review]
    review(id: ID!): Review
  }

  # Define the mutations
  type Mutation {
    deleteGame(id: ID!): Game
    addGame(game: AddGameInput!): Game
    updateGame(id: ID!, game: EditGameInput!): Game
  }
`;
