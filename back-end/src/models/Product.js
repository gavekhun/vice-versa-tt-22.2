const DataTypes = require ('sequelize');
const sequelize = require('../config/sequelize');

const Product  = sequelize.define('Product', {

    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.DOUBLE,
        allowNull: false

    },
    description: {
        type: DataTypes.TEXT,
        allowNull:false

    },
    productPhoto:{
        type: DataTypes.STRING,
    },
    quantify: {
        type: DataTypes.STRING,
    }
    
},

{timestamps: false}

);

Product.associate = function(models){
    Product.belongsTo(models.User),
    Product.hasMany(models.Comment),
    Product.belongsToMany(models.User,{    
        through:models.Cart,
        as: 'cart',
        foreignKey: 'ProductCartId',
        timestamps: false 
    }),
    Product.belongsToMany(models.User,{
        through:'Favorites',
        as: 'favorited',
        foreignKey: 'ProductUserId'
    })
};

module.exports = Product;