const {Sequelize, DataTypes} = require('sequelize');

module.exports = (sequelize, Sequelize) => {
    var Customer = sequelize.define('customer',
        {
            first_name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            middle_name: {
                type:DataTypes.STRING,
                allowNull: true
            },
            last_name: {
                type:DataTypes.STRING,
                allowNull: false
            },
            phone: {
                type:DataTypes.STRING,
                allowNull: false
            },
            email: {
                type:DataTypes.STRING,
                allowNull: false
            },
            notes: {
                type:DataTypes.STRING,
                allowNull: true
            },
            address_line1: {
                type:DataTypes.STRING,
                allowNull: false
            },
            address_line2: {
                type:DataTypes.STRING,
                allowNull: true
            },
            apartment_number: {
                type:DataTypes.STRING,
                allowNull: true
            },
            city: {
                type:DataTypes.STRING,
                allowNull: false
            },
            state: {
                type:DataTypes.STRING,
                allowNull: false
            },
            zip: {
                type:DataTypes.STRING,
                allowNull: false
            }

        },
        { timestamps: false }
    );

    return Customer;
};

