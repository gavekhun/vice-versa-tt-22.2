const { Router } = require('express');
const router = Router();
const UserController = require('../controllers/userController');
const ProductController = require("../controllers/productController");
const CommentController = require('../controllers/commentController');
const CartController = require('../controllers/cartController');
const AuthController = require("../controllers/authController");
const passport = require("passport");
const setAuthorizationHeader = require("../middlewares/token");
const adminMiddleware = require('../middlewares/admin');
const { validationUser } = require('../config/validator');
const { update } = require('../models/product');
const storagePackage = require('../config/files');
const path = require('path')
const multer = require('multer')

const upload = multer({

    storagePackage: storagePackage,
    fileFilter: function (req, file, cb) {
      const ext = path.extname(file.originalname);
      if (ext !== ".png" && ext !== ".jpg" && ext !== ".jpeg") {
        return cb(new Error("Extensão de arquivo inválida. Tente png, jpg ou jpeg!"), false);
      };
       cb(null, true);
    },
    limits: {
      fileSize: 3000 * 3000
    }
  });


// ROTAS PARA ADICIONAR FOTOS
router.put("/User/profile/addPhoto/:id", upload.single('profilePhoto'), UserController.newProfilePhoto);
router.put("/User/profile/removePhoto/:id", UserController.removeProfilePhoto);

// ROTAS DE AUTENTICAÇÃO
router.use("/private", passport.authenticate('jwt', {session: false}));
router.post("/login", AuthController.logining);
router.get("/private/getDetails", AuthController.getDetails);

//ROTAS PRODUCT
router.post('/Product',ProductController.create);
router.get('/Product',ProductController.index);
router.get('/Product/:id',ProductController.show);
router.put('/Product/:id', ProductController.update);
router.delete('/Product/:id', ProductController.destroy);
router.get('/Product/indexByProduct/:UserId', ProductController.indexByProduct);

// ROTAS USER
router.post("/User", validationUser('create') ,UserController.create);
router.get("/User", UserController.index);
router.get("/User/:id", UserController.show);
router.put("/User/:id", validationUser('update') ,UserController.update);
router.delete("/private/User/admin/del/:id", UserController.destroy);
router.put("/User/favorites/:UserId/:ProductId", UserController.favorites);
router.delete("/User/unfavorites/:UserId/:ProductId", UserController.unfavorites);
router.get("/User/listFav/:UserId", UserController.listFav);

// ROTAS COMENTARIOS
router.post("/Comment/:UserId/:ProductId", CommentController.create);
router.get("/Comment", CommentController.index);
router.get("/Comment/:id", CommentController.show);
router.put("/Comment/:id", CommentController.update);
router.delete("/Comment/:id", CommentController.destroy);
router.get("/Comment/indexComments/:UserId", CommentController.indexComments);
router.get("/Comment/indexCommentProduct/:ProductId", CommentController.indexCommentProduct);

// ROTAS CARRINHO
router.post("/Cart/addCart/:UserCartId/:ProductCartId", CartController.addCart);
router.delete("/Cart/removeCart/:UserCartId/:ProductCartId", CartController.removeCart);
router.get("/Cart/listProduct/:UserCartId", CartController.listProduct);

module.exports = router;