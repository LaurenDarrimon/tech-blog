const { Author } = require('../models');

const authorData = [
  {
    username: 'TechWriter42',
    password: "password123",
  },
  {
    username: 'DevBlogger',
    password: "password456",
  },
  {
    username: 'RubberDuckie',
    password: "password789",
  },
];

const seedAuthors = () => Author.bulkCreate(authorData);

module.exports = seedAuthors;