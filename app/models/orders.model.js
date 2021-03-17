const {Sequelize, DataTypes} = require('sequelize');


module.exports = (sequelize, Sequelize) => { 
    var Order = sequelize.define('order', 
        {
            customer_id: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            order_status_id: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            datetime_order_placed: {
                type: DataTypes.DATE,
                allowNull: false
            },
            total_order_price: {
                type: DataTypes.NUMBER,
                allowNull: false
            },
            notes: {
                type: DataTypes.STRING,
                allowNull: true
            }
        },
        { timestamps: false }
    );

    /*
    schema.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    const Order = mongoose.model("order", schema);
    */
    return Order;
};