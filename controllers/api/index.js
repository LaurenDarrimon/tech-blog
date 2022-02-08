const router = require('express').Router();

const commentRoutes = require('./comment-routes.js');

router.use('/comment', commentRoutes);

module.exports = router;