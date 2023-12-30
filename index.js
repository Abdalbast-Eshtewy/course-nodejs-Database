const express = require ('express');
const app = express();
const router = require('./router/router');
const cors = require ('cors');
const mongoose = require('mongoose');
const { checkUser } = require('./middleware/check');

const studentModel = require('./model/studentModel')

mongoose.connect('mongodb://127.0.0.1:27017/school?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.1.1',{
    useUnifiedTopology : true ,
    useNewUrlParser : true,
}).then( () => {
    console.log("Database Connection Successfully✅")
}).catch((err) => {
    console.log(err)
})

studentModel.create({
    name : 'abdalbast',
    age : '15',
    class : 'first',
}).then( () => {
    console.log('Student Added Successfully');
}).catch( (err) => {
    console.log(err);
})

app.use(cors());
app.use(express.urlencoded({extended : true}));

app.use(checkUser)

app.use(router);
app.listen(3000 , ()=> { console.log("SERVER WORKING SUCCESSFULLY✅")})