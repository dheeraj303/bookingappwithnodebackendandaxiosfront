const express=require('express');
const app=express();
const bodyParser=require('body-parser');
var cors=require('cors');
const userroutes=require('./Routes/user');
const errorroutes=require('./controllers/error');
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const sequelize=require('./Util/database');
app.use(userroutes);
app.use(errorroutes.get404);
// app.listen(3000);


sequelize
.sync()
.then(result=>{
    // console.log(result);
    app.listen(3000);
}).catch();