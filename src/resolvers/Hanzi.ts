import { Context } from "../utils";

export const Hanzi = {
  flashcards: ({ id }, args, ctx: Context) => {
    return ctx.prisma.hanzi({ id }).flashcards();
  }
};
