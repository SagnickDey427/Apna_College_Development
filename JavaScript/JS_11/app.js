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



function savedata(data){
    return new Promise((resolve, reject)=>{
        let internetSpeed = Math.floor(Math.random()*10)+1;
        if(internetSpeed>4){
            resolve("Data saved successfully : "+ data);
        } else{
            reject("Data not saved due to low internet speed");
        }
    });
}
savedata("Data 1").then((result)=>{
    console.log("Data 1 saved");
    console.log(result);
    return savedata("Data 2");
})
.then((result)=>{
    console.log("Data 2 saved");
    console.log(result);
    return savedata("Data 3");
})
.then((result)=>{
    console.log("Data 3 saved");
    console.log(result);
})
.catch((error)=>{
    console.log("Promise rejected");
    console.log(error);
});