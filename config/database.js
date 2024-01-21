const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1/Students");
var db = mongoose.connection;
db.once('open',(err)=>{
    if(err){
        console.log("Something wrong");
    }
    console.log("MongoDB connected!");
})
module.exports = db;