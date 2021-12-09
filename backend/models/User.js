const mongoose=require('mongoose');

const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true,
    },
    srn:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
    },
    sem:{
        type:Number,
        required:true,
        min:1,
        max:11
    },
    section:{
        type:String,
        required:true
    },
    mobile:{
        type:String,
        required:true
    }, 
    password:{
        type:String,
        required:true,
    },
    branch:{
        type:String,
        required:true
    },
    program:{
        type:String,
        required:true
    },
    classId:{
        type:String,
        required:true,
    }
    
    
    
},{versionKey:false});
module.exports =mongoose.model('User',userSchema);
