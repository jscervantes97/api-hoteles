const ResponseDTO = require('../Repository/Models/DTO/ResponseDTO');

const ResponseService = {

    generateResponse : async (data,msg,statusCode) => {
        return new ResponseDTO(data, msg, statusCode);
    } 
    
}

module.exports = ResponseService ; 