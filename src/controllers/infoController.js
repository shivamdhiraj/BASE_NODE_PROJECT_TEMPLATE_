const { StatusCodes } = require('http-status-codes');

//res.status() -> returns the same response object.
//res.json()   -> return the same response object
const info = (req,res ) =>{
    return res.status(StatusCodes.OK).json({
        success : true,
        msg:'API is running',
        error:{},
        data:{}
    });
}


module.exports = {
    info
}

// an object is being exported with property info