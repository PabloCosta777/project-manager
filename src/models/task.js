const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const Task = sequelize.define("task", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  detail: {
    type: DataTypes.TEXT,
    allowNull: false
  }
});
module.exports = Task;
