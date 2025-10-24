//Example 1 of callbakc hell

// let h1 = document.querySelector('h1');
// function changeColor(colour, delay, calback){
//     setTimeout(()=>{
//         h1.style.color = colour;
//         if(calback){
//             calback();
//         }
//     },delay);
// }


// changeColor('red',1000,()=>{
//     changeColor('orange',1000,()=>{
//         changeColor('green',1000,()=>{
//             changeColor('pink',1000);
//         });
//     });
// });



// function savedata(data){
//     return new Promise((resolve, reject)=>{
//         let internetSpeed = Math.floor(Math.random()*10)+1;
//         if(internetSpeed>4){
//             resolve("Data saved successfully : "+ data);
//         } else{
//             reject("Data not saved due to low internet speed");
//         }
//     });
// }
// savedata("Data 1").then((result)=>{
//     console.log("Data 1 saved");
//     console.log(result);
//     return savedata("Data 2");
// })
// .then((result)=>{
//     console.log("Data 2 saved");
//     console.log(result);
//     return savedata("Data 3"); 
// })
// .then((result)=>{
//     console.log("Data 3 saved");
//     console.log(result);
// })
// .catch((error)=>{
//     console.log("Promise rejected");
//     console.log(error);
// });


let h1 = document.querySelector('h1');
function changeColor(colour, delay){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            h1.style.color = colour;
            resolve("Colour changed to "+colour);
        },delay);
    });
}

async function h1colorchange(){
    await changeColor('red',1000);
    await changeColor('orange',1000);
    await changeColor('green',1000);
    await changeColor('pink',1000);
    return "All colors changed";
}

// changeColor('red',1000).then((r)=>{
//     console.log(r);
//     return changeColor('orange',1000);
// }).then((r)=>{
//     console.log(r);
//     return changeColor('green',1000);
// }).then((r)=>{
//     console.log(r);
//     return changeColor('pink',1000);
// }).then((r)=>{
//     console.log(r);
// }).catch((e)=>{
//     console.log("Error occured: "+e);
// })

async function greet(){
    throw "Unknown error";
    return "HELLO!";
}
greet().then(()=>{
    console.log("Greeted successfully");
}).catch(()=>{
    console.log("Error in greeting");
})

