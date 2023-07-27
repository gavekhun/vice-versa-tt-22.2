require('../../config/dotenv')();
require('../../config/sequelize');
const {faker} = require('@faker-js/faker')

const seedUser = require('./seedUser');
const seedProduct = require('./seedProduct');
const seedCart = require('./seedCart');
const seedComment = require('./seedComment');

(async () => {
  try {
    await seedUser();
    await seedProduct();
    await seedCart();
    await seedComment();

  } catch(err) { console.log(err) }
  
})();
