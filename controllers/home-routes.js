const router = require('express').Router();
const { User, Candy } = require('../models');

// get all candies
router.get('/', (req, res) => {
    Candy.findAll()
    .then(dbCandyData => {
        const candies = dbCandyData.map((candy) => candy.get({ plain: true })); 
        // pass a single candy object into the homepage template
        res.render('homepage', { 
            candies,
            loggedIn: req.session.loggedIn 
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

//login
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('login');
});

//sign up
router.get('/signup', (req, res) => {
    res.render('signup');
});

router.get('/candies/:id', (req, res) => {
    Candy.findOne({
        where: {
            id: req.params.id
        }
    })
        .then(dbCandyData => {
            if (!dbCandyData) {
                res.status(404).json({ message: 'No candy found with this id' });
                return;
            }

            // serialize the data
            const candy = dbCandyData.get({ plain: true });

            // pass data to template
            res.render('edit-candy', { 
              candy,
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;