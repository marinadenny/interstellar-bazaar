const express = require('express');
const tradeRoutes = require('./routes/tradeRoutes');
const cargoRoutes = require('./routes/cargoRoutes');
const inventoryRoutes = require('./routes/inventoryRoutes');
const sequelize = require('./config/config');

const app = express();

app.use(express.json());
app.use('/api', tradeRoutes);
app.use('/api', cargoRoutes);
app.use('/api', inventoryRoutes);

sequelize.sync()
    .then(() => console.log('Database connected'))
    .catch(err => console.error('Failed to connect to the database:', err));

module.exports = app;
