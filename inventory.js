const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

const Inventory = sequelize.define('Inventory', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    stationId: {
        type: DataTypes.STRING,
        allowNull: false
    },
    item: {
        type: DataTypes.STRING,
        allowNull: false
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

module.exports = Inventory;
