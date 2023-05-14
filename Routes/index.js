const express = require('express');
const router = express.Router();

//const tareasRoutes = require('./TareasRoutes');

const hotelesRoutes = require('./HotelesRoutes');

router.use('/hoteles', hotelesRoutes);

module.exports = router;