let myDiv = document.createElement("div");
console.log(myDiv);
myDiv.classList = "wraper";
document.body.appendChild(myDiv);
let ul = `<ul>
<li>one</li>
<li>two</li>
<li>three</li>
</ul>`;
myDiv.innerHTML = ul;
let img = document.createElement("img");
img.src = "img/map-398w.png";
img.width = 200;
console.log(img);
img.classList = "cute";
img.alt = "cute puppy";
myDiv.appendChild(img);
let html = `<div class = 'adiv'>
 <p >paragraph one</p>
 <p class = 'warning'>paragraph two</p>
 </div>`;
let ule = document.querySelector("ul");
ule.insertAdjacentHTML("beforebegin", html);
const adiv = document.querySelector(".adiv");
adiv.children[0].remove();
function generatecard(name, age, height) {}
