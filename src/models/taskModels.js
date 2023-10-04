const sequelize = require("../libs/mySql.Config");

const { DataTypes } = require("sequelize");

const Task = sequelize.define("Task", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    unique: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  status: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
});
module.exports = Task;
