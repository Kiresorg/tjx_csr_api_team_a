const {Sequelize, DataTypes} = require('sequelize');

module.exports = (sequelize, Sequelize) => {
    var Product = sequelize.define('product',
        {
            sku: {
                type: DataTypes.STRING,
                allowNull: false
            },
            unit_price: {
                type:DataTypes.DECIMAL,
                allowNull: false
            },
            name: {
                type:DataTypes.STRING,
                allowNull: false
            },
            quantity: {
                type:DataTypes.INTEGER,
                allowNull: false
            },
            description: {
                type:DataTypes.STRING,
                allowNull: true
            },
        },
        { timestamps: false }
    );

    return Product;
};

