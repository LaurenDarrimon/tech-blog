const router = require('express').Router();

const authorRoutes = require('./author-routes.js');

router.use('/author', authorRoutes);

module.exports = router;