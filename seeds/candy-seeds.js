const { Candy } = require('../models');

const candyData = [{
        title: 'Take 5',
        price: 2.25,
        quantity: 100,
        filename: 'Take 5.jpg'
    }, 
    {
        title: 'Butterfinger',
        price: 1.65,
        quantity: 210,
        filename: 'Butterfinger.jpg'
    },

    {
        title: 'Payday',
        price: 2.40,
        quantity: 190,
        filename: 'Payday.jpg'
    },
    {
        title: 'Snickers',
        price: 1.99,
        quantity: 70,
        filename: 'Snickers.jpg'
    },
    {
        title: 'Toblerone',
        price: 1.50,
        quantity: 120,
        filename: 'Toblerone.jpg'
    },
    {
        title: 'Twix',
        price: 2.20,
        quantity: 460,
        filename: 'Twix.jpg'
    },
    {
        title: 'Baby Ruth',
        price: 1.75,
        quantity: 90,
        filename: 'BabyRuth.jpg'
    },
    {
        title: 'Whatchamacallit',
        price: 2.99,
        quantity: 170,
        filename: 'Whatchamacallit.jpg'
    },
    {
        title: 'Charleston Chew',
        price: 1.65,
        quantity: 260,
        filename: 'Charleston Chew.jpg'
    },
    {
        title: 'Cadbury Flake',
        price: 1.99,
        quantity: 400,
        filename: 'Cadbury Flake.webp'
    },
    {
        title: 'Kit Kat',
        price: 1.50,
        quantity: 100,
        filename: 'Kit Kat.jpeg'
    },
    {
        title: 'Almond Joy',
        price: 1.75,
        quantity: 280,
        filename: 'Almond Joy.jpg'
    },
    {
        title: "Hershey's Special Dark",
        price: 2.99,
        quantity: 300,
        filename: "Hershey's Special Dark.webp"
    },
    {
        title: "Nestle Crunch",
        price: 1.50,
        quantity: 250,
        filename: 'Nestle Crunch.webp'
    },
    {
        title: 'Butterfinger',
        price: 1.65,
        quantity: 250,
        filename: 'Butterfinger.jpg'
    },
    {
        title: 'Chunky',
        price: 2.40,
        quantity: 250,
        filename: 'Chunky Bar.jpg'
    },
    {
        title: 'Mounds',
        price: 1.99,
        quantity: 250,
        filename: 'Mounds.jpg'
    },
    {
        title: 'Bounty',
        price: 1.50,
        quantity: 250,
        filename: 'Bounty-Bar.jpg'
    },
    {
        title: 'Nestle Crunch',
        price: 2.20,
        quantity: 250,
        filename: 'Nestle Crunch.webp'
    },
    {
        title: '100 Grand',
        price: 1.75,
        quantity: 250,
        filename: '100 Grand.webp'
    },
    {
        title: '5th Avenue',
        price: 2.99,
        quantity: 250,
        filename: '5th Avenue.jpg'
    },
    {
        title: 'Mars',
        price: 1.65,
        quantity: 250,
        filename: 'Mars.jpg'
    },
    {
        title: "Reese's Fast Break",
        price: 1.99,
        quantity: 250,
        filename: "Reese's Fast Break.jpg"
    },
    {
        title: 'Milky Way',
        price: 1.50,
        quantity: 250,
        filename: 'Milky Way.png'
    },
    {
        title: 'Oreo Chocolate Candy Bar',
        price: 1.75,
        quantity: 250,
        filename: 'Oreo Chocolate Candy Bar.jpg'
    },
    {
        title: "Symphony",
        price: 2.99,
        quantity: 250,
        filename: "Symphony.jpg"
    },
    {
        title: "Mr. Goodbar",
        price: 1.50,
        quantity: 250,
        filename: 'Mr. Goodbar.jpg'
    },
    {
        title: "Hershey's Cookies 'n' Creme",
        price: 1.50,        
        quantity: 250,
        filename: "Hershey's Cookies 'n' Creme.jpg"
    },
    {
        title: "3 Musketeers",
        price: 1.50,
        quantity: 250,
        filename: '3 Musketeers.webp'
    },
    {
        title: "Hershey's Milk Chocolate",
        price: 1.50,
        quantity: 250,
        filename: "Hershey's Milk Chocolate.jpg"
    }
]

const seedCandies = () => Candy.bulkCreate(candyData);

module.exports = seedCandies;