const DataTypes = require ('sequelize');
const sequelize = require('../config/sequelize');

const User  = sequelize.define('User', {

    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    hash: {
        type: DataTypes.STRING,       
    },
    salt: {
        type: DataTypes.STRING,
        
    },
    birthDate: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING,
    },
    adress: {
        type: DataTypes.STRING,
    },
    isModerator: {
        type: DataTypes.BOOLEAN,
    },
    profilePhoto:{
        type: DataTypes.STRING,

    }

},

{timestamps: false}

);

User.associate = function(models){
    User.belongsToMany(models.Product,{
        through:models.Cart,
        as: 'cart',
        foreignKey: 'UserCartId' ,
        timeStamps: false
    }),
    User.hasMany(models.Comment),
    User.belongsToMany(models.Product,{
        through:'Favorites',
        as: 'favoring',
        foreignKey: 'UserProductId'
    }),
    User.hasMany(models.Product)
};

module.exports = User;