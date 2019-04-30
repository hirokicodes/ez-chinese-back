import { Context } from '../utils'

export const User = {
  bookmarkedHanzis: (parent, args, context) => {
    return context.prisma.user({ id: parent.id }).bookmarkedHanzis()
  }
}
