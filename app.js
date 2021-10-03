const { urlencoded } = require("express");
const express = require("express");

const app = express();
var items= ["Buy","Cook","Eat"];

app.set("view engine","ejs");
app.use(urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/",function(req,res){
    var today = new Date;
    var options ={  weekday: 'long', month: 'long', day: 'numeric' };
    var day=today.toLocaleString("en-US",options);
    res.render("list",{nameday: day,newlistitem : items});
    
});

app.post("/",function(req,res){
    var item = req.body.newitem;
    items.push(item);
    console.log(item);
    res.redirect("/");
});

app.listen((process.env.PORT||3000),function(){
    console.log("server started on port 3000");
});
