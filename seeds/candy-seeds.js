const { Candy } = require('../models');

const candyData = [
    {
        title: 'Take 5', 
        price: 2.25,
        filename: ''
    }, 
    {
        title: 'Butterfinger', 
        price: 1.65,
        filename: ''
    }, 
    {
        title: 'Payday', 
        price: 2.40,
        filename: ''
    },
    {
        title: 'Snickers', 
        price: 1.99,
        filename: ''
    },
    {
        title: 'Toblerone', 
        price: 1.50,
        filename: ''
    },
    {
        title: 'Twix', 
        price: 2.20,
        filename: ''
    },
    {
        title: 'Baby Ruth', 
        price: 1.75,
        filename: ''
    },
    {
        title: 'Whatchamacallit', 
        price: 2.99,
        filename: ''
    },
    {
        title: 'Charleston Chew', 
        price: 1.65,
        filename: ''
    },
    {
        title: 'Cadbury Flake', 
        price: 1.99,
        filename: ''
    },
    {
        title: 'Kit Kat', 
        price: 1.50,
        filename: ''
    },
    {
        title: 'Almond Joy', 
        price: 1.75,
        filename: ''
    },
    {
        title: "Hershey's Special Dark", 
        price: 2.99,
        filename: ''
    },
    {
        title: "Nestle Crunch", 
        price: 1.50,
        filename: ''
    }
]

const seedCandies = () => Candy.bulkCreate(candyData);

module.exports = seedCandies;