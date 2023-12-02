const express = require('express');

const TanahController = require('../controller/tanah.js');

const router = express.Router();

//READ GET
router.get('/', TanahController.getAllTanah);

router.get('/:id_tanaman', TanahController.getTanamanById)

//router.get('/', TanahController.getKecocokanTanah);

//router.get('/:id_tanah', TanahController.get

//CREATE POST
router.post('/', TanahController.createNewTanah);


module.exports = router;