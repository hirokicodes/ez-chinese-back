import { getUserId, Context } from "../../utils";

export const deck = {
  async createDeck(parent, { deckName }, ctx: Context, info) {
    const userId = getUserId(ctx);
    return ctx.prisma.createDeck({
      name: deckName,
      creator: {
        connect: { id: userId }
      }
    });
  },
  async deleteDeck(parent, { id }, ctx: Context, info) {
    const userId = getUserId(ctx);
    const deckExists = await ctx.prisma.$exists.deck({
      id
    });
    if (!deckExists) {
      throw new Error(`Deck does not exist`);
    }

    const isCreator = await ctx.prisma.$exists.deck({
      creator: {
        id: userId
      }
    });
    if (!isCreator) {
      throw new Error(`You are not the creator`);
    }

    return ctx.prisma.deleteDeck({
      id
    });
  },
  async addFlashcardToDeck(
    parent,
    { flashcardId, deckId },
    ctx: Context,
    info
  ) {
    const userId = getUserId(ctx);
    const deckExists = await ctx.prisma.$exists.deck({
      id: deckId
    });
    if (!deckExists) {
      throw new Error(`Deck does not exist`);
    }

    const isCreator = await ctx.prisma.$exists.deck({
      creator: {
        id: userId
      }
    });
    if (!isCreator) {
      throw new Error(`You are not the creator`);
    }

    return ctx.prisma.updateDeck({
      where: {
        id: deckId
      },
      data: {
        flashcards: {
          connect: {
            id: flashcardId
          }
        }
      }
    });
  },
  async addFlashcardsToDeck(
    parent,
    { flashcardIds, deckId },
    ctx: Context,
    info
  ) {
    const userId = getUserId(ctx);
    const deckExists = await ctx.prisma.$exists.deck({
      id: deckId
    });
    if (!deckExists) {
      throw new Error(`Deck does not exist`);
    }

    const isCreator = await ctx.prisma.$exists.deck({
      creator: {
        id: userId
      }
    });
    if (!isCreator) {
      throw new Error(`You are not the creator`);
    }

    const connectInput: { id: string } = flashcardIds.map(flashcardId => {
      return { id: flashcardId };
    });

    return ctx.prisma.updateDeck({
      where: {
        id: deckId
      },
      data: {
        flashcards: {
          connect: connectInput
        }
      }
    });
  },
  async removeFlashcardFromDeck(
    parent,
    { flashcardId, deckId },
    ctx: Context,
    info
  ) {
    const userId = getUserId(ctx);
    const deckExists = await ctx.prisma.$exists.deck({
      id: deckId
    });
    if (!deckExists) {
      throw new Error(`Deck does not exist`);
    }

    const isCreator = await ctx.prisma.$exists.deck({
      creator: {
        id: userId
      }
    });
    if (!isCreator) {
      throw new Error(`You are not the creator`);
    }

    return ctx.prisma.updateDeck({
      where: {
        id: deckId
      },
      data: {
        flashcards: {
          disconnect: {
            id: flashcardId
          }
        }
      }
    });
  },
  async removeFlashcardsFromDeck(
    parent,
    { flashcardIds, deckId },
    ctx: Context,
    info
  ) {
    const userId = getUserId(ctx);
    const deckExists = await ctx.prisma.$exists.deck({
      id: deckId
    });
    if (!deckExists) {
      throw new Error(`Deck does not exist`);
    }

    const isCreator = await ctx.prisma.$exists.deck({
      creator: {
        id: userId
      }
    });
    if (!isCreator) {
      throw new Error(`You are not the creator`);
    }

    const disconnectInput = flashcardIds.map(flashcardId => {
      return { id: flashcardId };
    });

    return ctx.prisma.updateDeck({
      where: {
        id: deckId
      },
      data: {
        flashcards: {
          disconnect: disconnectInput
        }
      }
    });
  }
};
