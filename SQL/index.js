const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');

const connection = mysql.createConnection({ //Creating connection object
  host: 'localhost', //Will be same for our case 
  user: 'root',
  database: 'delta_app', //Setting db name
  password:'123456' //Setting password to sql password (that one set at the time of installing sql)
});


//****Using basic .query() method ******/
// let q = 'SHOW TABLES';

// connection.query(q,(err,result,fields)=>{
//   console.log(result);
//   console.log(result.length);

// });


//*************Using Format queries (Adding dynamic data)**************(Inserting multiple rows )************ */
// let q= "INSERT INTO user (id,username,email,password) VALUES ?";
// let users = [
//   ["123A5g","bobby_deol123","bobby123@gmail.com","1234"],
//   ["439Jy","sagnickDey427","sagnick556@gmail.com","667i"]
// ];
// connection.query(q,[users],(err,result,fields)=>{
//   console.log(result);
// });

//***************Inserting data in bulk using faker ************** */
// let getUserDate = ()=> {
//   return [
//     faker.string.uuid(),
//     faker.internet.username(),
//     faker.internet.email(),
//     faker.internet.password()
//   ];
// }
// let q= "INSERT INTO user (id,username,email,password) VALUES ?";
// let data=[];
// for(let i=0;i<10;i++){
//   data.push(getUserDate());
// }
// try{

//   connection.query(q,[data],(err,result,fields)=>{
//     if(err) throw err;
//     console.log(result);
  
//   })
// } catch(err){
//   console.log(err);
// }

// connection.end();

//**************************************************Routing alongwith DB integration *********************/


const express  = require("express");
const app = express();
const path = require("path");
const methodOverride = require('method-override');
const port = 8080;

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views")); //For ejs files
app.use(express.urlencoded({extended:true})); //For urlencoded post req
app.use(express.json()); //For json post req
app.use(methodOverride('_method'));

//Server started
app.listen(port,()=>{
  console.log('App is listening to port ',port);
});

//Created / route for Home page
app.get("/", (req, res) => {
  let q = `SELECT COUNT(*) AS Total_count FROM user`;

  // Note: 'err' usually comes FIRST in standard MySQL drivers
  connection.query(q, (err, result, fields) => {
    
    // 1. Handle error explicitly inside the callback
    if (err) {
      console.error(err); // Log for developer
      return res.status(500).send("Some error in DB!"); // Send response to user
    }

    // 2. Success case
    let count = result[0]["Total_count"];
    console.log(count);
    res.render("home.ejs",{count});
  });
});
//📌📌📌 Note : Why we didn't use try-catch block , because :
//The try...catch block in JavaScript is synchronous. It only catches errors that happen immediately when the code runs.
// However, connection.query is asynchronous. It sends a request to the database and moves on. The try...catch block finishes execution before the database ever responds.

// When the database finally responds, the callback function runs. If you throw an error there, there is no try...catch waiting to catch it anymore. The error bubbles up to the root of the Node.js process, causing an "Uncaught Exception," which crashes the server.


//Show all users route
app.get("/users",(req,res)=>{
  let q = "SELECT * FROM user";
  connection.query(q, (err, users, fields) => {
    
    // 1. Handle error explicitly inside the callback
    if (err) {
      console.error(err); // Log for developer
      return res.status(500).send("Some error in DB!"); // Send response to user
    }

    // 2. Success case
    res.render("allUsers.ejs",{users});
  });
})

//📌📌📌 Note : -- A very frequent error that can happen here if we keep this /users/new request route under /users/:id route is: . The "Route Ordering" Conflict (Most Likely)
// If you have a route that looks for an ID (like /user/:id) defined before your new route (/user/new), Express will intercept the request.

// The Problem: Express matches routes from top to bottom.

// 1. You request /user/new.

// 2. Express sees app.get('/user/:id') first.

// 3. It thinks "new" is the :id.

// 4. Inside that route, you likely query the database for a user with the ID "new".

// 5. The database returns undefined (because no user has the ID "new").

// 6. You pass that undefined variable to res.render(), which causes the crash.

// The Fix: Move your /new route above the /:id route.

//Add new user -- step 1: Create a form template in users/new route
app.get("/users/new",(req,res)=>{
  res.render("newUser.ejs");
})

//Add new user -- step 2: Send post request from the form to /users route
app.post("/users",(req,res)=>{
  const {password:formPassword , username:newUsername,email:userEmail}= req.body;
  let id = faker.string.uuid();
  let q = `INSERT INTO user (id,username,email,password) VALUES ('${id}','${newUsername}','${userEmail}','${formPassword}')`;
  connection.query(q,(err,result)=>{
    if(err){
      console.log(err);
      return res.send("Insertion Error : Some error occurred !");
    }
    res.redirect("/users");
  })
})


//Create edit page edit route -users/:id/edit
app.get("/users/:id/edit",(req,res)=>{
  let {id} = req.params;
  let q = `SELECT * FROM user WHERE id='${id}'`;
  connection.query(q,(err,result)=>{
    if(err){
      console.log(err);
      return res.send("Error in DB , cannot show edit page , sorry !");
    }
    let user = result[0];
    console.log(user);
    res.render("editUser.ejs",{user});
  })
})

//Sending patch request from the edit form to the users/:id route
app.patch("/users/:id",(req,res)=>{
  let {id} = req.params;
  let q1 = `SELECT * FROM user WHERE id='${id}'`;
  const {password:formPassword , username:newUsername}= req.body;
  connection.query(q1,(err,result)=>{
    if(err){
      return res.send("Some error Occurred ,update request failure!");
    }
    let user = result[0];
    console.log(user);
    if (user.password != formPassword){
      res.send("Incorrect Password , updation request aboeted !");
    } else{
      let q2 = `UPDATE user SET username='${newUsername}' WHERE  id = '${id}'`;
      connection.query(q2,(err,updatedUserResult)=>{
        if(err){
          return res.send("Some error Occurred ,update request failure!");
        }
        res.redirect("/users");
      })
    }
  })
})

//Delete request on /users/:id
app.delete("/users/:id",(req,res)=>{
  let {id} = req.params;
  let q = `DELETE FROM user WHERE id='${id}'`;
  connection.query(q,(err,result)=>{
    if(err){
      console.log(err);
      return res.send("Deletion error : Some error occurred!");
    }
    res.redirect("/users");
  })
})