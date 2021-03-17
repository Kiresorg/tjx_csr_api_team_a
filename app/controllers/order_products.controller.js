const db = require("../models");
const { sequelize } = require("../models");
const Order_Product = db.order_products;
const mySQLdatetime = new Date().toISOString().slice(0, 19).replace('T', ' ');

exports.create = (req, res) => {

    // create order_product
    const order_product = new Order_Product({
        order_id: req.body.order_id,
        product_id: req.body.product_id,
        product_quantity: req.body.product_quantity
    });

    // save order_product to dB
    order_product
        .save(order_product)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error while creating order_product"
            });
        })
};

exports.findAll = (req, res) => {
    Order_Product.findAll(/*condition*/)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error while retreving order_products"
            });
        });
};

exports.deleteById = (req, res) => {
    const id = parseInt(req.params.id, 10);
    if(Number.isNaN(id)) 
    {
        res.status(404).send({
            message: "Invalid ID parameter."
        });
        return;
    }
    
    return Order_Product.destroy({
        where: { id: id }
    })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Unable to delete order_product with id of ${id}.`
                });
            } else {
                res.send({
                    message: "order_product deleted successfully."
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error while deleting order_product."
            });
        });
};

exports.deleteByOrderId = (req, res) => {
    const id = parseInt(req.params.id, 10);
    if(Number.isNaN(id)) 
    {
        res.status(404).send({
            message: "Invalid ID parameter."
        });
        return;
    }
    
    return Order_Product.destroy({
        where: { order_id: id }
    })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Unable to find order_product(s) with order_id ${id}.`
                });
            } else {
                res.send({
                    message: "order_product deleted successfully."
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error while deleting order_product."
            });
        });
};

exports.findById = (req, res) => {
    const id = parseInt(req.params.id, 10);
    if(Number.isNaN(id)) 
    {
        res.status(404).send({
            message: "Invalid ID parameter."
        });
        return;
    }

    Order_Product.findByPk(id)
        .then(data => {
            if (!data)
                res.status(404).send({ message: "Not found: order_product with id of " + id });
            else 
                res.send(data);
        })
        .catch(err => {
            res
                .status(500)
                .send({ message: "Error retreiving order_product with id of " + id });
        });
};

exports.findByOrderId = (req, res) => {
    const id = parseInt(req.params.id, 10);
    if(Number.isNaN(id)) 
    {
        res.status(404).send({
            message: "Invalid ID parameter."
        });
        return;
    }

    Order_Product.findAll({
        where:
        {
            order_id: id
        }
    })
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Error while retreving order_products"
        });
    });
};

// Edit an order from ID
exports.updateById = (req, res) => {
    const id = parseInt(req.params.id, 10);
    if(Number.isNaN(id)) 
    {
        res.status(404).send({
            message: "Invalid ID parameter."
        });
        return;
    }

    Order_Product.update(
        {
            order_id: req.body.order_id,
            product_id: req.body.product_id,
            product_quantity: req.body.product_quantity
        },
        {
            where: { id: id }
        })
        .then(data => {
            if (!data)
                res.status(404).send({ message: "Not found: order_product with id of " + id });
            else
                res.send("order_product updated successfully.");
        })
        .catch(err => {
            res
                .status(500)
                .send({ message: "Error updating order_product with id of " + id });
        })
};