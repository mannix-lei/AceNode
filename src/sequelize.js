const Sequlice = require('sequelize');

const sequelize = new Sequlice('mannix', 'mannixlei', 'mannix235163', {
    host: '101.200.195.220',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
});

module.exports = sequelize;
