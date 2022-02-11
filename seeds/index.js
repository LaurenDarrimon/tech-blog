//import requreed seed files 
const seedAuthors = require('./author-seeds');
const seedArticles = require('./article-seeds');
const seedComments = require('./comment-seeds');
//connect to the database 
const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n --- DATABASE SYNCED ----\n');
  await seedAuthors();
  console.log('\n----- AUTHORS SEEDED ---\n');

  await seedArticles();
  console.log('\n--- ARTICLES SEEDED -----\n');

  await seedComments();
  console.log('\n----- COMMENTS SEEDED -----\n');

  process.exit(0);
};

//function to run all the seed js files, filling our database tables with seed data
seedAll();
