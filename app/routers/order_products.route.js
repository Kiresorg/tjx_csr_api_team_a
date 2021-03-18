module.exports = app => {
    const controller = require("../controllers/order_products.controller");

    var router = require("express").Router();

    /*
    *    Basic CRUD Operations
    */
    router.get("/", controller.findAll);
    router.post('/', controller.create);

    router.get('/:id', controller.findById);
    router.put('/:id', controller.updateById);
    router.delete('/:id', controller.deleteById);

    /*
    *   Additional Endpoints
    */
    router.get('/orders/:id', controller.findByOrderId);
    router.delete('/orders/:id', controller.deleteByOrderId);

    app.use("/api/order_products", router);
};
