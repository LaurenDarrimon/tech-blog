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

      const comments = commentData.map((comment) => comment.get({ plain: true }));

      res.render('home', {comments, 
        logged_in: req.session.logged_in  });
      }
  catch (err) {
      res.status(400).json(err); 
  }
});


//route to create/add a new comment on an article by article id 
router.post('/:id', async (req, res) => {
  try { 

    // article_id: req.body.article_id, 
    // comment_text: req.body.comment,
    // author_name: req.session.username
    // author_name: req.session.username;

    //const commentData = await Comment.create( req.body, );    

    const commentData = await Comment.create( {
      ...req.body,
      author_name: req.session.username,
    } );   

  res.status(200).json(commentData)
} catch (err) {
  res.status(400).json(err);
}
});

module.exports = router;