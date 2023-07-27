const Comment = require("../../models/comment");
const {faker} = require('@faker-js/faker')

const seedComment = async function (){
    try {
        await Comment.sync({ force: true});

        for (let i = 0; i < 5; i++){
            await Comment.create({
                comment: faker.lorem.text(),   
            })
        } 
    } catch (err) {
        console.log(err);
    }
    
    
};

module.exports = seedComment;