const express =require("express");
const app = express();
const port = 3000;

app.listen(port,()=>{
    console.log(`Server is listening to user requests on port ${port}`);
})

// app.use((req,res)=>{
//     console.log("Request received."); 
//     // res.send("<b>This is the response from the server</b>");  Sending Html/text response
//     res.send({message: "This is the response from the server"}); // Sending JSON response
// })

// app.get("/",(req,res)=>{
//     res.send("<h1 style='color:red;'> Welcome to Home page</h1>");
// });
// app.get("/search",(req,res)=>{
//     const {q} = req.query;
//     if(!q){
//         res.send("<h1> Nothing Searched</h1>");
//     }else{

//         res.send(`Searched for : ${q}`);
//     }
// });
// app.get("/help",(req,res)=>{
//     res.send("<h1 style='color:blue;'>This is the Help Center, how may i help you</h1>");
// });


app.get("/:username/:id",(req,res)=>{
    const {username,id} = req.params;
    res.send(`Username is ${username} and ID is ${id}`);
});
