const express = require('express');
const { createTrade, getTrade } = require('../controllers/tradeController');

const router = express.Router();

router.post('/trades', createTrade);
router.get('/trades/:id', getTrade);

module.exports = router;
