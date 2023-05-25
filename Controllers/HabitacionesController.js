const HabitacionesService = require('../Services/HabitacionesService');

const HabitacionesController = {
   
    addHabitacion : async (req , res) => {
        let { hotelId  , nombreHabitacion, numeroHabitacion, pisoHabitacion, tipoHabitacion }  = req.body ;
        let nuevaHabitacion = {
            hotel : hotelId,
            nombreHabitacion : nombreHabitacion , 
            numeroHabitacion : numeroHabitacion,
            pisoHabitacion  : pisoHabitacion , 
            tipoHabitacion : tipoHabitacion 
        } ;  
        let response = await HabitacionesService.createHabitacion(nuevaHabitacion); 
        res.status(response.statusCode).json(response); 
    },

    getHabitaciones : async (req , res) => {
        let {idHotel, statusHabitacion} = req.query ;
        let params = {
            hotel : idHotel,
            statusHabitacion  : statusHabitacion
        };
        let response = await HabitacionesService.getAllHabitacionesByParams(params); 
        res.status(response.statusCode).json(response); 
    },

    makeReservation : async(req,res) => {
        let response = await HabitacionesService.makeReservation({ id : req.query.idHabitacion });
        res.status(response.statusCode).json(response);
    }

    
}

module.exports = HabitacionesController  ; 