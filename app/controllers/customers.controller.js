const dB = require("../models/index");
const Customer = dB.customer;
const Orders = dB.orders;
const Order_Product = dB.order_products ; 
// const db = require("mysql2");
// const { USER } = require("../config/db.config");
// const { sequelize, order_products, customer } = require("../models/index");
// const { cast } = require("sequelize/types");

// create and save a Customer
exports.create = (req, res) => {
    // create customer

    const customer = new Customer({
        first_name: req.body.first_name,
        middle_name: req.body.middle_name ? req.body.middle_name : null,
        last_name: req.body.last_name,
        phone: req.body.phone,
        email: req.body.email, 
        notes: req.body.notes ? req.body.notes : null,
        address_line1: req.body.address_line1 ? req.body.address_line1 : '',
        address_line2: req.body.address_line2 ? req.body.address_line2 : '',
        city: req.body.city ? req.body.city : '',
        state: req.body.state ? req.body.state : '',
        zip: req.body.zip ? req.body.zip : '',
    });

    // save Claim to dB
    customer
        .save(customer)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message + req.body.first_name || "Error while creating Customer"
            });
        })
        
};

// get all claims
exports.findAll = (req, res) => {
    // const notes = req.query.notes;
    // var condition = notes ? { notes: { $regex: new RegExp(notes), $options: "i" }} : {}
    Customer.findAll(/*condition*/)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    "Error while retreving Customers"
            });
        });
};


// get customer by id
exports.findOne = (req, res) => {
    const id = parseInt(req.params.id, 10);
    if (Number.isNaN(id)) {
        res.status(404).send({
            message: "Invalid ID parameter."
        });
        return;
    }

    Customer.findByPk(id)
        .then(data => {
            if(!data)
                res.status(404).send({ message: "Not found: Customer with id of " + id });
            else res.send(data);
        })
        .catch(err => {
            res
                .status(500)
                .send({ message: "Error retreiving Customer with id of " + id });
        });
};

// update Customer by id
exports.update = (req, res) => {
    if(!req.body) {
        return res.status(400).send({
            message: "Empty data for update"
        });
    }
    const id = parseInt(req.params.id, 10);
    if (Number.isNaN(id)) {
        res.status(404).send({
            message: "Invalid ID parameter."
        });
        return;
    }
    Customer.update(
        {
        first_name: req.body.first_name,
        middle_name: req.body.middle_name ? req.body.middle_name : null,
        last_name: req.body.last_name,
        phone: req.body.phone,
        email: req.body.email, 
        notes: req.body.notes ? req.body.notes : null,
        address_line1: req.body.address_line1 ? req.body.address_line1 : '',
        address_line2: req.body.address_line2 ? req.body.address_line2 : '',
        city: req.body.city ? req.body.city : '',
        state: req.body.state ? req.body.state : '',
        zip: req.body.zip ? req.body.zip : ''
        },
        {
            where: { id :id }
        })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Unable to update Customer with id of ${id}.`
                });
            } else {
                res.send({ message: "Customer updated successfully." });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error while trying to update Claim with id of " + id
            });
        });
};

// delete Claim by id
exports.delete = (req, res) => {
    res.send("Delete in progress");
    // const id = parseInt(req.params.id, 10);
    // if(Number.isNaN(id)) 
    // {
    //     res.status(404).send({
    //         message: "Invalid ID parameter."
    //     });
    // }
    // //return sequelize.query(`DELETE FROM customers WHERE id=${id}`)
    // Orders.findAll({
    //     //attributes: ['customer_id'], 
    //     where:{customer_id : id}
    // })
    // .then((data)=>{
    //     for(var i=0; i<data.length; i++){
    //         orderId =data[i].id;
    //         //console.log(orderId);
    //         Order_Product.destroy({where : {order_id :orderId}})
    //             .catch(err => {
    //                 res.status(500).send({
    //                     message: `Error with deleting Order Products by customer of ${id} and order_product of ${orderId}` + err
    //                 })
    //             });
    //     }
    // }).catch(err => {
    //     res.status(500).send({
    //         message: "Error with deleting order_product."
    //     });
    // });
    // Orders.destroy({
    //     where : {customer_id : id}
    // })
    // .then(data =>{
    //     console.log(data);
    // })
    // .catch(err => {
    //     res.status(500).send({
    //         message: `Error with deleting Orders by customer of ${id}` + err
    //     });
    // });
    // Customer.destroy({
    //     where: { id: id }
    // })
    //     .then(data => {
    //         if (!data) {
    //             res.status(404).send({
    //                 message: `Unable to delete Customer with id of ${id}.`
    //             });
    //         } else {
    //             res.send({
    //                 message: "Customer deleted successfully."
    //             });
    //         }
    //     })
    //     .catch(err => {
    //         res.status(500).send({
    //             message: "Error with deleting Customer." + err
    //         });
    //     });
};
