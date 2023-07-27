const { response } = require('express');
const User = require('../models/user');
const Comment = require("../models/comment");
const Product = require("../models/product");

const create = async(req,res) => {
    try {
        
        const { UserId } = req.params;
        const user = await User.findByPk(UserId);
        const { ProductId } = req.params; 
        const product = await Product.findByPk(ProductId);
        const Comments = {
             comment: req.body.comment,
         };        
        const comment = await Comment.create(Comments);
        await comment.setUser(user);
        await comment.setProduct(product);
        return res.status(201).json({message: "Comentário criado com sucesso", comment: comment});

    }catch (error) {
        return res.status(500).json({error})
    }
}

const index = async(req,res) => {
    try {
        const comment = await Comment.findAll();
        return res.status(200).json({comment})
    }catch(error) {
        return res.status(500).json({error});
    }
};

const show = async(req,res) => {
    const { id } = req.params;
    try {
        const comment = await Comment.findByPk(id);
        if (comment) {
            const comment = await Comment.findByPk(id)
            return res.status(200).json({comment});

        }
        
    }catch (error) {
        return res.status(500).json({error});
    }
};

const update = async(req,res) => {
    const { id } = req.params;
    try{
        const [updated] = await Comment.update(req.body, {where: {id: id}});
        if (updated) {
            const comment = await Comment.findByPk(id);
            return  res.status(200).send(comment);

        }
        throw new Error();
    }catch(error) {
        return res.status(500).json({error});
    }
};

const destroy = async(req,res) => {
    const { id } = req.params;
    try {
        const deleted = await Comment.destroy({where: {id: id }});
        if (deleted) {
            return res.status(200).json("Comentário deletado com sucesso!")
        }
        throw new Error();
    }catch (error) {
        return res.status(500).json("Comentário não encontrado!");
    }
};

// Mostrar todos os comentários do usuário
const indexComments = async(req,res) => {
    try {
        const { UserId } = req.params;
        const comment = await Comment.findAll({where: { UserId: UserId}});
        if (comment != "") {

            return res.status(200).json({comment});
        }
        throw new Error();
    }catch(error){
        return res.status(500).json({error: "Sem comentários"})
    }
};

//  Mostrar todos os comentários de um produto
const indexCommentProduct = async(req,res) => {
    try{
        const { ProductId } = req.params;
        const comment = await Comment.findAll({where: {ProductId: ProductId} });
        
            return res.status(200).json({comment});
        
        throw new Error();
    }catch (error) {
        return res.status(500).json({error: "Sem comentários"})
    }
}
module.exports = {
    create,
    index,
    show,
    update,
    destroy,
    indexComments,
    indexCommentProduct
}