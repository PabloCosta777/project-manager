const {getAll,getByPk} = require('../services/boards')
module.exports = async(req,res)=>{
    const id = req.query.id
    const user =req.query.user
  
    if(id){
         getAll(id,res)
    }else if(user){
        getByPk(user,res)

    }else{
        res.send({ msg: "missing data" });
    }
}