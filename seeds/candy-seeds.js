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
    },
    {
        title: 'Butterfinger',
        price: 1.65,
        filename: 'Butterfinger.jpg'
    },
    {
        title: 'Chunky',
        price: 2.40,
        filename: 'Chunky Bar.jpg'
    },
    {
        title: 'Mounds',
        price: 1.99,
        filename: 'Mounds.jpg'
    },
    {
        title: 'Bounty',
        price: 1.50,
        filename: 'Bounty-Bar.jpg'
    },
    {
        title: 'Nestle Crunch',
        price: 2.20,
        filename: 'Nestle Crunch.webp'
    },
    {
        title: '100 Grand',
        price: 1.75,
        filename: '100 Grand.webp'
    },
    {
        title: '5th Avenue',
        price: 2.99,
        filename: '5th Avenue.jpg'
    },
    {
        title: 'Mars',
        price: 1.65,
        filename: 'Mars.jpg'
    },
    {
        title: "Reese's Fast Break",
        price: 1.99,
        filename: "Reese's Fast Break.jpg"
    },
    {
        title: 'Milky Way',
        price: 1.50,
        filename: 'Milky Way.png'
    },
    {
        title: 'Oreo Chocolate Candy Bar',
        price: 1.75,
        filename: 'Oreo Chocolate Candy Bar.jpg'
    },
    {
        title: "Symphony",
        price: 2.99,
        filename: "Symphony.jpg"
    },
    {
        title: "Mr. Goodbar",
        price: 1.50,
        filename: 'Mr. Goodbar.jpg'
    },
    {
        title: "Hershey's Cookies 'n' Creme",
        price: 1.50,
        filename: "Hershey's Cookies 'n' Creme.jpg"
    },
    {
        title: "3 Musketeers",
        price: 1.50,
        filename: '3 Musketeers.webp'
    },
    {
        title: "Hershey's Milk Chocolate",
        price: 1.50,
        filename: "Hershey's Milk Chocolate.jpg"
    }
]

const seedCandies = () => Candy.bulkCreate(candyData);

module.exports = seedCandies;