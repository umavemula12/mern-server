const { gql } = require('apollo-server-express');
const typeDefs= gql `
    type User{
        id: ID !,
        name: String !,
        email: String !,
        password: String!
    }
    type Post {
        id: ID!
        content: String!
    }
    type message{
        id:ID!,
        message: String !
    }
    type Query{
        getUser(id: ID!):User,
        getUsers:[User],
        searchUsers(name:String!):[User],
        getLimitedUser(limit:Int!, offset:Int!):[User],
        posts: [Post]
    }
    input createUserInput{
        name:String!,
        email:String!,
        password:String!
    }
    input updateUserInput{
        name:String!,
        email:String!,
        password:String!
    }

    type Mutation{
        createUser(input:createUserInput!):User
        changePass(id:ID!, password:String!):User
        updateUser(id:ID!, input:updateUserInput!):User
        deleteUser(id:ID!):User
        addPost(content: String!): Post
    }
    type Subscription {
        postAdded: Post
    }
`;

module.exports = typeDefs; //export out
