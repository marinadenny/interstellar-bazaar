const Cargo = require('../models/Cargo');

exports.processEvent = async (event) => {
    try {
        const cargo = await Cargo.findByPk(event.cargoId);
        if (cargo) {
            cargo.status = event.newStatus;
            await cargo.save();
        }
    } catch (err) {
        console.error('Failed to process event:', err.message);
    }
};
