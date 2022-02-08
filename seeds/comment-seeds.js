const { Comment } = require('../models');

const commentData = [
  {
    comment_author: 'TechWriter42',
    article_id: 4,
    comment_text: "This is a very useful post if you are new to sequalize or other ORM",
  },
  {
    comment_author: 'TechWriter42',
    article_id: 3,
    comment_text: "great job, very clear.",
  },
  {
    comment_author: 'DevBlogger',
    article_id: 3,
    comment_text: "I know I need to manage stress better!",
  },
  {
    comment_author: 'RubberDuckie',
    article_id: 2,
    comment_text: "nice work!",
  },
  {
    comment_author: 'RubberDuckie',
    article_id: 1,
    comment_text: "What a cute article!",
  },
];

const seedComments = () => Product.bulkCreate(commentData);

module.exports = seedComments;