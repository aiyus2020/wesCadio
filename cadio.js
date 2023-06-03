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
function generatecard(name, age, height) {
  let html = `<div class='playcard'>
  <h2> ${name} - ${age}</h2>
  <p> their height is ${height} and  ${age} years old. in dog years this person would be ${
    age * 7
  } that will be a tall dog</p>
  <button class='delete'>delete</button>
  </div>`;
  return html;
}
const newdiv = document.createElement("div");
newdiv.classList = "cards";
let playcards = generatecard("aiyus", 12, 150);
playcards += generatecard("edna", 12, 150);
playcards += generatecard("williams", 12, 150);
playcards += generatecard("testimony", 12, 150);
newdiv.innerHTML = playcards;
myDiv.insertAdjacentElement("beforebegin", newdiv);
let buttons = document.querySelectorAll(".delete");
function deletes(event) {
  classList.playcard.event.remove();
}
buttons.forEach((button) => button.addEventListener("click", deletes));
