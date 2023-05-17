class ResponseDTO{

    statusCode ; 

    msg ; 

    data ; 

    constructor(data, msg, statusCode){
        this.data = data; 
        this.msg = msg;  
        this.statusCode = statusCode ; 
    }

}

module.exports = ResponseDTO; 