const express = require ('express');
const app = express();
const router = require('./router/router');
const cors = require ('cors');


app.use(cors());
app.use(express.urlencoded({extended : true}));

app.use(router);
app.listen(3000 , ()=> { console.log("SERVER WORKING SUCCESSFULLY✅")})