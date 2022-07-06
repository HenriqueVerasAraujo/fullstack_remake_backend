'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Likes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Users, Posts}) {
      this.belongsTo(Users, { foreignKey: 'userId' });
      this.belongsTo(Posts, { foreignKey: 'postId' });
    }
  }
  Likes.init({}, {
    sequelize,
    timestamps: false,
    modelName: 'Likes',
  });
  return Likes;
};