const express = require("express");
const expressGraphQL = require("express-graphql").graphqlHTTP;
const PORT = 2000;

const schema = require("./Schema/schema")
const app = express();

app.use(
  "/graphql",
  expressGraphQL({
    graphiql: true,
    schema,
  })
);
app.listen(PORT, () => console.log(`Server listening to ${PORT}`));
