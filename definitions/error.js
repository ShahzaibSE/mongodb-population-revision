'use strict'

// class ErrorResponse {
//     _errorResponse(){
//         return {
//             status : false,
//             resCode : 500,
//             isError : true,
//             message : "Internal server error occured while processing request"
//         }
//     }
// }

// module.exports = ErrorResponse;

exports.errorResponse = {
    _queryErrorResponse : function(req,res) {
        res.send({
            status : false,
            resCode : 500,
            isError : true,
            message : "Internal server error while finding data" 
        });
    },
    _insertionErrorResponse : function(req,res) {
        res.send({
            status : false,
            resCode : 500,
            isErrror : true,
            message : "Internal error while saving data"  
        });
    }
}