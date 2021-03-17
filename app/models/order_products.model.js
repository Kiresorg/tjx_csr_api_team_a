const {Sequelize, DataTypes} = require('sequelize');


module.exports = (sequelize, Sequelize) => { 
    var Order_Product = sequelize.define('order_product', 
        {
            order_id: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            product_id: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            product_quantity: {
                type: DataTypes.INTEGER,
                allowNull: false
            }
        },
        { timestamps: false }
    );

    return Order_Product;
};