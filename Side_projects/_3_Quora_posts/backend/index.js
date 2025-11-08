const express = require("express");
const  app = express();
const port = 3000;
const path = require("path");
const { v4: uuidv4 } = require('uuid');
const methodOverride = require('method-override')


app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views")); //For ejs files
app.use(express.static(path.join(__dirname,"/public/styles"))); //For cssstylesheets
app.use(express.urlencoded({extended:true})); //For urlencoded post req
app.use(express.json()); //For json post req
app.use(methodOverride('_method'));

app.listen(port,()=>{
    console.log(`Listening to port ${port}`);
})

//Posts data -- usually it'll come from database
let posts=[
    {
        id:uuidv4(),
        username:"apnacollege",
        content:"New AI/ML Batch launched -- Prime ! Join Now !"
    },
    {
        id:uuidv4(),
        username:"sagnickDey",
        content:"Just done building my first Agentic AI for education in rural areas"
    },
    {
        id:uuidv4(),
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
    let id = uuidv4();
    posts.push({id,username,content});
    console.log(req.body);
    res.redirect("/posts");
})

//See a specific route
app.get("/posts/:id",(req,res)=>{
    let {id} = req.params;
    let post = posts.find((p)=> p.id === id);
    res.render("view.ejs",{post});
})

//Update route part 1 -- Get the editing page 
app.get("/posts/:id/edit",(req,res)=>{
    let {id} = req.params;
    let post = posts.find((p)=> p.id === id);
    res.render("update.ejs",{post});
})

//Update route part 2 -- Send patch request from form to the 'posts/:id' route
app.patch("/posts/:id",(req,res)=>{
    let newContent = req.body.content;
    let {id} = req.params;
    let post = posts.find((p)=> p.id === id);
    post.content = newContent;
    console.log(post);
    res.redirect("/posts");
})

//Destroy Route
app.delete("/posts/:id",(req,res)=>{
    let {id} = req.params;
    let post = posts.find((p)=> p.id === id);
    posts = posts.filter((p)=> p.id !== id);
    res.redirect("/posts");
}) 