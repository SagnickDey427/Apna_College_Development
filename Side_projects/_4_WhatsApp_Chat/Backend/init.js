const mongoose = require('mongoose');
const Chat = require("./models/chat.js");

main()
.then((res)=>{
    console.log("Connection to mongoDb was successful.");
})
.catch(err => console.log(err));


async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp'); // mongodb://localhost:port/<db_name>(default 'test')
}


//Initial chats 
const initChats = [
    {
        from:"Sagnick",
        to:"Sahil",
        message:"Kya kar raha hai ?",
        created_at:new Date()
    },
    {
        from:"Vedansh",
        to:"Himanshu",
        message:"Train ki ticket kab ki karwai tune?",
        created_at:new Date()
    },
    {
        from:"Vinay",
        to:"Badal",
        message:"Materials ke notes bhej na bhai",
        created_at:new Date()
    },
    {
        from:"Aradhya",
        to:"Pragati maam",
        message:"Good evening maam , when will our math copies be shown?",
        created_at:new Date()
    },
    {
        from:"Sagnick",
        to:"Avirup",
        message:"Movie dekhte jabi ?",
        created_at:new Date()
    },
    {
        from:"Aayush",
        to:"Sahil",
        message:"Sahil teri cycle le skta hu kya thori der ke liye?",
        created_at:new Date()
    },
    {
        from:"Badal",
        to:"Tanay",
        message:"Hackathon ka kya hua?",
        created_at:new Date()
    },
    {
        from:"Himanshu",
        to:"Sagnick",
        message:"DS kaise padhna hai bhai bata nah.",
        created_at:new Date()
    },
    {
        from:"Divyanshu",
        to:"Sagnick",
        message:"Pr aap kab aa rahe ho?",
        created_at:new Date()
    },
]

Chat.insertMany(initChats)