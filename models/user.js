'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    user: DataTypes.STRING,
    age: DataTypes.INTEGER,
    active: DataTypes.BOOLEAN
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};