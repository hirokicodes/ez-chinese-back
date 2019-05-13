import { Context } from "../utils";

export const Deck = {
  flashcards: ({ id }, args, ctx: Context) => {
    return ctx.prisma.deck({ id }).flashcards();
  },
  creator: ({ id }, args, ctx: Context) => {
    return ctx.prisma.deck({ id }).creator();
  }
};
