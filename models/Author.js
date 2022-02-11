const { Model, DataTypes } = require("sequelize");
const bcrypt = require('bcrypt');

const Article = require('./Article');
const Comment = require('./Comment');

const sequelize = require("../config/connection.js");


//Author will have instance method to check password
class Author extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

/* Each new instance of the Author model will have:  
post creator’s username and password*/
Author.init(
  {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
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
    //Author will also have method to hash & salt a new password upon creating or updating author
    hooks: {
      beforeCreate: async (newUserData) => {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
      beforeUpdate: async (updatedUserData) => {
        updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
        return updatedUserData;
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



