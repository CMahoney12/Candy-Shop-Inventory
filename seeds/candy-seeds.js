const { Candy } = require('../models');

const candyData = [
    {
        title: 'Take 5', 
        price: 2.25,
        quantity: 100,
        filename: ''
    }, 
    {
        title: 'Butterfinger', 
        price: 1.65,
        quantity: 210,
        filename: ''
    }, 
    {
        title: 'Payday', 
        price: 2.40,
        quantity: 190,
        filename: ''
    },
    {
        title: 'Snickers', 
        price: 1.99,
        quantity: 70,
        filename: ''
    },
    {
        title: 'Toblerone', 
        price: 1.50,
        quantity: 120,
        filename: ''
    },
    {
        title: 'Twix', 
        price: 2.20,
        quantity: 460,
        filename: ''
    },
    {
        title: 'Baby Ruth', 
        price: 1.75,
        quantity: 90,
        filename: ''
    },
    {
        title: 'Whatchamacallit', 
        price: 2.99,
        quantity: 170,
        filename: ''
    },
    {
        title: 'Charleston Chew', 
        price: 1.65,
        quantity: 260,
        filename: ''
    },
    {
        title: 'Cadbury Flake', 
        price: 1.99,
        quantity: 400,
        filename: ''
    },
    {
        title: 'Kit Kat', 
        price: 1.50,
        quantity: 100,
        filename: ''
    },
    {
        title: 'Almond Joy', 
        price: 1.75,
        quantity: 280,
        filename: ''
    },
    {
        title: "Hershey's Special Dark", 
        price: 2.99,
        quantity: 300,
        filename: ''
    },
    {
        title: "Nestle Crunch", 
        price: 1.50,
        quantity: 250,
        filename: ''
    }
]

const seedCandies = () => Candy.bulkCreate(candyData);

module.exports = seedCandies;