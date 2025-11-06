const express = require("express");
const app = express();

const port = 3000;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.listen(port,()=>{
    console.log("Server is listening to user on port "+port);
});

app.get("/register",(req,res)=>{
    const {user, password} = req.query;
    res.send(`Response to GET request.Welcome ${user}`);
});
app.post("/register",(req,res)=>{
    const {user, password} = req.body;
    console.log(req.body);
    res.send(`Response to POST request. Welcome ${user}`);
});
