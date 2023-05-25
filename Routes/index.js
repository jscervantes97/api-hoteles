const express = require('express');
const router = express.Router();

const hotelesRoutes = require('./HotelesRoutes');
const habitacionesRoutes = require('./HabitacionesRoutes');

router.use('/hoteles', hotelesRoutes);
router.use('/habitaciones', habitacionesRoutes);

module.exports = router;