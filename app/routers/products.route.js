module.exports = app => {
    const products = require("../controllers/products.controller");

    var router = require("express").Router();

    // get all products
    router.get("/", products.findAll);

    // get product by id
    router.get("/:id", products.findOne);

    // update products by id
    router.put("/:id", products.update);

    app.use('/api/products', router);
};