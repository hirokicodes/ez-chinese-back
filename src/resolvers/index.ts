import { Query } from "./Query";
import { Subscription } from "./Subscription";
// Mutations
import { auth } from "./Mutation/auth";
import { post } from "./Mutation/post";
import { deck } from "./Mutation/deck";
import { flashcard } from "./Mutation/flashcard";
import { user } from "./Mutation/user";
// Types
import { User } from "./User";
import { Post } from "./Post";
import { Flashcard } from "./Flashcard";
import { Deck } from "./Deck";

export default {
  Query,
  Mutation: {
    ...auth,
    // ...post,
    ...flashcard,
    ...deck,
    ...user
  },
  // Subscription,
  User,
  // Post,
  Flashcard,
  Deck
};
