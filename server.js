/**
 * My server as my main program
 * @type {e | (() => Express)}
 */

const express = require("express");

const app = express();

let port    = process.env.PORT || 3000;

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get( '/' ,(req, res) => {
    res.type( 'text/plain' )
    res.send( 'My Server hello' )
})

const users = require('./routes/api/user');
app.use('/users', users);

const products = require('./routes/api/product')
app.use('/products', products)

const translation = require('./routes/api/translation')
app.use('/translations', translation)

const login = require('./routes/api/login')
app.use('/login', login)


app.listen( port ,() => console.log(`Server started on port  Ctrl + C to Stop `) );