const seedCandies = require('./candy-seeds.js');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');

    await seedCandies();
    console.log('\n----- CANDIES SEEDED -----\n');

    process.exit(0);
};

seedAll();