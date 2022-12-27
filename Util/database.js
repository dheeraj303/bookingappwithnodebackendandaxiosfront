const Sequelize=require('sequelize');
const sequelize=new Sequelize('booking','nodeproject','nodeproject',{
    dialect:'mysql',
    host:'localhost'
});
module.exports=sequelize;