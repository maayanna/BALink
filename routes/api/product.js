/**
 * API for a product route
 * @type {e | (() => Express)}
 */

const express = require("express");

const router = express.Router();

const uuid = require("uuid");

let product = require("../../data/product");


/**
 * Display all products
 */
router.get("/", (req, res) => {
    res.json(product);

});


/**
 * Display product by id
 */
router.get('/:id', (req, res) => {

    if (req.params.id in product){ // If the user is existing
        res.json(product[req.params.id]);
    }
    else{
        res.sendStatus(400);
    }
})


/**
 * Create a new product
 */
router.post('/', (req, res) => {

    let newId = uuid.v4();
    let newName = req.body.name;

    if (!newName || !newId) {
        return res.sendStatus(400);
    }

    product[newId] = {

        id: newId,

        name: newName


    };
    res.json({msg: "Product created", product});
});


/**
 * Modify data for the product with a given id
 */
router.put("/:id", (req, res) => {

    const updateProduct = req.body;


    if (!product[req.params.id] || !updateProduct.name) {
        res.sendStatus(400);
        return
    }

    product[req.params.id].name = updateProduct.name;
    res.json({msg: "Product updated", product});

});


/**
 * Delete a product with a given id
 */
router.delete("/:id", (req, res) => {

    if (req.params.id in product) {

        delete product[req.params.id];

        res.json({

            msg: "Product deleted",

            products: product

        });

    } else {

        res.sendStatus(400);

    }

});

module.exports = router;