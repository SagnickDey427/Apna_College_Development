const express = require("express");
const  app = express();
const port = 3000;
const path = require("path");

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views")); //For ejs files
app.use(express.static(path.join(__dirname,"/public/styles"))); //For cssstylesheets
app.use(express.urlencoded({extended:true})); //For urlencoded post req
app.use(express.json()); //For json post req

app.listen(port,()=>{
    console.log(`Listening to port ${port}`);
})

//Posts data -- usually it'll come from database
let posts=[
    {
        username:"apnacollege",
        content:"New AI/ML Batch launched -- Prime ! Join Now !"
    },
    {
        username:"sagnickDey",
        content:"Just done building my first Agentic AI for education in rural areas"
    },
    {
        username:"sahilPatil",
        content:"Reached Pupil rank in CodeForces :)"
    },
];

//Index route

app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts});
});

//Create a route to reach to the form template : get req at /posts/new
app.get("/posts/new",(req,res)=>{
    res.render("create.ejs");
})

//Create route
app.post("/posts",(req,res)=>{
    let {username, content} = req.body;
    posts.push({username,content});
    console.log(req.body);
    res.send("Post req working!");
})