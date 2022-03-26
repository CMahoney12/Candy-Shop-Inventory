// import important parts of sequelize library
const { Model, Datatypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Candy model (table) by extending off Sequelize's Model class
class Candy extends Model {}

// set up fields and rules for Candy model
Candy.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            validate: {
                isDecimal: true
            }
        },
        filename: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'candy'
    }
);

module.exports = Candy;


