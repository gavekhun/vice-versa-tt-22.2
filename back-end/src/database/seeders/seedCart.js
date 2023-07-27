const Cart = require("../../models/cart");
const sequelize = require("../../config/sequelize");
const {faker} = require('@faker-js/faker');
const Product = require("../../models/product");
const User = require("../../models/user");

const seedCart = async function (){
    try {
        await Cart.sync({ force: true});

        for (let i = 0; i < 5; i++) {
            const product = await Product.findAll({
              order: sequelize.random(),
              limit: 1,
            });
            const user = await User.findAll({ order: sequelize.random(), limit: 1 });
            await Cart.create({
              quantify: faker.random.numeric(),
              UserCartId: user[0].id,
              ProductCartId: product[0].id,
            });

          }
    } catch (err) {
        console.log(err);
    }
    
    
};

module.exports = seedCart;