import { Query } from './Query'
import { Subscription } from './Subscription'
import { auth } from './Mutation/auth'
import { post } from './Mutation/post'
import { deck } from './Mutation/deck'
import { user } from './Mutation/user'
import { User } from './User'
import { Post } from './Post'
import { Deck } from './Deck'

export default {
  Query,
  Mutation: {
    ...auth,
    // ...post,
    ...deck,
    ...user
  },
  // Subscription,
  User,
  // Post,
  Deck
}
