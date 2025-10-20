const para = document.getElementById("para");
const info = document.getElementById("info");

// Scroll event listener on paragraph
para.addEventListener("scroll", function() {
    info.textContent = "Scroll position: " + para.scrollTop + "px";
});

let inputel = document.querySelector('input');
inputel.addEventListener('keypress',(e)=>{
    alert(`Key pressed : ${e.code}`);
});
para.addEventListener('mouseout',()=>{
    alert("Mouse out  ");
});

let btn = document.createElement('button');
btn.innerText="Click me!";
btn.addEventListener('click',()=>{
    btn.classList.add('green');
});

let nameInputEl= document.querySelector('#nameInput');
let head2 = nameInputEl.previousElementSibling;

nameInputEl.addEventListener('change',()=>{
    head2.innerText=nameInputEl.value;
});



inputel.insertAdjacentElement('afterend',btn);