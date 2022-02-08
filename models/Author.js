const { Model, DataTypes } = require("sequelize");
const bcrypt = require('bcrypt');

const Article = require('./Article');
const Comment = require('./Comment');

const sequelize = require("../config/connection.js");


/* Each new instance of the Author model will have:  
post creator’s username and password*/

class Author extends Model {}

Author.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_name: {
      type: DataTypes.STRING,
      allowNull: false,
      isUnique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8],
      },
    },
  },
  {
    //Author will also have method to verify a new password upon creating new author, call this fxn in the route 
    hooks: {
      beforeCreate: async (newUserData) => {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
    },
  
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "author",
  }
);

module.exports = Author;



