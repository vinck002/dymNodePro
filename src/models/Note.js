const mongoose =require('mongoose');
const{Schema} = mongoose
const NotesSchema = new Schema({
Tittle: {type: String,required : true},
Subject:{type:String,required:true},
Description : {type: String,required:true},
Date : {type: Date, required:false},
Check: {type:String,required:false}
});

module.exports = mongoose.model('notes', NotesSchema)