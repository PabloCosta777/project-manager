const {updateBoard} = require('../services/boards')
module.exports =async(req,res)=>{
    const {id,name} =req.body
    if(id && name){
        updateBoard(id,name,res)
    }else{
        res.send({msg:'missing data'})
    }
}