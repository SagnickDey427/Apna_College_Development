// let btn = document.querySelector('#clickBtn');
// let h1 = document.querySelector('h1');
// let div = document.querySelector('.color');


// function randomColor(){
//     // let colorsArr = ['#FF23A4',"#EF345C","#45EEAA","#12EC","#7622C0","#22793A"];
//     // let n = colorsArr.length;
//     // let randNo = Math.floor(Math.random()*n);
//     // h1.innerText=colorsArr[randNo];
//     // div.style.backgroundColor=colorsArr[randNo];

//     //Method 2 : 
//     let r = Math.floor(Math.random()*255);
//     let g = Math.floor(Math.random()*255);
//     let b = Math.floor(Math.random()*256);
//     let color = `rgb(${r},${g},${b})`;
//     h1.innerText=color;
//     div.style.backgroundColor=color;

// }

// btn.addEventListener('click',randomColor);


// let inp = document.querySelector('#inpText');
// let txtAra = document.querySelector('.textArea');
// inp.addEventListener('input',(e)=>{
//     txtAra.innerText=inp.value;
// })

// let head1 = txtAra.previousElementSibling;
// // head1.addEventListener('mouseout',()=>{
// //     console.log("You scrolled out ! ");
// // })

// inp.addEventListener('keypress',(e)=>{
//     console.log("Key pressed ",e.code);
// })

let paragr = inp.nextElementSibling;
head1.addEventListener('scroll',()=>{
    alert("Body is scrolled!");
});

window.addEventListener('load',()=>{
    alert("Page has loaded !");
})