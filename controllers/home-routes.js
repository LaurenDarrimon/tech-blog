const router = require('express').Router();
const Article = require('../models/Article');
const Author = require('../models/Author');
const Comment = require('../models/Comment');

// route to get all articles on homepage
router.get('/', async (req, res) => {
  try{
    
      const articleData = await Article.findAll({ include: [{ all: true, nested: true }]});

      const articles = articleData.map((article) => 
        article.get({ plain: true })
      );

      console.log(articles)

      //test with return json data to make sure route is working
      //res.status(200).json(articles)
      
      res.render('home', {articles, });

  } catch (err) {
      console.log(err);
      res.status(500).json(err);
      }; 
});

// route to get one article
router.get('/article/:id', async (req, res) => {
  try{ 
      const articleData = await Article.findByPk(req.params.id);
      if(!articleData) {
          res.status(404).json({message: 'No article was found with this id!'});
          return;
      }
      const article = articleData.get({ plain: true });
      //res.status(200).json(article);
      res.render('one-article', {article});
    } catch (err) {
        res.status(500).json(err);
    };     
});

//route for the login view to show 

module.exports = router;