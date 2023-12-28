const express = require ('express');
const app = express();
const router = require('./router/router');
const cors = require ('cors');
const mongoose = require('mongoose');
const { checkUser } = require('./middleware/check');


app.use(cors());
app.use(express.urlencoded({extended : true}));

app.use(checkUser)

app.use(router);
app.listen(3000 , ()=> { console.log("SERVER WORKING SUCCESSFULLY✅")})