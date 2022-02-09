const { Comment } = require('../models');

const commentData = [
  {
    author_name: 'TechWriter42',
    article_id: 4,
    comment_text: "This is a very useful post if you are new to sequalize or other ORM",
  },
  {
    author_name: 'TechWriter42',
    article_id: 3,
    comment_text: "great job, very clear.",
  },
  {
    author_name: 'DevBlogger',
    article_id: 3,
    comment_text: "I know I need to manage stress better!",
  },
  {
    author_name: 'DevBlogger',
    article_id: 2,
    comment_text: "nice work!",
  },
  {
    author_name: 'RubberDuckie',
    article_id: 1,
    comment_text: "What a cute article!",
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;