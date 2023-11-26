const express = require('express');

const TanahController = require('../controller/tanah.js');

const router = express.Router();

router.get('/', TanahController.getAllTanah);

router.post('/', TanahController.createNewTanah);

module.exports = router;