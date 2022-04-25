// event bubling



let divParent = document.createElement("div");
divParent.id = "parent";

let pbubling = document.createElement("p");
pbubling.id = "bubling";
pbubling.innerHTML =
  'Lorem <button id="child" style="background-color: rgb(255, 255, 200);"> dolor </button> sit amet consectetur adipisicing elit. Expedita aliquid necessitatibus autem assumenda consequatur harum incidunt architecto, asperiores, ullam eaque dolores sunt odit eum. Veritatis nisi dicta id commodi unde!';

divParent.appendChild(pbubling);

let mainDiv = document.getElementById("eventbubling");
mainDiv.appendChild(divParent);



const parent = document.getElementById("parent");
const bubling = document.getElementById("bubling");
const child = document.getElementById("child");

parent.addEventListener("click", ()  =>{
  parent.style.backgroundColor = "rgb(64, 223, 239)";
  parent.style.padding = "8px";
  console.log("I am Parent");
},false);



bubling.addEventListener("click", (e) => {
    
    bubling.style.backgroundColor = "blue";
    bubling.style.padding = "4px";
    console.log("I am bubling");
    // e.stopPropagation(); // // to stop event on the current element
},false);



child.addEventListener("click", ()  =>{
  child.style.backgroundColor = "red";
  child.style.padding = "3px";
  console.log("I am child");
},false);

// Capturing

let capturingParent = document.createElement("div");
capturingParent.id = "C-parent";

let Capturingpara = document.createElement("p");
Capturingpara.id = "C-capturing";
Capturingpara.innerHTML =
  'Lorem <button id="C-child" style="background-color: rgb(255, 255, 200);"> dolor </button> sit amet consectetur adipisicing elit. Expedita aliquid necessitatibus autem assumenda consequatur harum incidunt architecto, asperiores, ullam eaque dolores sunt odit eum. Veritatis nisi dicta id commodi unde!';

capturingParent.appendChild(Capturingpara);

let capturingdiv = document.getElementById("eventCapturing");
capturingdiv.appendChild(capturingParent);


const Cparent = document.getElementById("C-parent");
const Ccapturing = document.getElementById("C-capturing");
const Cchild = document.getElementById("C-child");

Cparent.addEventListener(
  "click",
  function () {
    Cparent.style.backgroundColor = "rgb(142, 50, 0)";
    Cparent.style.padding = "8px";
    console.log("I am Parent");
  },
  true
);

Ccapturing.addEventListener(
  "click",
  function () {
    Ccapturing.style.backgroundColor = "red";
    Ccapturing.style.padding = "4px";
    console.log("I am capturing");
  },
  true
);

Cchild.addEventListener(
  "click",
  function () {
    Cchild.style.backgroundColor = "blue";
    Cchild.style.padding = "3px";
    console.log("I am child");
  },
  true
);

