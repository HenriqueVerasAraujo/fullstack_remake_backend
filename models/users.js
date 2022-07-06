'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Posts, Comments, Likes }) {
      this.hasMany(Posts, { foreignKey: 'userId' });
      this.hasMany(Comments, { foreignKey: 'userId' });
      this.hasMany(Likes, { foreignKey: 'userId' });
    }
  }
  Users.init({
    username: {
      type: DataTypes.STRING,
      allowNull: false 
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false 
    },
  }, {
    timestamps: false,
    sequelize,
    modelName: 'Users',
  });
  return Users;
};