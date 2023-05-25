const Hoteles = require('../Repository/Models/Hotel');
const Habitaciones = require('../Repository/Models/Habitacion');
const HotelesConstants = require('../Constants/HotelesConstants');
const ApplicationConstants = require('../Constants/ApplicationConstants');
const ResponseService = require('../Services/ResponseService');

const HotelServices = {

    findAllHoteles : async() =>{
        try{
            let query = await Hoteles.find();
            return ResponseService.generateResponse(query,HotelesConstants.HOTELES_FETCHED,ApplicationConstants.STATUS_OK);
    
        }catch (error) {
      
            console.log(HotelesConstants.OCURRIO_ERROR + HotelesConstants.METODO_FIND_ALL_HOTELES); 
            console.log(error);
            return ResponseService.generateResponse(null,HotelesConstants.OCURRIO_ERROR + HotelesConstants.METODO_FIND_ALL_HOTELES, ApplicationConstants.STATUS_ERROR);
        }
    },
    
    findOneHotel : async(id) =>{
        try{
            
            let query = await Hoteles.findById(id);
            console.log(query);
            let resultado = {
                statusHotel: query.statusHotel,
                _id: query._id,
                nombreHotel: query.nombreHotel,
                direccionHotel: query.direccionHotel,        
                estadoHotel: query.estadoHotel,
                municipioHotel: query.municipioHotel,
                totalHabitaciones: query.totalHabitaciones,
                totalPisos: query.totalPisos,
                fechaCreacion: query.fechaCreacion,      
                __v: query.__v,
            };
            let habitaciones = await Habitaciones.find({ hotel  : id});
            
            resultado.habitaciones =  habitaciones ;
            return ResponseService.generateResponse(resultado, HotelesConstants.HOTELES_FETCHED , ApplicationConstants.STATUS_OK);
        }catch (error) {
            console.log(HotelesConstants.OCURRIO_ERROR + HotelesConstants.METODO_FIND_ALL_HOTELES); 
            console.log(error);
            return ResponseService.generateResponse(null, HotelesConstants.OCURRIO_ERROR + HotelesConstants.METODO_FIND_ALL_HOTELES , ApplicationConstants.STATUS_ERROR);
        }
    },
    
    createHotel : async (hotelNuevo)=> {
        try{
            let query = await Hoteles.create(hotelNuevo);
            return ResponseService.generateResponse(query, HotelesConstants.HOTEL_CREATED , ApplicationConstants.STATUS_OK)
        }catch (error) { 
            console.log(HotelesConstants.OCURRIO_ERROR + HotelesConstants.METODO_FIND_ALL_HOTELES); 
            console.log(error);
            return ResponseService.generateResponse(null, HotelesConstants.OCURRIO_ERROR + HotelesConstants.METODO_FIND_ALL_HOTELES  , ApplicationConstants.STATUS_ERROR)
        }
    },
    
    updateHotel : async (hotel)=> {
        try{
            let query = await Hoteles.findOneAndUpdate({_id : hotel._id},hotel) 
            return ResponseService.generateResponse(query, HotelesConstants.HOTEL_CREATED , ApplicationConstants.STATUS_OK)
        }catch (error) {
            console.log(HotelesConstants.OCURRIO_ERROR + HotelesConstants.METODO_FIND_ALL_HOTELES); 
            console.log(error);
            return ResponseService.generateResponse(null, HotelesConstants.HOTEL_CREATED , ApplicationConstants.STATUS_ERROR)
        }
        
    }
};




module.exports = HotelServices;