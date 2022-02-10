const router = require('express').Router();

const userRoutes = require('./api/user-routes');
const homeRoutes = require('./home-routes');
const dashboardRoutes = require('./dashboard-routes');

router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/user', userRoutes);

module.exports = router;