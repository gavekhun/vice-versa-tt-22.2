const User = require("../../models/user");
const {faker} = require('@faker-js/faker')

const seedUser = async function (){
    try {
        await User.sync({ force: true});

        for (let i = 0; i < 10; i++){
            await User.create({
                name: faker.name.fullName(),
                email: faker.internet.email(),
                birthDate: faker.date.birthdate( { min: 18, max: 65, mode: 'age'}),
            })
        } 
    } catch (err) {
        console.log(err);
    }
    
    
};

module.exports = seedUser;