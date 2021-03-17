module.exports = app => {

    const customers = require("../controllers/customers.controller");

    var router = require("express").Router();

    router.get("/", customers.getAllCustomers);
    router.post("/", customers.createNewCustomer);

    router.get("/:id", customers.getCustomer);
    router.put("/:id", customers.modifyCustomer);
    router.delete("/:id", customers.deleteCustomer);

    

    app.use('/api/customers', router);
}