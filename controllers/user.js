const User=require('../models/user');

exports.getform=(req,res,next)=>{

    res.send('<h1>I am a form</h1>');
}

exports.postform=(req,res,next)=>{
    console.log(req.body);
    const name=req.body.name;
    const email=req.body.email;
    const phone=req.body.phone;
    User.create({
        name:name,
        email:email,
        contact:phone
    }).then(()=>{
        res.json([{"status":"1", "message":"successfull"}]);
    }).catch(err=>console.log(err));
    // res.send('<h1>I will submit the form</h1>');
}

exports.getusers=(req,res,next)=>{
    User.findAll().then((users)=>{
        res.json(users);
    }).catch(err=>console.log(err));
    // res.send('<h1>I will display every user detail</h1>');
}

exports.deleteuser=(req,res,next)=>{
    const id=req.params.id;
    User.findByPk(id)
    .then(user=>{
        return user.destroy();
    })
    .then(()=>{
        res.json([{"status":"1", "message":"successfully deleted"}]);
    })
    .catch(err=>console.log(err));
}