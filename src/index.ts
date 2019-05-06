import { GraphQLServer } from "graphql-yoga";
import { prisma } from "./generated/prisma-client";
import resolvers from "./resolvers";

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers,
  context: request => ({
    ...request,
    prisma
  })
});

const options = {
  port: 4000,
  cors: {
    credentials: true,
    origin: ["http://localhost:8080"]
  }
};

server.start(options, () =>
  console.log(`Server is running on http://localhost:${options.port}`)
);
