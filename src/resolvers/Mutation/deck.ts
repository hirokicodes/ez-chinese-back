import { getUserId, Context } from '../../utils'

export const deck = {
  async createDeck(parent, { deckName }, ctx: Context, info) {
    const userId = getUserId(ctx)
    return ctx.prisma.createDeck({
      name: deckName,
      creator: {
        connect: { id: userId }
      }
    })
  },
  async deleteDeck(parent, { id }, ctx: Context, info) {
    const userId = getUserId(ctx)
    const deckExists = await ctx.prisma.$exists.deck({
      id
    })
    if (!deckExists) {
      throw new Error(`Deck does not exist`)
    }

    const isCreator = await ctx.prisma.$exists.deck({
      creator: {
        id: userId
      }
    })
    if (!isCreator) {
      throw new Error(`You are not the creator`)
    }

    return ctx.prisma.deleteDeck({
      id
    })
  }
}