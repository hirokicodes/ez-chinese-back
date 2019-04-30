import { Context } from '../utils'

export const Hanzi = {
  decksIncluded: ({ id }, args, ctx: Context) => {
    return ctx.prisma.hanzi({ id }).decksIncluded()
  },
  usersBookmarked: ({ id }, args, ctx: Context) => {
    return ctx.prisma.hanzi({ id }).usersBookmarked()
  }
}
