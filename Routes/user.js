const express=require('express');
const Router=express.Router();
const shopcontroller=require('../controllers/user');

Router.get('/',shopcontroller.getform);

Router.post('/save',shopcontroller.postform);

Router.get('/getuser',shopcontroller.getusers);
Router.get('/deleteuser/:id',shopcontroller.deleteuser);

module.exports=Router;