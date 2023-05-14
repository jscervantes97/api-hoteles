class HotelDTO{
    nombreHotel ;
    direccionHotel ;
    estadoHotel  ;
    municipioHotel ;
    habitaciones ;  
    totalPisos ; 

    constructor(){
        this.nombreHotel = "" ;
        this.direccionHotel = "";
        this.habitaciones = [];
        this.municipioHotel = "" ; 
        this.estadoHotel = "" ; 
        this.totalPisos = 0 ; 
    }
}

module.exports = HotelDTO ; 