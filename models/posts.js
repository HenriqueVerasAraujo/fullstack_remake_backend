'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Posts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Users, Comments, Likes }) {
      this.belongsTo(Users, { foreignKey: 'userId' });
      this.hasMany(Comments, { foreignKey: 'postId' });
      this.hasMany(Likes, { foreignKey: 'postId' });
    }
  }
  Posts.init({
    username: {
      type: DataTypes.STRING,
      allowNull: false 
    },
    postText: {
      type: DataTypes.STRING(5000),
      allowNull: false
    },
    postTittle: {
      type: DataTypes.STRING,
      allowNull: false 
    },
  }, {
    sequelize,
    timestamps: false,
    modelName: 'Posts',
  });
  return Posts;
};