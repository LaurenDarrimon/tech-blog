const router = require('express').Router();
const Article = require('../models/Article');
const Author = require('../models/Author');
const Comment = require('../models/Comment');
const withAuth = require('../utils/auth');


//route for all articles by author username
router.get('/:username', withAuth, async (req, res) => {
    try{
        const articleData = await Article.findAll({
            where: {
              author_name: req.params.username,
            }, 
            include: [{ all: true, nested: true }],
        });

        const articles = articleData.map((article) => 
          article.get({ plain: true })
        );

        res.render('dashboard', {articles, 
          logged_in: req.session.logged_in, 
          author: req.session.username });
    }
    catch (err) {
        console.log(err);
        res.status(400).json(err); 
    }
});

router.get('/', withAuth, async (req, res) => {
  try{
      const articleData = await Article.findAll({
          where: {
            author_name: req.session.username,
          }, 
          include: [{ all: true, nested: true }],
      });

      const articles = articleData.map((article) => 
        article.get({ plain: true })
      );

      res.render('dashboard', {articles, 
        logged_in: req.session.logged_in, 
        author: req.session.username });
  }
  catch (err) {
      console.log(err);
      res.status(400).json(err); 
  }
});

//route to display form to post a new article 
//later add withAuth middleware
router.get('/:username/post/', withAuth, async (req, res) => {
  return res.render('post', {
    author:req.session.username, 
    logged_in: req.session.logged_in });
});


// route to create/add a new article by author
router.post('/publish', async (req, res) => {
  try { 
    const articleData = await Article.create({
      title: req.body.title,
      post_content: req.body.post_content,
      author_name:req.session.username
  });

    res.status(200).json(articleData);
  } catch (err) {
    res.status(400).json(err);
  }
});


//GET route to show post update form 
router.get('/article/update/:id', async (req, res) => {
  try{ 
      const articleData = await Article.findByPk(req.params.id);
     
      const article = articleData.get({ plain: true });
      //res.status(200).json(article);
      res.render('edit-article', {
        article, 
        logged_in: req.session.logged_in, 
        author: req.session.username });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    };     
});




//PUT route to update post by id 
router.put('/article/update/:id', async (req, res) => {
    // update an artilce by its `id` value
    try {
      const articleData = await Article.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
      if (!articleData[0]) {
        res.status(404).json({ message: 'No existing article with this id was found!' });
        return;
      }
      res.status(200).json(articleData);
    } catch (err) {
      res.status(500).json(err);
    }
});
  

//route to delete post by id 
router.delete('/article/:id', async (req, res) => {
    // delete one article by its `id` value
    try {
      const articleData = await Article.destroy({
        where: {
          id: req.params.id,
        },
      });
  
      if (!articleData) {
        res.status(404).json({ message: 'No article was found with that id.' });
        return;
      }
  
      res.status(200).json(articleData);
    } catch (err) {
      res.status(500).json(err);
    }
});



  module.exports = router;