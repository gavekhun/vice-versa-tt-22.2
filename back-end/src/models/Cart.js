const DataTypes = require ('sequelize');
const sequelize = require('../config/sequelize');

const Cart  = sequelize.define('Cart', {

    quantify: {
        type: DataTypes.INTEGER,
    }

},

{
    timestamps: false
},

);

module.exports = Cart;