const Inventory = require('../models/Inventory');

exports.getInventory = async (req, res) => {
    try {
        const inventory = await Inventory.findAll({ where: { stationId: req.params.stationId } });
        res.status(200).json(inventory);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
