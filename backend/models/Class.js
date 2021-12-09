const mongoose = require('mongoose');

const classSchema=mongoose.Schema({
    subjects:{
        type:Array,
        required:true
    },
    students:{
        type:Array,
        required:true,
    },
    branch:{
        type:String,
        required:true,
    },
    classId:{
        type:String,
        required:true,
    }
},{versionKey:false});

module.exports=mongoose.model('Class',classSchema);