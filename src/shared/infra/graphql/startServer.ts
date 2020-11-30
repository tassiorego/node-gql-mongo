import { ApolloServer, Config } from 'apollo-server';

function startServer({ typeDefs, resolvers }: Config): void {
  const server = new ApolloServer({ typeDefs, resolvers });

  server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });
}

export default startServer;
