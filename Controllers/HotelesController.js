
let GenericRepository = require('../Repository/GenericRepository');
const HotelesConstants = require('../Constants/HotelesConstants');
const Hoteles = require('../Repository/Models/Hotel');
const HotelService = require('../Services/HotelService');
let hotelService = new HotelService();


const getHoteles = async (req,res)=>{
    let idHotel = req.query.id ; 
    let response = {}; 
    if(idHotel != undefined){
        response = await hotelService.findOneHotel(idHotel);
    }else{
        response = await hotelService.findAllHoteles();
    }
    
    res.status(response.statusCode).json(response);
}

const createHotel = async (req,res)=>{
    let hotelNuevo = {
        nombreHotel : req.body.nombreHotel,
        direccionHotel : req.body.direccionHotel,
        estadoHotel  : req.body.estadoHotel,
        municipioHotel : req.body.municipioHotel,
        totalPizos : req.body.totalPizos,
        totalHabitaciones : req.body.totalHabitaciones
    } ;
    let response = await hotelService.createHotel(hotelNuevo);
    res.status(response.statusCode).json(response);
}

const updateHotel = (req,res)=>{
    res.status(200).json();
}

const removeHotel = (req,res)=>{
    res.status(200).json();
}



module.exports = {
    getHoteles,updateHotel, createHotel, removeHotel
} 