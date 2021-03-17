const dB = require("../models/index");
const Product = dB.products;
const db = require("mysql2");

//get all products
exports.findAll = (req, res) => {


    Product.findAll(/*condition*/)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Error while retreving Customers"
        });
    });
};

//get one product by SKU
exports.findOne = (req, res) => {

    Product.findOne({ where: { id: req.params.id } })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error while retreving Product"
            });
        });
};

//increment/decrement product quantity
exports.update = (req, res) => {
    if(req.body.incrementOrDecrement === "true"){
        Product.increment(['quantity'], { where: { id: req.params.id } });
    }
    else{
        Product.decrement(['quantity'], { where: { id: req.params.id } });
    }
    
    Product.findOne({ where: { id: req.params.id } })
    .then(data => {
        res.status(200).send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Error while retreving Product"
        });
    });
};
