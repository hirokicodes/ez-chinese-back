import { getUserId, Context } from '../utils'

export const Query = {
  me(parent, args, ctx: Context) {
    const id = getUserId(ctx)
    return ctx.prisma.user({ id })
  },
  hanzi(parent, args, ctx: Context) {
    return ctx.prisma.hanzis({
      where: {
        traditional_contains: args.hanzi
      }
    })
  },
  users(parent, args, ctx: Context) {
    return ctx.prisma.users()
  },
  decks(parent, args, ctx: Context) {
    return ctx.prisma.decks()
  }
}
