const express = require('express');
const mongoose = require('mongoose');
const { ApolloServer } = require('apollo-server-express');
const { createServer } = require('http');
const { useServer } = require('graphql-ws/lib/use/ws');
const { makeExecutableSchema } = require('@graphql-tools/schema');
const { WebSocketServer } = require('ws');
const cors = require('cors');
const typeDefs = require('./routes/schema');
const resolvers = require('./resolvers');
const userApiFromRouter = require('./routes/userRoutes');

const app = express();
const port = 3001;

// CORS middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
const url = 'mongodb+srv://umavemula2005:WJFYDMeud2BfPtbW@cluster0.rlxavnw.mongodb.net/mydatabase?retryWrites=true&w=majority';
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Database connected');
  })
  .catch((err) => console.error('Error connecting to database:', err));

const schema = makeExecutableSchema({ typeDefs, resolvers });

// Apollo Server setup
const apolloServer = new ApolloServer({ schema });

async function startApolloServer() {
  await apolloServer.start();
  apolloServer.applyMiddleware({ app });

  app.use('/users', userApiFromRouter);

  const httpServer = createServer(app);

  const wsServer = new WebSocketServer({
    server: httpServer,
    path: '/graphql',
  });

  useServer({ schema }, wsServer);

  const PORT = 4000;
  httpServer.listen(PORT, () => {
    console.log(`🚀 Server ready at http://localhost:${PORT}${apolloServer.graphqlPath}`);
    console.log(`🚀 Subscriptions ready at ws://localhost:${PORT}${apolloServer.graphqlPath}`);
  });
}

startApolloServer();

app.listen(port, () => {
  console.log(`Server live at port ${port}`);
});

module.exports = app;
