const express = require('express');

const TanahController = require('../controller/tanah.js');

const router = express.Router();

//READ GET
router.get('/', TanahController.getAllTanah);

//CREATE POST
router.post('/', TanahController.createNewTanah);


module.exports = router;