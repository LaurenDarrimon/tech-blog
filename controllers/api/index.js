const router = require('express').Router();

const commentRoutes = require('./comment-routes.js');
const userRoutes = require('./user-routes.js');

router.use('/comment', userRoutes);

module.exports = router;