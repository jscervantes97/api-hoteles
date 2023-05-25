const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const habitacionSchema = new Schema({
  hotel: {
    type: mongoose.Schema.ObjectId,
    ref: 'Hotel'
    },
  nombreHabitacion: {
    type: String,
    required: true,
    trim: true,
    maxlength: 100,
    minlength: 2,
  },
  numeroHabitacion: Number,
  pisoHabitacion : Number, 
  tipoHabitacion : {
    type:  String,
    default : "NORMAL"
  },
  fechaCreacion: {
    type: Date,
    default: Date.now
  },
  statusHabitacion : {
    type:  String,
    default : "DISPONIBLE"
  },
  
});


module.exports = mongoose.model('Habitaciones', habitacionSchema);