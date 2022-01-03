// console.log("Hello")

const express = require("express");
// let users = require("./Users");
// let products = require("./Products");

const app = express();

let port    = process.env.PORT || 3000;

app.get( '/' ,(req, res) => {
    res.type( 'text/plain' )
    res.send( 'My Server' )
})

const users = require('./routes/api/users');
app.use('/users', users);

const products = require('./routes/api/products')
app.use('/products', products)



//
// app.use(express.json());
//
// app.use(express.urlencoded({ extended: false }));
//
// app.use('users', require('./routes/api/users'));

app.listen( port ,() => console.log(`Server started on port  ${ port } Ctrl + C to Stop `) )