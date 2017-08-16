'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const id = mongoose.Types.ObjectId();
// const exec = require('child_process').execFile;

//Model
const dbInjector = require('./dbInjector.js').modelInjector;
const person = dbInjector.person;

//Definitions
const errorResponse = new require('./../definitions/error.js').errorResponse;
const successResponse = new require('./../definitions/successResponse.js').successResponse;

//Save Document
const saveDocument = require('./saveDocument.js').saveDocument;

exports.add = function(req,res) {
    var body = req.body;
    
    var query =  {
        name : body.name.toLowerCase()
    };
    console.log("Query object");
    console.log(query);
    debugger;

    person.findOne(query).exec(function(err,data) {
        if(err) {
            console.log(err);
            errorResponse._queryErrorResponse(req,res);
            // res.send(errorResponse._errorResponse());
        } else if(data) {
            console.log("Data");
            console.log(data);
            successResponse._querySuccessResponse(req,res,data);
            // res.send(successResponse._successResponse());
        } else {
            var input =  {
                // _id : { type : Number },
                // _id : Math.random(),
                _id : id,
                name : body.name,
                age : parseInt(body.age)
            };
            // saveDocument(input,person,req,res);
            var newDocument = new person(input);
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
    });
}

exports.update = function(req,res) {

}

exports.delete =function(req,res) {

}

exports.selectall = function(req,res) {

}