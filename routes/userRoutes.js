const express = require('express');
const router = express.Router();
const { gql } = require('apollo-server-express');
const { ApolloServer } = require('apollo-server-express');

// Assume typeDefs and resolvers are defined elsewhere
const typeDefs = require('./schema');
const resolvers = require('../resolvers');

const server = new ApolloServer({
  typeDefs,
  resolvers
});

router.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const { data, errors } = await server.executeOperation({
      query: gql`
        mutation {
          createUser(input: { name: "${name}", email: "${email}", password: "${password}" }) {
            id
            email
            password
          }
        }
      `
    });

    if (errors) {
      return res.status(500).send({ message: errors[0].message });
    }

    res.status(201).send({ message: "User registered successfully" });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

router.get('/', async (req,res)=>{
  try{
    const {data, error}= await server.executeOperation({
      query: gql`
        query{
        getUsers{ id name email password }
      }
      `
    })
    if(error){return res.status(500).send({message:error})}
    res.status(200).send(data);

  }catch(err){
    res.status(500).send({message:err});
  }
})

module.exports = router; // Correct export
