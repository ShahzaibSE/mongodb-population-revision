'use strict'

const mongoose = require('mongoose');

//Definitions 
const errorResponse = new require('./../definitions/error.js').errorResponse;
const successResponse = new require('./../definitions/successResponse.js').successResponse;

exports.saveDocument = function(input, model,req,res) {
    console.log("Input");
    console.log(input);
    var newDocument = new model(input);
    console.log("New Document");
    console.log(newDocument);

    newDocument.save(function(err,data) {
        if(err) {
            console.log("Error while saving document");
            console.log(err);
            errorResponse._insertionErrorResponse(req,res);
        }else if(data) {
            console.log("Inserted document");
            console.log(data);
            successResponse._insertionSuccessResponse(req,res);
        }
    });
}