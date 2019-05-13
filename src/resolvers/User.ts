import { Context } from "../utils";

export const User = {
  flashcards: ({ id }, args, ctx: Context) => {
    return ctx.prisma.user({ id }).flashcards();
  },
  decks: ({ id }, args, ctx: Context) => {
    return ctx.prisma.user({ id }).decks();
  }
};
