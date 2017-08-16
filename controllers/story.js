'use strict'

const mongoose = require('mongoose');
const id = mongoose.Types.ObjectId();
// const exec = require('child_process').execFile;

const dbInjector = require('./dbInjector.js').modelInjector;
const story = dbInjector.story;
const person = dbInjector.person;

//Definitions
const errorResponse = new require('./../definitions/error.js').errorResponse;
const successResponse = new require('./../definitions/successResponse.js').successResponse;

//Save Document
const saveDocument = require('./saveDocument.js').saveDocument;

// exports.add = function(req,res) {
//     var body = req.body;
    
//     var query =  {
//         title : body.title.toLowerCase()
//     };
//     console.log("Query object");
//     console.log(query);
//     debugger;

//     story.findOne(query).exec(function(err,data) {
//         if(err) {
//             console.log(err);
//             errorResponse._queryErrorResponse(req,res);
//             return;
//             // res.send(errorResponse._errorResponse());
//         } else if(data) {
//             console.log("Data");
//             console.log(data);
//             successResponse._querySuccessResponse(req,res,data);
//             return;
//             // res.send(successResponse._successResponse());
//         } else {
//             var input =  {
//                 title : body.title,
//                 // age : parseInt(body.age)
//             };
//             saveDocument(input,story,req,res);
//         } 
//     });
// }

exports.add = function(req,res) {
    /*
     params : {
         name : String //person's name
         title : String //story's title
     }
    */
    var body = req.body;   //Person name

    person.findOne({ name : body.name }).exec(function(err,data){
        if(err) {
            console.log("Error");
            console.log(err);
            errorResponse._queryErrorResponse(req,res);
        } else if(data) {
            console.log("Data");
            console.log(data);
            // successResponse._querySuccessResponse(req,res,data);
            
            // Adding a story
            let input = {
                _id : id,
                title : body.title,
                _creator : data._id
            };
            var newStory = new story(input);
            newStory.save(function(err,data) {
                if(err) {
                    console.log("Error");
                    console.log(err);
                    errorResponse._insertionErrorResponse(req,res);
                } else if(data) {
                    console.log("Data");
                    console.log(data);
                    successResponse._insertionSuccessResponse(req,res,data);
                }
            });
        }
    })
}

exports.update = function(req,res) {

}

exports.delete =function(req,res) {
 
}

exports.selectall = function(req,res) {
    
}

exports.search = function(req,res) {
    var params = req.params;  //  ------ Request ---------//
    var body = req.body;     // -------- Params ---------//
    var queryString = req.query;  // Query

    //Searching for a story
    let query = {
        // title : queryString.title.toLowerCase()    
        title : queryString.title    
    }

    console.log("Query");
    console.log(query);
    // debugger;
    
    story.findOne(query)
         .populate('_creator')
         .exec(function(err,data){
             if(err) {
                 console.log("Error");
                 console.log(err);
                 errorResponse._queryErrorResponse(req,res);
             } else if(data) {
                 console.log("Data");
                 console.log(data);
                 successResponse._querySuccessResponse(req,res,data);
             }
         })
}