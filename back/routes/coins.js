
const express = require('express');
const router = express.Router();
const coins = require('./../controllers/coins');

router.get('/', coins.getAll); // ✅ Pass function reference (not calling it)

module.exports = router;