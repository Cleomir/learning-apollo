import { authors, games, reviews } from "../db";

export const resolvers = {
  Query: {
    games: () => games,
    authors: () => authors,
    reviews: () => reviews,
  },
};
