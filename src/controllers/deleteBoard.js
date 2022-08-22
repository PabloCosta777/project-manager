const {deleteBoard} = require('../services/boards')
module.exports =async(req,res)=>{
    const id = req.params.id
    deleteBoard(id,res)
}