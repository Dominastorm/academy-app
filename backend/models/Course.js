const mongoose=require('mongoose');

const courseSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    courseId:{
        type:String,
        required:true
    },
    units:{
        type:Array,
        required:true
    }
    
},{versionKey:false})
module.exports=mongoose.model('Course',courseSchema);