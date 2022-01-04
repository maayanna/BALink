/**
 * API for a user route
 * @type {e | (() => Express)}
 */

const express = require("express");

const router = express.Router();

let user = require("../../data/user");

/**
 * Display all the users
 */
router.get("/", (req, res) => {

    res.json(user);

});

/**
 * Display the user by id
 */
router.get("/:id", (req, res) => {

    if (req.params.id in user){ // If the user is existing
        res.json(user[req.params.id]);
    }
    else{
        res.sendStatus(400);
    }

});


module.exports = router;