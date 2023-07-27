const DataTypes = require ('sequelize');
const sequelize = require('../config/sequelize');

const Comment  = sequelize.define('Comment', {

    comment: {
        type: DataTypes.STRING,
        allowNull: false
    },

},

{timestamps: false}

);

Comment.associate = function(models){
    Comment.belongsTo(models.Product, {
        foreignKey:{
            allowNull: false
        }
    }),
    Comment.belongsTo(models.User, {
        foreignKey: {
            allowNull: false
        }
    });
};

module.exports = Comment;