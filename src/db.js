const { Sequelize } = require("sequelize");
require("dotenv").config();
const Conection = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: "postgres",
    define: { timestamps: false },
    logging: false
  }
);
module.exports = Conection;
