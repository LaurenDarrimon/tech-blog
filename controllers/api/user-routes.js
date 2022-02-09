const router = require('express').Router();
const { Article, Author, Comment}  = require('../../models/');



//route to create a new user login

router.post('/', async (req, res) => {
    try {
      const authorData = await Author.create(req.body);
  
      req.session.save(() => {
        req.session.username.toLowerCase = authorData.username;
        req.session.logged_in = true;
  
        res.status(200).json(userData);
      });
    } catch (err) {
      res.status(400).json(err);
    }
  });


//route to login 


//route to logout






module.exports = router;