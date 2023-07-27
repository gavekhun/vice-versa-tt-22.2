const User = require("../models/user");
const Auth = require("../config/auth");


const admin = async(req, res, next) => {
    
    try {
        const token = Auth.getToken(req);
		const payload = Auth.decodeJwt(token);
		const user = await User.findByPk(payload.sub);
        
        if(user.isModerator == 1) {
        return next();
        }
        else {
        return res.status(401).json({'error': 'Sem autorização para tal acesso'});
        }
    }catch(error) {
        return res.status(500).json({'error': 'Não foi possível'});
    }
}

module.export = admin;