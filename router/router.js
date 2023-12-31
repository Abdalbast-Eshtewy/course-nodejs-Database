const express = require('express');
const router = express.Router();



const UsersController = require('../controller/UsersController');

// const PostsController = require('../controller/PostsController');
// const ProductController = require('../controller/ProductController');
// const validation = require('../middleware/validation');

// router.get('/', (req , res) => {
//     res.json({
//         msg:"HELLO FROM NODE.JS PROJECT",
//         state:1,
//         data :[],
//     })
// })
// router.post('/addProduct' , ProductController.addProduct)
// router.post('/login',validation.loginFields,UsersController.logincontroller)
// router.post('/register',validation.registerFields,UsersController.registercontroller)
// router.post('/users/salarys', UsersController.getAllSalarys)
router.get('/find',UsersController.find );
router.get('/findOne/:name',UsersController.findOne);
router.post('/create', UsersController.create);




module.exports = router;