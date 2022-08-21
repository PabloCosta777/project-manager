const Board =require('./board')
const Task=require('./task')
const User=require('./user')

User.hasMany(Board);
Board.belongsTo(User);

Board.hasMany(Task)
Task.belongsTo(Board)