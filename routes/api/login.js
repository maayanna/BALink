/**
 * API for a login route
 * @type {e | (() => Express)}
 */

const express = require("express");

const router = express.Router();

const users = require("../../data/user");

/**
 * Sending a bad request
 * @param res
 * @param num
 */
const errorFunc = (res, num) => {
    res.sendStatus(num);
}

/**
 * Check the login with given username (email) and password
 */
router.get("/:email?/:password?", (req, res) => {
    const email = req.params.email;
    const password = req.params.password;

    if (!email || !password ) {
        errorFunc(res, 400);
        return
    }

    // Need to find by email not by id
    const user = Object.keys(users).find(key => users[key].password === password && users[key].email === email);
    // Check if exist

    if(user){
        res.json({message: 'Hello ' + users[user].name + " " + users[user].lastName});
    }
    else{
        errorFunc(res, 401);
    }

});

module.exports = router;