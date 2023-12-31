const { response } = require('express');
const Product = require('../models/product');


const create = async(req,res) => {
    try{
          const product = await Product.create(req.body);
          return res.status(201).json({message: "O produto foi cadastrado!", product: product});
      }catch(err){
          res.status(500).json({error: "O produto não foi cadastrado."});
      }
};

const index = async(req,res) => {
    try {
        const products = await Product.findAll();
        return res.status(200).json({products});
    }catch(err){
        return res.status(500).json({error: "Não há produtos cadastrados em nossa plataforma."});
    }
};

const show = async(req,res) => {
    const {id} = req.params;
    try {
        const product = await  Product.findByPk(id);
        return res.status(200).json({product});
    }catch(err){
        return res.status(500).json({err});
    }
};

const update = async(req,res) => {
    const {id} = req.params;
    try {
        const [updated] = await Product.update(req.body, {where: {id: id}});
        if(updated) {
            const product = await Product.findByPk(id);
            return res.status(200).send(product);
        } 
        throw new Error();
    }catch(err){
        return res.status(500).json("Produto não encontrado.");
    }
};

const destroy = async(req,res) => {
    const {id} = req.params;
    try {
        const deleted = await Product.destroy({where: {id: id}});
        if(deleted) {
            return res.status(200).json("O produto foi deletado com sucesso.");
        }
        throw new Error ();
    }catch(err){
        return res.status(500).json("Produto não encontrado.");
    }
};

// Mostrar todos os produtos referentes de um usuário
const indexByProduct = async(req,res) => {
    try {
        const {UserId} = req.params;
        const products = await Product.findAll({where: {UserId: UserId}});
         if (products != "")
            return res.status(200).json({ products });
         throw new Error();
    } catch (err) {
        return res.status(500).json({ error: "Não há nenhum produto cadastrado pelo usuário"});
    }
};

module.exports = {
    index,
    show,
    create,
    update,
    destroy,
    indexByProduct,
};

