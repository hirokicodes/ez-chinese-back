import { getUserId, Context } from "../utils";
import { Hanzi } from "../generated/prisma-client";

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
  async hanziObjectsFromText(parent, args, ctx: Context) {
    const array: string[] = args.text.split("");
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

    const data = await ctx.prisma.hanzis({
      where: {
        OR: input
      }
    });

    let chineseTextArray: Hanzi[] = [];

    if (data) {
      for (let i: number = 0; i < args.text.length; ) {
        const textRemaining = args.text.slice(i);
        let textToCheck: string = "";

        for (let endI: number = 0; endI < textRemaining.length; endI++) {
          if (endI === 0) {
            textToCheck = args.text.slice(i);
          } else {
            textToCheck = args.text.slice(i, -endI);
          }
          const hanziObject = data.find(
            hanzi =>
              hanzi.simplified === textToCheck ||
              hanzi.traditional === textToCheck
          );
          if (hanziObject) {
            chineseTextArray.push(hanziObject);
            endI = textRemaining.length;
          }
        }
        i += textToCheck.length;
      }
    }

    return chineseTextArray;
  },
  users(parent, args, ctx: Context) {
    return ctx.prisma.users();
  },
  decks(parent, args, ctx: Context) {
    return ctx.prisma.decks();
  }
};
