const router = require('express').Router();
const { User, Candy } = require('../../models');

// GET /api/candies
router.get('/', (req, res) => {
    Candy.findAll()
      .then(dbCandyData => res.json(dbCandyData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

// GET /api/candies/1
router.get('/:id', (req, res) => {
    Candy.findOne({
        where: {
          id: req.params.id
        },
        include: [
          {
            model: User,
            attributes: ['id', 'username', 'email']
          }
        ]
      })
        .then(dbCandyData => {
          if (!dbCandyData) {
            res.status(404).json({ message: 'No candy found with this id' });
            return;
          }
          res.json(dbCandyData);
        })
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });
});

router.post('/', (req, res) => {
  Candy.create({
      title: req.body.title,
      price: req.body.price,
      quantity: req.body.quantity,
      // filename: req.body.filename
  })
      .then(dbCandyData => res.json(dbCandyData))
      .catch(err => {
          console.log(err);
          res.status(500).json(err);
      });
});

router.put('/:id', (req, res) => {
  Candy.update(
    {
      title: req.body.title,
      price: req.body.price,
      quantity: req.body.quantity
    },
    {
        where: {
            id: req.params.id
        }
    }
  )
      .then(dbCandyData => {
          if (!dbCandyData) {
              res.status(404).json({ message: 'No candy found with this id' });
              return;
          }
          res.json(dbCandyData);
      })
      .catch(err => {
          console.log(err);
          res.status(500).json(err);
      });
});

router.delete('/:id', (req, res) => {
  Candy.destroy({
    where: {
      id: req.params.id
    }
  })
      .then(dbCandyData => {
          if (!dbCandyData) {
              res.status(404).json({ message: 'No candy found with this id' });
              return;
          }
          res.json(dbCandyData);
      })
      .catch(err => {
          console.log(err);
          res.status(500).json(err);
      });
});



module.exports = router;