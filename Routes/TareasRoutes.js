
const express = require('express');
let router = express.Router();

const tareasController = require('../Controllers/TareasController');


router.get('/', tareasController.getTareas);

module.exports = router;