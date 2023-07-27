const { response } = require('express');
const { Error } = require('sequelize');
const Product = require('../models/product');
const User = require('../models/user');
const email = require('../config/email')
const { validationResult} = require('express-validator')
const Auth = require('../config/auth')

// usuario se cadastra
const create = async(req,res) => {
    try {        
        validationResult(req).throw();
        const { password } = req.body;        
        const hashSalt = Auth.generatePassword(password);        
        const hash = hashSalt.hash;        
        const salt = hashSalt.salt;
        const newDataUser = {
            name: req.body.name,
            email: req.body.email,
            hash: hash,
            salt: salt,
            birthDate: req.body.birthDate,
            phone: req.body.phone,
            adress: req.body.adress,
            isModerator: req.body.isModerator,
            profilePhoto: req.body.profilePhoto
        };        
        const user = await User.create(newDataUser);
        // const message = {
        //     from: remetente,
        //     to: user.email,
        //     subject: "Olá! Tudo bem?",
        //     text: "Você agora é 100% @Robageek!, Não faça burrice se junte a @robageek!"
        // }
        // email.sendMail(message, (err) => {
        //     console.log(err + "!");
        // });

        return res.status(201).json({message: "Usuário cadastrado com sucesso!", user: user});
        
    }catch(error){
        return res.status(500).json({error: error})
    }
};

const index = async (req,res) => {
    try {
        const users = await User.findAll();
        return res.status (200).json({users});
    }catch(error){
        return res.status(500).json({error});
    }
};

const show = async(req,res) => {
    const { id} = req.params;
    try{
        const user = await User.findByPk(id);
        return res.status(200).json ({user}); 
    }catch(error){
        return res.status(500).json("Usuário não encontrado.");
    }
};

const update = async(req,res) => {
    const { id } = req.params;
    try {
        validationResult(req).throw();        
        const [updated] = await User.update(req.body, {where: {id: id }});
        if (updated){
            const user = await User.findByPk(id);
            return res.status(200).send(user);
        }
        throw new Error();
        

    }catch(error){        
        return res.status(500).json({error: error})
    }
};

const destroy = async(req,res) => {
    const { id } = req.params;
    try {
        const deleted = await User.destroy({ where: { id: id }});
        if (deleted){
            return res.status(200).json("Usuário deletado com sucesso!")
        }
        throw new Error();
    }catch (error){
        return res.status(500).json("Usuário não encontrado.")
    }
};

const favorites = async(req,res) =>{
    const { UserId } = req.params;
    const { ProductId } = req.params;
    
    try{
        let userFavorites = await User.findByPk(UserId)
        const productFavorited = await Product.findByPk(ProductId);
        await userFavorites.addFavoring(productFavorited);
        return res.status(200).json({message: "Produto favoritado" , productFavorited: productFavorited});

    }catch(error) {
        return res.status(500).json('Produto não favoritado')
    }
};

const unfavorites = async(req,res) =>{
    const { UserId } = req.params;
    const { ProductId } = req.params;
    try{
        
        let userFavorites = await User.findByPk(UserId);
        const productFavorited = await Product.findByPk(ProductId);
        await userFavorites.removeFavorited(productFavorited);
        return res.status(200).json("Produto desfavoritado!")
    }catch(error) {
        return res.status(500).json("Produto não encontrado.")
    }
};

// listar todos os favoritos do usuario
const listFav = async(req,res) => {
    const {UserId } = req.params;

    try{
        
        const listFav = await User.findByPk(UserId,{include: "favoring"});
        
        return res.status(200).json({listFav});
    }catch (error) {
        console.log(error)
        return res.status(500).json({error: error})
    }
};

const newProfilePhoto = async (req,res) => {
    const { id } = req.params;
    const path = process.env.APP_URL + "/uploads/" + req.file.filename;  
    try {  
      const updated = await User.update({ profilePhoto: path }, { where: { id: id } });  
      if (updated) {  
        const user = await User.findByPk(id);
        return res.status(200).send(user);  
      };  
      throw new Error();
  
    } catch (err) {
      return res.status(500).json("Usuário não encontrado.")
    };
  };

const removeProfilePhoto = async (req, res) => {
    try {  
      const { id } = req.params;  
      const user = await User.findByPk(id);  
      const photo = user.profilePhoto;  
      const pathDb = photo.split("/").slice(-1)[0];  
      await fsPromises.unlink(path.join(__dirname, "..", "..", "uploads", pathDb));  
      await User.update({ profilePhoto: null }, { where: { id: id } });  
      const userNew = await User.findByPk(id);  
      return res.status(200).send(userNew);  
    } catch (error) {  
      return res.status(500).json("Usuário não encontrado.")  
    };  
  };  


module.exports = {
    create,
    index,
    show,
    update,
    destroy,
    favorites,
    unfavorites,
    listFav,
    newProfilePhoto,
    removeProfilePhoto
}
