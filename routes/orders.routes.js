module.exports = app => {

    const orders = require("../controllers/orders.controller");

    var router = require("express").Router();

    router.get("/", orders.getAllOrders);
    router.post("/", orders.createNewOrder);

    router.get("/:id", orders.getOrder);
    router.put("/:id", orders.modifyOrder);
    router.delete("/:id", orders.deleteOrder);

    

    app.use('/api/orders', router);
}