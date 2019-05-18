import { getUserId, Context } from "../../utils";

export const flashcard = {
  async createFlashcard(parent, { id, comfortLevel }, ctx: Context) {
    const userId = getUserId(ctx);

    const flashcardExists = await ctx.prisma.$exists.flashcard({
      user: {
        id: userId
      },
      hanzi: {
        id
      }
    });

    if (flashcardExists) {
      throw new Error("Flashcard already exists");
    }

    return ctx.prisma.createFlashcard({
      hanzi: {
        connect: {
          id
        }
      },
      user: {
        connect: {
          id: userId
        }
      },
      comfortLevel: comfortLevel || 1
    });
  },

  async deleteFlashcard(parent, { id }, ctx: Context) {
    const userId = getUserId(ctx);

    const isUser = await ctx.prisma.$exists.flashcard({
      id,
      user: {
        id: userId
      }
    });

    if (!isUser) {
      throw new Error(
        "Flashcard does not exist or you are not the flashcard's user"
      );
    }

    return ctx.prisma.deleteFlashcard({
      id
    });
  },

  async changeFlashcardComfortLevel(
    parent,
    { id, comfortLevel },
    ctx: Context
  ) {
    const userId = getUserId(ctx);

    const isUser = await ctx.prisma.$exists.flashcard({
      id,
      user: {
        id: userId
      }
    });

    if (!isUser) {
      throw new Error(
        "Flashcard does not exist or you are not the flashcard's user"
      );
    }

    return ctx.prisma.updateFlashcard({
      where: {
        id
      },
      data: {
        comfortLevel
      }
    });
  }
};
