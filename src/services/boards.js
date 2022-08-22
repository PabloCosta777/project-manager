const Board =require('../models/board')
const task = require("../models/task");
module.exports = {
    getAll:async(userId,res)=>{
     Board.findAll({where:{userId}})
     .then(e=>res.send(e))
     .catch(error=>res.send(error))
     
    },
    getByPk:async(id,res)=>{
    Board.findAll({ where: {id},include:task })
    .then(e=>res.send(e))
    .catch(error=>res.send(error))
   
    },
    postBoard:async(name,id,res)=>{
      await Board.create({ name, userId: id })
        .then((e) => res.send({ msg: "done" }))
        .catch((e) => res.send(e));
    },
    updateBoard:async(id,name,res)=>{
        const updt = await Board.findByPk(id)
        updt.update({name})
        .then(res.send('done'))
        .catch(e=>res.send(e))
    },deleteBoard:async(id,res)=>{
        Board.destroy({where:{id}})
        .then(res.send('done'))
        .catch(e=>res.send(e))
    }
}