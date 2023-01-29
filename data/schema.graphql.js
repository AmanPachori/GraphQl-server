const { gql } = require('apollo-server-express');
 const typeDefs = gql`
  type userData {
    price:String!
    address:String!
    image:String!
    noOfBedroom:Int!
    noOfBathroom:Int!
    area: Int!
    }
    input UserInput{
      id:ID!
      price:String!
    address:String!
    image:String!
    noOfBedroom:Int!
    noOfBathroom:Int!
    area: Int!
  }
    type Query{
      getAlluser:[userData]
    }
    type Mutation{
      createuser(input:UserInput):userData
  }
    `
    ;

  module.exports = {typeDefs}

  // {"_id":{"$oid":"63d6152bd803b1b0a96be97a"},"price":"699","address":"3517w graySt, Utica","image":"https://flowbite.com/docs/images/blog/image-1.jpg","noOfBedroom":"2","noOfBathroom":"2","area":"69"}