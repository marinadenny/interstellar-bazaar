const express = require('express');
const { createCargo, getCargo } = require('../controllers/cargoController');

const router = express.Router();

router.post('/cargo', createCargo);
router.get('/cargo/:id', getCargo);

module.exports = router;
