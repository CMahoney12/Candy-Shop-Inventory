const router = require('express').Router();
const withAuth = require('../utils/auth');
const { Candy, User } = require('../models');

// add candy to cart
router.get('/cart/:id', (req, res) => {
    Candy.findOne({
        where: {
            id: req.params.id
        },
    })
      .then(dbCandyData => {
        if (dbCandyData) {
          const candy = dbCandyData.get({ plain: true });
          
          res.render('cart', {
            candy,
          });
        } else {
          res.status(404).end();
        }
      })
      .catch(err => {
        res.status(500).json(err);
      });
  });



module.exports = router;
