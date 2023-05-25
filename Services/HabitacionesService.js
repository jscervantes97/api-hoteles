const Hoteles = require('../Repository/Models/Hotel');
const Habitaciones = require('../Repository/Models/Habitacion');
const HotelesConstants = require('../Constants/HotelesConstants');
const HabitacionesConstants = require('../Constants/HabitacionesConstants');
const ApplicationConstants = require('../Constants/ApplicationConstants');
const ResponseService = require('../Services/ResponseService');


const HabitacionesService = {

    createHabitacion : async(habitacionNueva) =>{
        try{
            let query = await Habitaciones.create(habitacionNueva);
            return ResponseService.generateResponse(query, HabitacionesConstants.HABITACION_CREATED , ApplicationConstants.STATUS_OK)
        }catch (error) { 
            console.log("Ocurrio un error en el metodo de create habitacion"); 
            console.log(error);
            return ResponseService.generateResponse(null, "Ocurrio un error en el metodo de create habitacion"  , ApplicationConstants.STATUS_ERROR)
        }
    },

    getAllHabitacionesByParams : async (params) =>{
        let queryFilter = {
            hotel : params.hotel
        }; 
        if(params.status != undefined){
            queryFilter.statusHabitacion = params.statusHabitacion;
        }
        console.log(queryFilter)
        try{
            let query = await Habitaciones.find(queryFilter);
            return ResponseService.generateResponse(query, HotelesConstants.HOTELES_FETCHED , ApplicationConstants.STATUS_OK);
        }catch (error) {
            console.log("Ocurrio un error en el metodo getAllHabitacionesByParams"); 
            console.log(error);
            return ResponseService.generateResponse(null, "Ocurrio un error en el metodo getAllHabitacionesByIdHotel", ApplicationConstants.STATUS_ERROR);
        }
    } ,

    makeReservation : async (params) => {
        try{
            let query = await Habitaciones.findById(params.id);
            if(Object.entries(query).length == 0){
                return ResponseService.generateResponse(null, "No se encontro una habitacion con el ID proporcionado " +  params.id , ApplicationConstants.STATUS_OK);
            }
            query.statusHabitacion = "RESERVADA" ; 
            await query.save();
            return ResponseService.generateResponse(query, "Se ah reservado la habitacion con el ID " + params.id , ApplicationConstants.STATUS_OK);
        }catch (error) {
            console.log("Ocurrio un error en el metodo reservarHabitacion"); 
            console.log(error);
            return ResponseService.generateResponse(null, "Ocurrio un error en el metodo reservarHabitacion", ApplicationConstants.STATUS_ERROR);
        }
    } 

    

}

module.exports = HabitacionesService ;
