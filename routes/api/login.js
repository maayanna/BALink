
const express = require("express");

const router = express.Router();

const users = require("../../Users");

const errorFunc = (res) => {
    res.sendStatus(401);
}

// Get all users
router.get("/:email?/:password?", (req, res) => {
    const email = req.params.email;
    const password = req.params.password;

    if (!email || !password ) {
        errorFunc(res);
        return
    }

    const user = users.find(u => u.email === email && u.password === password)
    user ?
        res.json({message: 'Hello ' + user.name}) :
        errorFunc(res)

});

module.exports = router;