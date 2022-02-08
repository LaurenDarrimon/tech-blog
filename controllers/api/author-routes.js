const router = require('express').Router();
const Article = require('../../models/Article');
const Author = require('../../models/Author');
const Comment = require('../../models/Comment');

// route to create/add a new article
router.post('/', async (req, res) => {
  try { 
    const articleData = await Article.create({
    title: req.body.title,
    post_content: req.body.post_content,

  });
  //for now just return json data to make sure route is working
  res.status(200).json(articleData)
} catch (err) {
  res.status(400).json(err);
}
});


module.exports = router;