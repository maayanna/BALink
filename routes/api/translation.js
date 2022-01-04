const express = require("express");

const router = express.Router();

let translation = require("../../data/translation");


/**
 * Display a translation given the translation parameter
 */
router.get("/:lang?", (req, res) => {
    // By default, we give the english translation if no parameter
    const lang = req.params.lang ? req.params.lang : 'en';
    if(lang in translation){ // In my translation dic
        res.json(translation[lang]);
    }
    else{
        res.json(translation["en"]); // By default, if bad request
        // res.sendStatus(400);
    }

});

module.exports = router;