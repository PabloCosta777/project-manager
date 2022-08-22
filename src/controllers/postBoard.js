const {postBoard}=require('../services/boards')
module.exports =async(req, res) => {
    const {id,name} =req.body
    if(id && name){
        postBoard(name,id,res) 
    }else{
        res.send("missing data");
    }
};
