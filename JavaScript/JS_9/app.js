let inputEl = document.createElement('input');
let body = document.querySelector('body');
body.append(inputEl);
inputEl.classList.add('blackBorder');

let btn = document.createElement('button');
btn.innerText='Click Me!';
body.append(btn);

inputEl.setAttribute('placeholder','Username');
btn.setAttribute('id','btn');

btn.classList.add('buttonStyle');

let h1 = document.createElement('h1');

h1.innerText="DOM Practice";

h1.classList.add('h1Style');

body.prepend(h1);

let p = document.createElement('p');
p.innerHTML="Apna College <b>Delta</b> Practice";

body.append(p);
