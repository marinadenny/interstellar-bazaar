const Trade = require('../models/Trade');

exports.createTrade = async (req, res) => {
    try {
        const trade = await Trade.create(req.body);
        res.status(201).json(trade);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.getTrade = async (req, res) => {
    try {
        const trade = await Trade.findByPk(req.params.id);
        if (trade) {
            res.status(200).json(trade);
        } else {
            res.status(404).json({ error: 'Trade not found' });
        }
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
