'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Users, Posts }) {
      this.belongsTo(Posts, { foreignKey: 'postId' })
      this.belongsTo(Users, { foreignKey: 'userId' })
    }
  }
  Comments.init({
    commentText: {
      type: DataTypes.STRING(500),
      allowNull: false 
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false 
    },
  }, {
    sequelize,
    timestamps: false,
    modelName: 'Comments',
  });
  return Comments;
};