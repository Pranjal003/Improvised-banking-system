const express = require("express");
const mongoose = require("mongoose");
const app = express();

mongoose.connect("mongodb://localhost:27017/newdb01" ,

{
 
    useNewUrlParser:true,
    useUnifiedTopology:true, 
    useCreateIndex:true, 
    strictQuery: true 

}

).then(() => { 
        console.warn("Connected to the database");
}).catch((e)=>{
        console.log("No connection"); 
})

const studentSchema = new mongoose.Schema({
    username:{
          type:String,
          required:true
    },
    pass:{
          type:String,
          required:true
    },
    contact:{
          type:Number,
          required:true
    },
    
});

const User = mongoose.model('User', studentSchema);

const user1 = new User({ username: 'pranjalsharma01@gmail.com', pass: '12345@Ps', contact:'+91-9829979994'});
user1.save();
