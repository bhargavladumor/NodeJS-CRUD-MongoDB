const express = require("express");
const port = 8080;
const path = require("path");
const app = express();

const db = require("./config/database");
const Student = require("./models/Student");

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded());

app.get("/",(req,res)=>{
    res.render("home");
})

//Create record
app.post("/addData",async (req,res)=>{
    await Student.create(req.body);
    res.redirect("/");
})

//Read record
app.get("/viewData",async (req,res)=>{
    var data = await Student.find({});
    res.render("viewData",{
        stData : data
    })
})

//Update record
app.get("/updateData/:id",async (req,res)=>{
    var data = await Student.findById(req.params.id);
    res.render("updateData",{
        stData : data
    });
})
app.post("/editData",async (req,res)=>{
    await Student.findByIdAndUpdate(req.body.oldId,req.body)
    res.redirect("/viewdata");
})

//Delete record
app.get("/deleteData/:id",async (req,res)=>{
    await Student.findByIdAndDelete(req.params.id);
    res.redirect("/viewData");
})

app.listen(port,(err)=>{
    if(err){
        console.log("Something wrong");
    }
    console.log(`App is listening on port ${port}`);
})