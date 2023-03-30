require("dotenv").config();
const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const mongoose = require("mongoose");
const PORT = 8000 || process.env.port;
const URI = process.env.ATLAS_URL;
const { resolvers } = require("./data/resolvers.graphql");
const { typeDefs } = require("./data/schema.graphql");

const server = new ApolloServer({ typeDefs, resolvers });
const app = express();
let apolloServer = null;
async function startServer() {
  apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true,
    playground: true,
  });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app });
}
startServer();

app.listen({ port: PORT }, () => {
  console.log(
    `Server is running at http://localhost:4000${server.graphqlPath}`
  );
});

mongoose.set("strictQuery", false);
mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Connected to database");
});
