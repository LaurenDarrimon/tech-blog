const { Author } = require('../models');

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

const seedAuthors = () =>
  Author.bulkCreate(authorData, {
    individualHooks: true,
    returning: true,
  });

module.exports = seedAuthors;