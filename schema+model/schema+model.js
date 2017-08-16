const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const id = mongoose.Types.ObjectId();

exports.dataModels = {  
    person : function(){

        var personSchema = Schema({
            _id     : Schema.ObjectId,
            // _id     : Number,
            name    : String,
            age     : Number,
            stories : [{ type: Schema.Types.ObjectId, ref: 'story' }]
        });

        return mongoose.model('person',personSchema,'person');
    },      

    story : function(){

        var storySchema = Schema({
            _id : Schema.ObjectId,
            _creator : { type: Schema.ObjectId, ref: 'person' },
            title    : String,
            fans     : [{ type: Schema.ObjectId, ref: 'person' }]
        });

        return mongoose.model('story',storySchema,'story');

    }
}