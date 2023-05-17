const Hoteles = require('../Repository/Models/Hotel');
let ResponseDTO = require('../Repository/Models/DTO/ResponseDTO');
const HotelesConstants = require('../Constants/HotelesConstants');
const ApplicationConstants = require('../Constants/ApplicationConstants');
const ResponseService = require('../Services/ResponseService');


const findAllHoteles = async() =>{
    
    try{
        let query = await Hoteles.find();
        return ResponseService.generateResponse(query,HotelesConstants.HOTELES_FETCHED,ApplicationConstants.STATUS_OK);

    }catch (error) {
        
        console.log(HotelesConstants.OCURRIO_ERROR + HotelesConstants.METODO_FIND_ALL_HOTELES); 
        console.log(error);
        return ResponseService.generateResponse(null,HotelesConstants.OCURRIO_ERROR + HotelesConstants.METODO_FIND_ALL_HOTELES, ApplicationConstants.STATUS_ERROR);
    }
    
}

const findOneHotel = async(id) =>{
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

const createHotel = async (hotelNuevo)=> {
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

const updateHotel = async (hotel)=> {
    let respuesta = new ResponseDTO();
    try{
        
        let query = await Hoteles.findOneAndUpdate({_id : hotel._id},hotel)
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



module.exports = {
    findAllHoteles,findOneHotel,createHotel,updateHotel
}; 