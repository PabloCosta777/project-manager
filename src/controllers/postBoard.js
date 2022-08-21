const board = require("../models/board");
module.exports = async (req, res) => {
    const {id,name} =req.body
    if(id && name){
        const bo = await board.create({ name, userId: id });
        res.send("done");
    }else{
        res.send("missing data");
    }
};
