import { Context } from "../utils";

export const Flashcard = {
  hanzi: ({ id }, args, ctx: Context) => {
    return ctx.prisma.flashcard({ id }).hanzi();
  },
  user: ({ id }, args, ctx: Context) => {
    return ctx.prisma.flashcard({ id }).user();
  },
  decks: ({ id }, args, ctx: Context) => {
    return ctx.prisma.flashcard({ id }).decks();
  }
};
