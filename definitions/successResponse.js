'use strict'

// class successResponse {
//     _successResponse(){
//         return {
//             status : true,
//             resCode : 200,
//             isError : false,
//             message : "Data found successfully"
//         }
//     }
// }

// module.exports = successResponse;
exports.successResponse = {

    _querySuccessResponse : function(req,res,data){
        res.send({
            status : true,
            resCode : 200,
            isError : false,
            message : "Data found successfully",
            data : data 
        });
    },
    _insertionSuccessResponse : function(req,res,data){
        res.send({
            status : true,
            resCode : 200,
            isError : false,
            message : "Data saved successfully",
            data : data 
        });
    },
    
    
}