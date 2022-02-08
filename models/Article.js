const { Model, DataTypes } = require("sequelize");

const Author = require('./Author');
const Comment = require('./Comment');

const sequelize = require("../config/connection.js");

/* Each new instance of the article model will have:  
title and the date created, contents, post creator’s username */

class Article extends Model {}

Article.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    publish_date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
    post_content: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    author_id:{
        type: DataTypes.INTEGER,
        references: {
          model: "author",
          key: 'id',
        },
    } 
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "article",
  }
);

module.exports = Article;


/* Each new instance of the article model will have:  post title and the date created, contents, post creator’s username, */