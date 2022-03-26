// import models
const Candy = require('./Candy');
const User = require('./Users');

// Candies belongsTo User
Candy.belongsTo(User, {
    foreignKey: 'user_id'
});

// Users have many Candies
User.hasMany(Candy, {
    foreignKey: 'user_id'
})

module.exports = { Candy, User };