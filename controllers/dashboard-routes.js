const router = require('express').Router();
const Article = require('../models/Article');
const Author = require('../models/Author');
const Comment = require('../models/Comment');


//route for all articles by author id
router.get('/:id', async (req, res) => {
    try{
        const articleData = await Article.findAll({
            where: {
              author_id: req.params.id,
            }
        });
        res.status(200).json(articleData);
    }
    catch (err) {
        res.status(400).json(err); 
    }
});

// route to create/add a new article by author id
router.post('/article/:id', async (req, res) => {
  try { 
    const articleData = await Article.create({
    title: req.body.title,
    post_content: req.body.post_content,
    author_id: req.params.id,
  });
  //for now just return json data to make sure route is working
  res.status(200).json(articleData)
} catch (err) {
  res.status(400).json(err);
}
});

//route to update post by id 
router.put('/article/:id', async (req, res) => {
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

  //route to log out of dashboard

  module.exports = router;