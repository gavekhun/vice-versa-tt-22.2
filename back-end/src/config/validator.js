const { body } = require("express-validator");

const validationUser = (method) => {
    switch(method) {
        case 'create': {
            return [
                body('email').exists().withMessage("This Field mustn't be null").isLength({min: 1}).withMessage("Preencha esse campo, por favor!").isEmail().withMessage("Precisa ser examplo@exemplo.com"),
                body('name').exists().withMessage("This Field mustn't be null").isLength({min: 1}).withMessage("Preencha esse campo, por favor!"),
                body('birthDate').exists().withMessage("This Field mustn't be null").isLength({min: 1}).withMessage("Preencha esse campo, por favor!").isDate().withMessage("Preencha assim : AAAA/MM/DD"),
            ]
        };
        case 'update': {
            
            return [
                body('email').exists().withMessage("This Field mustn't be null").isLength({min: 1}).withMessage("Preencha esse campo, por favor!").isEmail().withMessage("Precisa ser examplo@exemplo.com"),
                body('name').exists().withMessage("This Field mustn't be null").isLength({min: 5}).withMessage("Preencha esse campo, por favor!"),
                body('birthDate').exists().withMessage("This Field mustn't be null").isLength({min: 1}).withMessage("Preencha esse campo, por favor!").isDate().withMessage("Preencha assim : AAAA/MM/DD"),
            ]
        }
    }
}

module.exports = {
    validationUser
}
