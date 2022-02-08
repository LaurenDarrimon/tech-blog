const { Model, DataTypes } = require("sequelize");

const Author = require('./Author');
const Article = require('./Article');

const sequelize = require("../config/connection.js");

class Comment extends Model {}


/* Each new instance of the comment model will
 - display the comment contents, the comment creator’s username, and the date created */

Comment.init(
  {

    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    comment_date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
    comment_text: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    author_id:{
        type: DataTypes.INTEGER,
        references: {
          model: "author",
          key: 'id',
        },
    }, 
    article_id:{
        type: DataTypes.INTEGER,
        references: {
          model: "article",
          key: 'id',
        },
    } 
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "comment",
  }
);

module.exports = Comment;


