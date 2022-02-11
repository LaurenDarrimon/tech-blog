const { Author } = require('../models');

//seed Author table with this data


const authorData = [
  {
    username: 'techwriter42',
    password: "password123",
  },
  {
    username: 'devblogger',
    password: "password456",
  },
  {
    username: 'rubberduckie',
    password: "password789",
  },
];

//add the hooks to the author creation to ensure that 
//Author will also have method to hash & salt a new 
//password upon creating or updating author
const seedAuthors = () =>
  Author.bulkCreate(authorData, {
    individualHooks: true,
    returning: true,
  });

module.exports = seedAuthors;