const Hoteles = require('../Repository/Models/Hotel');
let ResponseDTO = require('../Repository/Models/DTO/ResponseDTO');
const HotelesConstants = require('../Constants/HotelesConstants');
const ApplicationConstants = require('../Constants/ApplicationConstants');

class HotelService{

    async findAllHoteles(){
        let respuesta = new ResponseDTO();
        try{
            
            let query = await Hoteles.find();
            respuesta.data = query ; 
            respuesta.msg = HotelesConstants.HOTELES_FETCHED; 
            respuesta.statusCode = ApplicationConstants.STATUS_OK  ; 

        }catch (error) {
            respuesta.data = null ; 
            respuesta.msg = HotelesConstants.OCURRIO_ERROR + HotelesConstants.METODO_FIND_ALL_HOTELES ; 
            respuesta.statusCode = ApplicationConstants.STATUS_ERROR ;  
            console.log(HotelesConstants.OCURRIO_ERROR + HotelesConstants.METODO_FIND_ALL_HOTELES); 
            console.log(error);
        }
        return respuesta ; 
    }

    async findOneHotel(id){
        let respuesta = new ResponseDTO();
        try{
            
            let query = await Hoteles.findById(id);
            respuesta.data = query ; 
            respuesta.msg = HotelesConstants.HOTELES_FETCHED; 
            respuesta.statusCode = ApplicationConstants.STATUS_OK  ; 

        }catch (error) {
            respuesta.data = null ; 
            respuesta.msg = HotelesConstants.OCURRIO_ERROR + HotelesConstants.METODO_FIND_ALL_HOTELES ; 
            respuesta.statusCode = ApplicationConstants.STATUS_ERROR ;  
            console.log(HotelesConstants.OCURRIO_ERROR + HotelesConstants.METODO_FIND_ALL_HOTELES); 
            console.log(error);
        }
        return respuesta ; 
    }

    async createHotel(hotelNuevo){
        let respuesta = new ResponseDTO();
        try{
            
            let query = await Hoteles.create(hotelNuevo);
            respuesta.data = query ; 
            respuesta.msg = HotelesConstants.HOTEL_CREATED; 
            respuesta.statusCode = ApplicationConstants.STATUS_OK  ; 

        }catch (error) {
            respuesta.data = null ; 
            respuesta.msg = HotelesConstants.OCURRIO_ERROR + HotelesConstants.METODO_FIND_ALL_HOTELES ; 
            respuesta.statusCode = ApplicationConstants.STATUS_ERROR ;  
            console.log(HotelesConstants.OCURRIO_ERROR + HotelesConstants.METODO_FIND_ALL_HOTELES); 
            console.log(error);
        }
        return respuesta ; 
    }


}

module.exports = HotelService; 