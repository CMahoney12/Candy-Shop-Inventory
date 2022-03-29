const { Candy } = require('../models');

const candyData = [{
        title: 'Take 5',
        price: 2.25,
        filename: 'Take 5.jpg'
    },
    {
        title: 'Butterfinger',
        price: 1.65,
        filename: 'Butterfinger.jpg'
    },
    {
        title: 'Payday',
        price: 2.40,
        filename: 'Payday.jpg'
    },
    {
        title: 'Snickers',
        price: 1.99,
        filename: 'Snickers.jpg'
    },
    {
        title: 'Toblerone',
        price: 1.50,
        filename: 'Toblerone.jpg'
    },
    {
        title: 'Twix',
        price: 2.20,
        filename: 'Twix.jpg'
    },
    {
        title: 'Baby Ruth',
        price: 1.75,
        filename: 'BabyRuth.jpg'
    },
    {
        title: 'Whatchamacallit',
        price: 2.99,
        filename: 'Whatchamacallit.jpg'
    },
    {
        title: 'Charleston Chew',
        price: 1.65,
        filename: 'Charleston Chew.jpg'
    },
    {
        title: 'Cadbury Flake',
        price: 1.99,
        filename: 'Cadbury Flake.webp'
    },
    {
        title: 'Kit Kat',
        price: 1.50,
        filename: 'Kit Kat.jpeg'
    },
    {
        title: 'Almond Joy',
        price: 1.75,
        filename: 'Almond Joy.jpg'
    },
    {
        title: "Hershey's Special Dark",
        price: 2.99,
        filename: "Hershey's Special Dark.webp"
    },
    {
        title: "Nestle Crunch",
        price: 1.50,
        filename: 'Nestle Crunch.webp'
    }
]

const seedCandies = () => Candy.bulkCreate(candyData);

module.exports = seedCandies;