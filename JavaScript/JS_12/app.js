// let url ="https://extinct-api.herokuapp.com/api/v1/animal/";
// fetch(url).then((r)=>{
//     return r.json();
// })
// .then((data)=>{
//     console.log(`Status code : ${data.status}`);
//     console.log(`Data  : ${JSON.stringify(data.data)}`);
//     console.log(data.data[0].binomialName);
// })
// .catch((e)=>{
//     console.log(e);
// })

//Using async await 
// async function getAnimalName(){
//     let url ="https://extinct-api.herokuapp.com/api/v1/animal/";
//     try{
//         let res1 = await fetch(url);
//         let data1 = await res1.json();
//         console.log(data1.data[0].commonName);
//         console.log(data1.data[0].lastRecord);

//         let res2 = await fetch(url);
//         let data2 = await res2.json();
//         console.log(data2.data[0].commonName);
//         console.log(data2.data[0].lastRecord);
//     }catch(e){
//         console.log(`Error : ${e}`);
//     }
// }

async function getAnimalNameAxios(){
    let url ="https://extinct-api.herokuapp.com/api/v1/animal/";
    try{
        let res =await axios.get(url);
        console.log(res); //res.data.data[0].commonName , res.data.data[0].lastRecord
    }catch(e){
        console.log("Error : ", e);
    }
}

async function getAnimal(nameTag, yearTag){
    let url ="https://extinct-api.herokuapp.com/api/v1/animal/";
    try{
        let res =await axios.get(url);
        let name = res.data.data[0].commonName;
        let year = res.data.data[0].lastRecord;
        nameTag.innerText = name;
        yearTag.innerText = year;

    }catch(e){
        console.log("Error :- ", e);
    }
}

let btn = document.querySelector(".showAnimals");
let ul = document.querySelector(".display ul");
let resetBtn = document.querySelector(".reset");

btn.addEventListener("click",()=>{
    let nameTag = document.createElement("div");
    nameTag.classList.add("name");
    let yearTag = document.createElement("div");
    yearTag.classList.add("year");
    getAnimal(nameTag, yearTag).then(()=>{

        let li = document.createElement("li");
        li.appendChild(nameTag);
        li.appendChild(yearTag);
        ul.appendChild(li);
    })


})
resetBtn.addEventListener("click",()=>{
    ul.innerHTML='';
})




let jokeUrl ="https://icanhazdadjoke.com/";
async function getJoke(){
    try{
        let config = {headers:{Accept : "application/json"}};
        let res =await  axios.get(jokeUrl,config);
        console.log(res.data);
    }catch(e){
        console.log("Error :- ",e);
    }
}


let url ="http://universities.hipolabs.com/search?country=";
async function getCollege(country){
    try{
        let res =await axios.get(url+country);
        console.log(res.data);
    }catch(e){
        console.log("Error : ",e);
    }
}

