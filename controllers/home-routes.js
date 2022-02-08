const router = require('express').Router();
const Article = require('../models/Article');
const Author = require('../models/Author');
const Comment = require('../models/Comment');

// route to get all articles on homepage
router.get('/', async (req, res) => {
  const articleData = await Article.findAll().catch((err) => { 
      res.json(err);
    });
      const articles = articleData.map((article) => article.get({ plain: true }));
      //for now just return json data to make sure route is working
      res.status(200).json(articles)
      //res.render('all', { articles: articles });
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
      res.status(200).json(article);
      //res.render('article', article);
    } catch (err) {
        res.status(500).json(err);
    };     
});

module.exports = router;