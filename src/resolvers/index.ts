import { authors, games, reviews } from "../db";

export const resolvers = {
  Query: {
    games: () => games,
    game: (_: any, args: any) => {
      return games.find((game) => game.id === args.id);
    },
    authors: () => authors,
    author: (_: any, args: any) => {
      return authors.find((author) => author.id === args.id);
    },
    reviews: () => reviews,
    review: (_: any, args: any) => {
      return reviews.find((review) => review.id === args.id);
    },
  },
  Mutation: {
    deleteGame: (_: any, args: any) => {
      const gameIndex = games.findIndex((game) => game.id === args.id);
      if (gameIndex === -1) {
        throw new Error("Game not found");
      }

      const deletedGame = games.splice(gameIndex, 1);

      return deletedGame[0];
    },
    addGame: (_: any, args: any) => {
      const newGame = {
        id: String(games.length + 1),
        title: args.game.title,
        platform: args.game.platform,
      };
      games.push(newGame);

      return newGame;
    },
  },
  Game: {
    reviews: (parent: any) => {
      return reviews.filter((review) => review.game_id === parent.id);
    },
  },
  Author: {
    reviews: (parent: any) => {
      return reviews.filter((review) => review.author_id === parent.id);
    },
  },
  Review: {
    game: (parent: any) => {
      return games.find((game) => game.id === parent.game_id);
    },
    author: (parent: any) => {
      return authors.find((author) => author.id === parent.author_id);
    },
  },
};
