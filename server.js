// console.log("Hello")

const express = require("express");

const app = express();

let port    = process.env.PORT || 3000

app.get( '/' ,(req, res) => {
    res.type( 'text/plain' )
    res.send( 'My Server' )
})


app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use('users', require('./routes/api/users'));

app.listen( port ,() => console.log(`Server started on port  ${ port } Ctrl + C to Stop `) )