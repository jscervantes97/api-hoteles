
const HotelService = require('../Services/HotelService');


const getHoteles = async (req,res)=>{
    let idHotel = req.query.id ; 
    let response = {}; 
    if(idHotel != undefined){
        response = await HotelService.findOneHotel(idHotel);
    }else{
        response = await HotelService.findAllHoteles();
    }
    
    res.status(response.statusCode).json(response);
}

const createHotel = async (req,res)=>{
    let hotelNuevo = {
        nombreHotel : req.body.nombreHotel,
        direccionHotel : req.body.direccionHotel,
        estadoHotel  : req.body.estadoHotel,
        municipioHotel : req.body.municipioHotel,
        totalPisos : req.body.totalPisos,
        totalHabitaciones : req.body.totalHabitaciones
    } ;
    let response = await HotelService.createHotel(hotelNuevo);
    res.status(response.statusCode).json(response);
}

const updateHotel = async (req,res)=>{
    let hotelNuevo = {
        nombreHotel : req.body.nombreHotel,
        direccionHotel : req.body.direccionHotel,
        estadoHotel  : req.body.estadoHotel,
        municipioHotel : req.body.municipioHotel,
        totalPisos : req.body.totalPisos,
        totalHabitaciones : req.body.totalHabitaciones,
        statusHotel : req.body.statusHotel
    } ;
    let response = await HotelService.updateHotel(hotelNuevo);
    res.status(response.statusCode).json(response);
}

const removeHotel = (req,res)=>{
    res.status(200).json();
}



module.exports = {
    getHoteles,updateHotel, createHotel, removeHotel, updateHotel
} 