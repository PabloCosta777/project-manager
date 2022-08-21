const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const Board = sequelize.define("board", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
});
module.exports = Board;
