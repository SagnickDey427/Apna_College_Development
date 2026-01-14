const express = require("express");
const port = 3000;
const app = express();
const { v4: uuidv4 } = require('uuid');
const expressError = require("./ExpressError.js");




// 📌 Using  🎯✨Morgan -- HTTP request logger middleware for node.js
//Doc refer : https://betterstack.com/community/guides/logging/morgan-logging-nodejs/

var morgan = require('morgan');
const ExpressError = require("./ExpressError");

// app.use(morgan("common")); //Using  basic pre-defined string formats for logging purpose

/*Defining a custom token(i.e. our own custom string format) for our logging purpose*/

//We'll assign an id from uuid with each request
app.use((req,res,next)=>{
    req.id = uuidv4(); //Defining a param 'id' inside req
    next();
})
morgan.token("id",(req)=>req.id); //Defining a custom token for 

// Use Morgan with the custom token in the log format
app.use(
  morgan(":id :method :url :status :res[content-length] - :response-time ms")
);










/*Defining Middlewares*/
// app.use((req,res, next)=>{
//     console.log("This is 1st middleware.");
//     next(); //Refers the end of this m.w. (Not literally you can still write code after it , but we don't do it.)
// })

// app.use((req,res,next)=>{
//     console.log("Thid is 2nd middleware.");
//     next();
// })

//Creating a logger middleware
// app.use((req,res,next)=>{
//     console.log(`Host name : ${req.hostname} || Method : ${req.method} || Path : ${req.path}`);
//     next();
// })

//M.W. with a specific path 
app.use("/random",(req,res,next)=>{
    console.log("Middleware for /random path.");
    next();
})


// 🦖🦖 Access Token validation checking m.w. for /api route 
// app.use("/api",(req,res,next)=>{
//     const {token} = req.query;
//     if(token === "giveaccess"){
//         return next();
//     }
//     res.send("Access Denied , Wrong Token !");
// })

//Pass this as a calback to the route of /api 
let checkToken = (req,res,next)=>{
    const {token} = req.query;
    if(token === "giveaccess"){
        return next();
    }
    throw new expressError(401,"Access Denied , Wrong Token !");
}
//🎯 Explanation : -
/*
--> We call '/api?token=giveaccess' : No error , simple successful data fetch
--> If any error generates , the checkToken generates the expressError object.
--> Our  error handler handles the error first then calls the built-in error handler.(If called next(err))
else if called res.send(err) it sends the expressError object as it is. 
*/





//Routes
app.get("/",(req,res)=>{
    res.send("I am Root .");
})

app.get("/random",(req,res)=>{
    res.send("This is a random page.");
})

app.get("/api", checkToken , (req,res)=>{
    res.send("Data 📊");
})

app.get("/err",(req,res)=>{
    abcd = abcd;
})

app.get("/admin",(req,res)=>{
    throw new ExpressError(403,"Access to admin is restricted!");
})




//Error Handling middlewares
app.use((err,req,res,next)=>{
    console.log("-----------Error----------");
    const {status=500,message="Some unknown error occured!"} = err;
    res.status(status).send(message);
})

// ⚠️⚠️ Define a general M.W. at the end  that'll act as error handler for wrong requests
// app.use((req,res)=>{
//     res.send("Page not found");
// })

app.listen(port,()=>{
    console.log("Listening to the port.");
})

