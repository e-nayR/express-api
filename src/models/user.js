'use strict';
const bcrypt = require("bcryptjs");
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Comment,{
        foreignKey:'user_id'
      })
    }
  }
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    recovery_key:DataTypes.STRING,
    timeExpireKey:DataTypes.DATE
  },{
    hooks:{
      beforeCreate:async (User)=>{
        if (User.password) {
          const salt = await bcrypt.genSaltSync(10, "a");
          User.password = bcrypt.hashSync(User.password, salt);
        }
      },
      beforeUpdate: async (User)=>{
        if (User.password) {
          const salt = await bcrypt.genSaltSync(10, "a");
          User.password = bcrypt.hashSync(User.password, salt);
        }
      }
    },
    sequelize
  });
  return User;
}