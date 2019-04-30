import { getUserId, Context } from '../utils'

export const Query = {
  hanzi(parent, args, context: Context) {
    return context.prisma.hanzis({
      where: {
        traditional_contains: args.hanzi
      }
    })
  },
  users(parent, args, context: Context) {
    return context.prisma.users()
  }
}
