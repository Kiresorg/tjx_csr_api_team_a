module.exports = app => {

    const products = require("../controllers/products.controller");

    var router = require("express").Router();

    router.get("/", products.getAllProducts);

    router.get("/:id", products.getProduct);
    router.put("/:id", products.modifyProduct);


    app.use('/api/products', router);
}