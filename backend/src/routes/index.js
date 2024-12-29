const express = require('express');
const router = express.Router();
const { getPortfolio, createPortfolio, updatePortfolio } = require('../controllers');

router.get('/portfolio', getPortfolio);
router.post('/portfolio', createPortfolio);
router.put('/portfolio/:id', updatePortfolio);

module.exports = router;