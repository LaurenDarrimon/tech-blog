const { Author } = require('../models');

const authorData = [
  {
    user_name: 'TechWriter42',
    password: "password123",
  },
  {
    user_name: 'DevBlogger',
    password: "password456",
  },
  {
    user_name: 'RubberDuckie',
    password: "password789",
  },
];

const seedAuthors = () => Product.bulkCreate(authorData);

module.exports = seedAuthors;