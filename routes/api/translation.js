const express = require("express");

const router = express.Router();

const uuid = require("uuid");

let language = require("../../data/translation");


// Get all products
router.get("/:lang?", (req, res) => {
    const lang = req.params.lang ? req.params.lang : 'en';
    res.json(language[lang]);
});

module.exports = router;