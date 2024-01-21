const mongoose = require("mongoose");
var studentScheme = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    age : {
        type : String,
        required : true
    },
    gender : {
        type : String,
        required : true
    },
    hobby : {
        type : Array,
        required : true
    },
    city : {
        type : String,
        required : true
    },
    message : {
        type : String,
        required : true
    }
});
var Student = mongoose.model("Student",studentScheme);
module.exports = Student;