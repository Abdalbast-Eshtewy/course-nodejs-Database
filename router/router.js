const express = require('express');
const router = express.Router();

const PostsController = require('../controller/PostsController');
const UsersController = require('../controller/UsersController');
const ProductController = require('../controller/ProductController');


router.get('/', (req , res) => {
    res.json({
        msg:"HELLO FROM NODE.JS PROJECT",
        state:1,
        data :[],
    })
})
router.post('/addProduct' , ProductController.addProduct)
router.post('/login', UsersController.loginUser)
router.post('/register',UsersController.registerUser)

module.exports = router;