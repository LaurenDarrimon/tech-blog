const { Article } = require('../models');

const articleData = [
  {
    title: "What is Rubber Duckie Programming?",
    post_author: 'TechWriter42',
    post_content: "My stepson is 5. He just brought me a blue dragon and a stuffed bunny puppet to keep safe while he has a pillow fight. I'm stoked because talking through your code to yourself or to a small creature like a rubber duck can be very helpful. Mr. Dragon and Bedtime Bunny are helping me decbug this app.",
  },
  {
    title: "Git for Teams for Beginners",
    post_author: 'TechWriter42',
    post_content: "This guide is for newish developers for whom Github was perfectly reasonable when you were working solo, but found things got messier when you were hurled headlong into a team setting. This is what I wish I had known before diving in to Github for teams and projects.",
  },
  {
    title: '7 Ways to Manage Stress for Developers',
    post_author: 'DevBlogger',
    post_content: 'Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow\'s nest nipperkin grog yardarm hempen halter furl. Swab barque interloper chantey doubloon starboard grog black jack gangway rutters.',
  },
  {
    title: 'What is ORM?',
    post_author: 'RubberDuckie',
    post_content: 'Deadlights jack lad schooner scallywag dance the hempen jig carouser broadside cable strike colors.  Swab barque interloper chantey doubloon starboard grog black jack gangway rutters.',
  },
];

const seedArticles = () => Product.bulkCreate(articleData);

module.exports = seedArticles;