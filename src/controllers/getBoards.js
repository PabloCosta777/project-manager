const board = require("../models/board");
const task = require("../models/task");
module.exports = async(req,res)=>{
    const id = req.query.id
    const user =req.query.user
    if(id){
        const response = await board.findByPk(id,{include:task})
        res.send(response.tasks)
    }else if(user){
        const response =await board.findAll({where:{id:user}})
        res.send(response)

    }else{
        res.send({ msg: "missing data" });
    }
}