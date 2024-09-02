const Cargo = require('../models/Cargo');

exports.createCargo = async (req, res) => {
    try {
        const cargo = await Cargo.create(req.body);
        res.status(201).json(cargo);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.getCargo = async (req, res) => {
    try {
        const cargo = await Cargo.findByPk(req.params.id);
        if (cargo) {
            res.status(200).json(cargo);
        } else {
            res.status(404).json({ error: 'Cargo not found' });
        }
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
