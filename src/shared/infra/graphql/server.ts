import startServer from './startServer';
import typeDefs from './typeDefs';

const resolvers = {};

startServer({
  typeDefs,
  resolvers,
});
