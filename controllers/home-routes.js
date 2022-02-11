const router = require('express').Router();
const Article = require('../models/Article');
const Author = require('../models/Author');
const Comment = require('../models/Comment');

// route to get all articles on homepage
router.get('/', async (req, res) => {
  try{
      const articleData = await Article.findAll({ 
        include: [{ all: true, nested: true }]});

      const articles = articleData.map((article) => 
        article.get({ plain: true })
      );

      //res.status(200).json(articles)  //test with return json data to make sure route is working
      
      res.render('home', {articles, 
      logged_in: req.session.logged_in,
      author: req.session.username });

  } catch (err) {
      console.log(err);
      res.status(500).json(err);
      }; 
});

// route to get one article
router.get('/article/:id', async (req, res) => {
  try{ 
      const articleData = await Article.findByPk(req.params.id, {
        include: [
          {
            model: Comment,
            attributes: ['author_name', 'comment_date', 'comment_text'],
          },
        ],
      });
     
      const article = articleData.get({ plain: true });
      //res.status(200).json(article);

      //console.log(article)
      res.render('one-article', {article, logged_in: req.session.logged_in });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    };     
});

//route for the login view to show 
router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }
  res.render('login');
});

// //all other routes 
// router.get('/*', (req, res) => {
//   // catch all for odds and ends. 
//   res.render('home');
// });

module.exports = router;