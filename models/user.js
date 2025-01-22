const bcrypt = require('bcrypt');
'use strict';
const {
  Model,
  Sequelize,
  DataTypes
} = require('sequelize');
const sequelize = require('../config/database');
module.exports = sequelize.define('User',{

  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  userType: {
    type: DataTypes.ENUM('0','1','2')
  },
  firstName: {
    type: DataTypes.STRING
  },
  lastName: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING
  },
  password: {
    type: DataTypes.STRING
  },
  confirmPassword: 
  {
   type:DataTypes.VIRTUAL,
   set(value){
    if(value === this.password){
      const hashPassword = bcrypt.hashSync(value,10);
      this.setDataValue('password',hashPassword);

    }else{
      throw new Error('Passwords do not match.')
    }
   }

  },
  createdAt: {
    allowNull: false,
    type: Sequelize.DATE
  },
  updatedAt: {
    allowNull: false,
    type: Sequelize.DATE
  },
  deletedAt:{
    type: Sequelize.DATE,
  }


},{
  paranoid: true,
  freezeTableNames: true,
  moduleName:'User'
}

)