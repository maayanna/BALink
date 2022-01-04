const express = require("express");

const router = express.Router();

const uuid = require("uuid");

let product = require("../../data/product");


// Get all product
router.get("/", (req, res) => {
    res.json(product);

});

// Get product by id
router.get('/:id', (req, res) => {
    const found = product.some(product => product.id === parseInt(req.params.id));
    if (found) {

        res.json(product.filter(product => product.id === parseInt(req.params.id)));

    } else {

        res.sendStatus(400);

    }
})


// Create a new product
router.post('/', (req, res) => {

    let newProduct;
    newProduct = {

        id: uuid.v4(),

        name: req.body.name

    };


    if (!newProduct.name || !newProduct.id) {
        return res.sendStatus(400);
    }

    product.push(newProduct);
    res.json(product);
});


// Modify data for the product with a given id
router.put("/:id", (req, res) => {
    const updateProduct = req.body;

    let product = product.find(p => p.id === parseInt(req.params.id))

    if (!product) {
        res.sendStatus(400);
        return
    }

    product.name = updateProduct.name ? updateProduct.name : product.name;
    res.json({msg: "User updated", product});

});


// Delete a product with a given id
router.delete("/:id", (req, res) => {

    const found = product.some(product => product.id === parseInt(req.params.id));

    // delete product[key]
    //
    // product[key] = product

    if (found) {

        product = product.filter(product => product.id !== parseInt(req.params.id))

        res.json({

            msg: "User deleted",

            products: product

        });

    } else {

        res.sendStatus(400);

    }

});

module.exports = router;