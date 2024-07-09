

const express = require('express');
const mongoose = require('mongoose');
const { ApolloServer , gql} = require('apollo-server-express');
const typeDefs = require('./routes/schema'); 
const resolvers = require('./resolvers');
const cors = require('cors');
const userApiFromRouter = require('./routes/userRoutes');

const app = express();
const port = 3001;
app.use(cors());
app.use(express.json());

const url = 'mongodb+srv://umavemula2005:WJFYDMeud2BfPtbW@cluster0.rlxavnw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(url , {useNewUrlParser:true , useUnifiedTopology:true})
  .then(() => {
    console.log('Database connected');
  })
  .catch((err) => console.log(err));

const server = new ApolloServer({ typeDefs, resolvers });


async function startServer() {
  await server.start();
  server.applyMiddleware({ app });
  app.use('/users',userApiFromRouter);
  app.listen(port, () => {
    console.log(`Server live at port ${port}`);
  });
}

startServer();

module.exports=app;
