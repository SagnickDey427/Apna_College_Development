// const mongoose = require('mongoose');

// main()
// .then((res)=>{
//     console.log("Connection to mongoDb was successful.");
// })
// .catch(err => console.log(err));

// async function main() {
//   await mongoose.connect('mongodb://127.0.0.1:27017/college'); // mongodb://localhost:port/<db_name>(default 'test')

// }


// const userSchema = new mongoose.Schema({
//     name:String,
//     email:String,
//     age:Number
// })

// const User = mongoose.model("User",userSchema);

//Inserting single document 
// const user1  = new User({
//   name:"Sagnick",
//   email:"sagnickdey427@gmail.com",
//   age:20
// })
// user1.save()
// .then((res)=>{
//   console.log(res);
// }).catch((err)=>{
//   console.log(err);
// })

//Multiple insertion in Collection
// User.insertMany([
//   {name:"Sahil",email:"sahil34@gmail.com",age:21},
//   {name:"Vinay",email:"vinay45@gmail.com",age:19}
// ]).then((res)=>{
//   console.log(res);
// }).catch((err)=>{
//   console.log(err);
// })

//Find documents 
// User.find({age:{$gt:19}})
// .then((res)=>{
//   console.log(res);
// }).catch((err)=>{
//   console.log(err);
// })

//Find by id 
// User.findById('692d39fcb48bdf4a88554767')
// .then((res)=>{
//   console.log(`Name : ${res.name} || Email : ${res.email}`);
// }).catch((err)=>{
//   console.log(err);
// })

// find and Update
// User.findByIdAndUpdate('692d39fcb48bdf4a88554767',{email:"sagnickDey4456f@gmail.com"},{new:true})
// .then((res)=>{
//   console.log(res);
// }).catch((err)=>{
//   console.log(err);
// })

//Find and delete 
// User.findOneAndDelete({name:"Vinay"}).then((res)=>{
//   console.log(res);
// }).catch((err)=>{
//   console.log(err);
// })

//MongoDb with express app 
const express = require('express');
const mongoose = require('mongoose');

main()
.then((res)=>{
    console.log("Connection to mongoDb was successful.");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp'); // mongodb://localhost:port/<db_name>(default 'test')
}

const app = express();
const port = 8080;
app.listen(port,()=>{
  console.log(`App is listening to port ${port}`);
})

app.get("/",(req,res)=>{
  res.send("Welcome to home page !");
})