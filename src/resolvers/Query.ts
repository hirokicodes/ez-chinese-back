import { getUserId, Context } from "../utils";

export const Query = {
  me(parent, args, ctx: Context) {
    const id = getUserId(ctx);
    return ctx.prisma.user({ id });
  },
  hanzisInText(parent, args, ctx: Context) {
    const array = args.text.split("");
    const input = array.map(hanzi => {
      return {
        OR: [
          {
            traditional_starts_with: hanzi
          },
          {
            simplified_starts_with: hanzi
          }
        ]
      };
    });

    return ctx.prisma.hanzis({
      where: {
        OR: input
      }
    });
  },
  users(parent, args, ctx: Context) {
    return ctx.prisma.users();
  },
  decks(parent, args, ctx: Context) {
    return ctx.prisma.decks();
  }
};
