const {Sequelize, DataTypes} = require('sequelize');


module.exports = (sequelize, Sequelize) => { 
    var Orders = sequelize.define('Orders', 
        {
            customer_id: Number,
            order_status_code: String,
            datetime_order_placed: Date,
            total_order_price: Number,
            order_notes: String
        },
        { timestamps: false }
    );

    schema.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    const Order = mongoose.model("order", schema);
    return Order;
};