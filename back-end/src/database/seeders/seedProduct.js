const Product = require("../../models/product");
const {faker} = require('@faker-js/faker')

const seedProduct = async function (){
    try {
        await Product.sync({ force: true});

        for (let i = 0; i < 5; i++){
            await Product.create({
                name: faker.commerce.productName(),
                category: faker.commerce.productAdjective(),
                price: faker.commerce.price(25, 400, 2, 'R$'),
                description: faker.lorem.text(),   
            })
        } 
    } catch (err) {
        console.log(err);
    }
    
    
};

module.exports = seedProduct;