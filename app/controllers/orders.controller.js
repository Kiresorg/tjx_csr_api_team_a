const db = require("../models");
const { sequelize, orders } = require("../models");
const Order = db.orders;
const Order_Product = db.order_products;

const mySQLdatetime = new Date().toISOString().slice(0, 19).replace('T', ' ');

// create an order
exports.createOrder = (req, res) => {
    // create Order
    const order = new Order({
        customer_id: req.body.customer_id,
        order_status_id: req.body.order_status_code,
        datetime_order_placed: mySQLdatetime,
        total_order_price: req.body.total_order_price,
        notes: req.body.notes ? req.body.notes : '',
    });

    order
        .save(order)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error while creating Order"
            });
        })
};

// get all orders
exports.findAll = (req, res) => {
    Order.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error while retreving Orders"
            });
        });
};

// Delete an order from ID
exports.deleteOrderById = (req, res) => {
    const id = parseInt(req.params.id, 10);
    if (Number.isNaN(id)) {
        res.status(404).send({
            message: "Invalid ID parameter."
        });
    }

    Order_Product.destroy({
        where: { order_id: id }
    }).catch(err => {
        res.status(500).send({
            message: "Error with deleting order_product."
        });
    });
    Order.destroy({
        where: { id: id }
    })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Unable to delete Order with id of ${id}.`
                });
            } else {
                res.send({
                    message: "Order deleted successfully."
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error with deleting order."
            });
        });
};

// Get one order from ID
exports.findById = (req, res) => {
    const id = parseInt(req.params.id, 10);
    if (Number.isNaN(id)) {
        res.status(404).send({
            message: "Invalid ID parameter."
        });
        return;
    }

    Order.findByPk(id)
        .then(data => {
            if (!data)
                res.status(404).send({ message: "Not found: Order with id of " + id });
            else
                res.send(data);
        })
        .catch(err => {
            res
                .status(500)
                .send({ message: "Error retreiving Order with id of " + id });
        });

};

exports.findByCustomerId = (req, res) => {
    const id = parseInt(req.params.id, 10);
    if (Number.isNaN(id)) {
        res.status(404).send({
            message: "Invalid ID parameter."
        });
        return;
    }

    Order.findAll({
        where: { customer_id: id }
    })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error while retreving Orders"
            });
        });
}

// Edit an order from ID
exports.editOrderById = (req, res) => {
    const id = parseInt(req.params.id, 10);
    if (Number.isNaN(id)) {
        res.status(404).send({
            message: "Invalid ID parameter."
        });
        return;
    }

    sequelize.query
        (`CALL UpdateOrder(${id}, ${req.body.customer_id}, ${req.body.order_status_id}, "${req.body.datetime_order_placed}", ${req.body.total_order_price}, "${req.body.notes}");`)
        .then(function(response){
            res.send({message: "Procedure successfully completed." });
        }).catch(err => {
            res
                .status(500)
                .send({ message: "Error updating Order with id of " + id + ": " + err });
        })
};