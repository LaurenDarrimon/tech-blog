const { Article } = require('../models');

const articleData = [
  {
    title: "What is Rubber Duckie Programming?",
    author_id: 1,
    post_content: "My stepson is 5. He just brought me a dragon and a stuffed bunny. Talking through your code to yourself or to a small creature like a rubber duck can be very helpful.",
  },
  {
    title: "Git for Teams for Beginners",
    author_id: 1,
    post_content: "This guide is for newish developers for whom Github was perfectly reasonable when you were working solo, but found things got messier when you were hurled headlong into a team setting.",
  },
  {
    title: '7 Ways to Manage Stress for Developers',
    author_id: 2,
    post_content: 'Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm.',
  },
  {
    title: 'What is ORM?',
    author_id: 3,
    post_content: 'Deadlights jack lad schooner scallywag dance the hempen jig carouser broadside cable strike colors.  Swab barque interloper chantey doubloon starboard.',
  },
];

const seedArticles = () => Article.bulkCreate(articleData);

module.exports = seedArticles;