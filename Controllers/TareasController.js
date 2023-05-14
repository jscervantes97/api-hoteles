
let GenericRepository = require('../Repository/GenericRepository');

const getTareas = async (req,res)=>{
    let repository = new GenericRepository('Tareas');
    await repository.find();
    res.status(200).json({
        title : "has creado un api node bien de momento sss"
    });
}

const getTarea = (req,res)=>{
    
    res.status(200).json({
        title : "has creado un api node bien de momento"
    });
}

const createTareas = (req,res)=>{
    res.status(200).json();
}

const updateTareas = (req,res)=>{
    res.status(200).json();
}

const removeTareas = (req,res)=>{
    res.status(200).json();
}



module.exports = {
    getTareas,getTarea,updateTareas, createTareas, removeTareas
} 