import { Context } from '../utils'

export const User = {
  bookmarkedHanzis: ({ id }, args, ctx: Context) => {
    return ctx.prisma.user({ id }).bookmarkedHanzis()
  },
  decks: ({ id }, args, ctx: Context) => {
    return ctx.prisma.user({ id }).decks()
  }
}
