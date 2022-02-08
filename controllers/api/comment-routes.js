const router = require('express').Router();
const Article = require('../../models/Article');
const Author = require('../../models/Author');
const Comment = require('../../models/Comment');



//route for getting all comments on an article by article id
router.get('/:id', async (req, res) => {
  try{
      const commentData = await Comment.findAll({
          where: {
            article_id: req.params.id,
          }
      });
      res.status(200).json(commentData);
  }
  catch (err) {
      res.status(400).json(err); 
  }
});


// COME BACK TO THIS 
//how do we add author? how do we know who is logged in? 
//route to create/add a new comment on an article by article id 
router.post('/:id', async (req, res) => {
  try { 
    const commentData = await Comment.create({
    where: {
      article_id: req.params.id,
    },
    comment_text: req.params.comment_text,
    
  });
  //for now just return json data to make sure route is working
  res.status(200).json(articleData)
} catch (err) {
  res.status(400).json(err);
}
});






module.exports = router;