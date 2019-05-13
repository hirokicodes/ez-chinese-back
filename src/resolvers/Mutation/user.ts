import { getUserId, Context } from "../../utils";

export const user = {
  // async bookmarkHanzi(parent, { id }, ctx: Context) {
  //   const userId = getUserId(ctx)
  //   return ctx.prisma.updateUser({
  //     where: {
  //       id: userId
  //     },
  //     data: {
  //       bookmarkedHanzis: {
  //         connect: {
  //           id
  //         }
  //       }
  //     }
  //   })
  // },
  // async unbookmarkHanzi(parent, { id }, ctx: Context) {
  //   const userId = getUserId(ctx)
  //   return ctx.prisma.updateUser({
  //     where: {
  //       id: userId
  //     },
  //     data: {
  //       bookmarkedHanzis: {
  //         disconnect: {
  //           id
  //         }
  //       }
  //     }
  //   })
  // },
};
