const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

const Cargo = sequelize.define('Cargo', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    tradeId: {
        type: DataTypes.UUID,
        allowNull: false
    },
    currentLocation: {
        type: DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING,
        defaultValue: 'In Transit'
    }
});

module.exports = Cargo;
