const Board =require('../models/board')
module.exports = {
    getAll:async(id)=>{
        const response =  Board.findAll({where:{userid:id}})
        return response 
    }
}