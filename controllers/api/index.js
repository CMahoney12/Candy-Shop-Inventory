const router = require('express').Router();

const userRoutes = require('./user-routes');
const candyRoutes = require('./candy-routes');

router.use('/users', userRoutes);
router.use('/candies', candyRoutes);

module.exports = router;
