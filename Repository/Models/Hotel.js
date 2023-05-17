const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hotelSchema = new Schema({
  nombreHotel: {
    type: String,
    required: true,
    trim: true,
    maxlength: 100,
    minlength: 2,
  },
  direccionHotel: String,
  estadoHotel : String,
  municipioHotel : String,
  totalHabitaciones : Number,  
  totalPisos : Number,  
  fechaCreacion: {
    type: Date,
    default: Date.now
  },
  statusHotel : {
    type:  String,
    default : "ACTIVO"
  }
});


module.exports = mongoose.model('Hotel', hotelSchema);