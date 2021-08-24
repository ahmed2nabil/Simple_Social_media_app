const express = require('express');
const mongoose = require('mongoose');
const {graphqlHTTP }= require('express-graphql');
const app = express();


const PORT = process.env.PORT || 3000;
const graphqlSchema = require('./graphql/schema');
const graphqlResolver = require('./graphql/reslovers');
app.use(
    '/graphql',
    graphqlHTTP({
    schema : graphqlSchema,
    rootValue : graphqlResolver,
    graphiql : true
}))

const url = "mongodb+srv://user:passwordnode@cluster0.xbewz.mongodb.net/SMDB?retryWrites=true&w=majority"
mongoose.connect(url,{useUnifiedTopology :true,useNewUrlParser:true})
.then(console.log('DB Connected successfully'))
.catch(console.error);
app.listen(PORT,()=> {
    console.log(`Server started on ${PORT}`);
})