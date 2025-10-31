const express = require("express");
const app = express();
const path = require("path");

app.set("views",path.join(__dirname,"/views"));
const port = 8080;
app.set("view engine","ejs");

app.listen(port,()=>{
    console.log(`Server is listening on port ${port}`);
});

app.get("/",(req,res)=>{
    res.render("home.ejs");
});


//********************************Setting Instagram Ejs file ********************
 app.use(express.static(path.join(__dirname,"/public/assets")));
 app.use(express.static(path.join(__dirname,"/public/scripts")));

app.get("/ig/:username",(req,res)=>{
    const instaData = require("./data.json");
    const {username} = req.params;
    const data = instaData[username];
    if(data){
        res.render("ig.ejs",{data});
    } else{
        res.render("error.ejs");
    }
    
})