const express = require('express');
let router = express.Router();

const hotelesController = require('../Controllers/HotelesController');


router.get('/', hotelesController.getHoteles);

router.post('/', hotelesController.createHotel);

router.put('/', hotelesController.updateHotel);


module.exports = router;