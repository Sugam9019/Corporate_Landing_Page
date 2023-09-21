const mongoose=require("mongoose");

const Login_schema=new mongoose.Schema({

    Full_Name:{
        type:String,
        required:true,
        default:null
    },

    User_Name:{
        type:String,
        required:true,
        default:null
    },

    Email:{
        type:String,
        required:true,
        default:null

    },

    Password:{
        type:String,
        required:true,
        default:null

    },

    Number:{
        type:Number,
        required:true,
        default:null

    },
    

});


const Model=mongoose.model("Login_details",Login_schema);
module.exports={Model};