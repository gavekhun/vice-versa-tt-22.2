const { response } = require ('express');
const Cart = require('../models/cart');
const Product = require('../models/product');
const User = require('../models/user');

//  relacionamento para adicionar um produto ao carrinho
const addCart = async(req,res) => {
    const { ProductCartId} = req.params;
    const { UserCartId } = req.params;
    try {
        console.log("oi")
        let userCart = await User.findByPk(UserCartId);
        const product = await Product.findByPk(ProductCartId);
        await userCart.addCart(product);
        await Cart.update(req.body, {where: {UserCartId: UserCartId, ProductCartId: ProductCartId}});
        return res.status(200).json("Item adicionado ao carrinho!");
    }catch (error) {
        return res.status(500).json({error: "Não foi possivel adicionar ao carrinho."});
    };
};

const removeCart = async(req,res) => {
    const  {ProductCartId} = req.params;
    const {UserCartId} = req.params;
    try {
        let userCart = await User.findByPk(UserCartId);
        const product = await Product.findByPk(ProductCartId);
        await userCart.removeCart(product);
        return res.status(200).json("Item removido do carrinho.");
    }catch (error) {
        return res.status(500).json({error: "Produto não retirado do carrinho"})
    }
};


// Motrar todos os produtos do carrinho de um usuario
const listProduct = async (req, res) => {
    const { UserCartId } = req.params;
    try {

        const listCart = await Cart.findAll({ where: { UserCartId: UserCartId } });
        const productCartIds = listCart.map((table)=> table.ProductCartId);
        const productsCart = await Product.findAll({where: {id: productCartIds}});
        return res.status(200).json({ productsCart });

    } catch (error) {
        return res.status(500).json({ error: "Não foi possível adicionar esse produto ao carrinho." });
    };
};

module.exports ={
    addCart,
    removeCart,
    listProduct
}