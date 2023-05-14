const GenericRepository = require("./GenericRepository");
const DBConstants = require("./../Constants/DBConstants");

class HotelRepository extends GenericRepository{

    constructor(){
        super(DBConstants.COLECCION_HOTELES);
    }

    async findHotel() {
        
    } 

}

module.exports = HotelRepository; 