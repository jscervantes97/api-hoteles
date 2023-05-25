const express = require('express');
let router = express.Router();

const habitacionesController = require('../Controllers/HabitacionesController');


//router.get('/', hotelesController.getHoteles);

router.post('/', habitacionesController.addHabitacion);

router.get('/' , habitacionesController.getHabitaciones);

router.post('/make-reservation' , habitacionesController.makeReservation);






module.exports = router;