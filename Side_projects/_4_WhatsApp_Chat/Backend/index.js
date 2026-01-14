const express = require('express');
const mongoose = require('mongoose');
const path = require("path");
const { v4: uuidv4 } = require('uuid');
const methodOverride = require('method-override')
const Chat = require("./models/chat.js");





const app = express();
const port = 8080;
app.listen(port,()=>{
  console.log(`App is listening to port ${port}`);
})





app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views")); //For ejs files
app.use(express.static(path.join(__dirname,"/public/styles"))); //For cssstylesheets
app.use(express.urlencoded({extended:true})); //For urlencoded post req
app.use(express.json()); //For json post req
app.use(methodOverride('_method'));





main()
.then((res)=>{
    console.log("Connection to mongoDb was successful.");
})
.catch(err => console.log(err));


async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp'); // mongodb://localhost:port/<db_name>(default 'test')
}









app.get("/",(req,res)=>{
  res.send("Welcome to home page !");
})

//🗺️ Index Route
app.get("/chats",async (req,res)=>{
    try{

        const chats = await Chat.find();
        res.render("index.ejs",{chats});
    } catch(err){
        next(err);
    }
})
//asyncWrap function 
function asyncWrap(fn){
    return function(req,res,next){
        fn(req,res,next).catch((err)=>next(err));
    }
}

//🗺️ Create route
app.get("/chats/new",(req,res)=>{
    res.render("newChat.ejs");
})
app.post("/chats",(req,res)=>{
    const {from , message, to} = req.body;
    const chatUser = new Chat({from:from, message:message, to : to, created_at:new Date()});
    chatUser.save().then(res =>{
        console.log("Chat saved to Db successfully!")
    }).catch(err=>{
        console.log("Some error occured.")
    })
    res.redirect("/chats");
})

//🗺️ Edit route
app.get("/chats/:id/edit",async (req,res)=>{
    try{
        const {id} = req.params;
        const chat = await Chat.findById(id);
        res.render("editForm.ejs",{chat});
    } catch(err){
        console.log("Error at Edit route -- edit form gen!");
        next(err);
    }
})
app.patch("/chats/:id",async (req,res)=>{
    try{
        const {message} = req.body;
        const {id} = req.params;
        const updatedChat = await Chat.findByIdAndUpdate(id,{message:message},{runValidators:true, new:true});
        console.log(updatedChat);
        res.redirect("/chats");
    } catch(err){
        console.log("Error at Edit route -- patch req!");
        next(err);
    }
})

//🗺️ Delete route
app.delete("/chats/:id",asyncWrap(async (req,res)=>{
        const {id} = req.params;
        const delChat = await Chat.findByIdAndDelete(id);
        console.log(delChat);
        res.redirect("/chats");
}))


//creating custom mongoose error handling functions
const handleValidationError = (err)=>{
    console.log("This is a validation error !");
    return err;
}

//passing these functions to a m.w. 
app.use((err,req,res,next)=>{
    const errType = err.name;
    console.log(errType);
    if(errType === "ValidationError"){
        err = handleValidationError(err);
    }
    next(err);
})

//Error handling middlware
app.use((err,req,res,next)=>{
    console.log("-----------⚠️Error Occurred-------");
    const {status=500, message="Some unknown error, sorry for inconvenience!"} = err;
    res.status(status).send(message);
})