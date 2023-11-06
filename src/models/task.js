"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Task.hasMany(models.Comment, {
        foreignKey: "task_id",
      });
    }
  }
  Task.init(
    {
      title: DataTypes.STRING,
      finished:{
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Task",
    },
  );

  return Task;
};
