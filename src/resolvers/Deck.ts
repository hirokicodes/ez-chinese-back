import { Context } from '../utils'

export const Deck = {
  hanzis: ({ id }, args, ctx: Context) => {
    return ctx.prisma.deck({ id }).hanzis()
  },
  creator: ({ id }, args, ctx: Context) => {
    return ctx.prisma.deck({ id }).creator()
  }
}
