let divParent = document.createElement("div");
divParent.id = "parent";

let pbubling = document.createElement("p");
pbubling.id = "bubling";
pbubling.innerHTML =
  'Lorem <button id="child" style="background-color: rgb(255, 255, 200);"> dolor </button> sit amet consectetur adipisicing elit. Expedita aliquid necessitatibus autem assumenda consequatur harum incidunt architecto, asperiores, ullam eaque dolores sunt odit eum. Veritatis nisi dicta id commodi unde!';

divParent.appendChild(pbubling);
console.log(divParent);

let mainDiv = document.getElementById("eventbubling");
mainDiv.appendChild(divParent);
console.log(mainDiv);

let capturingParent = document.createElement("div");
capturingParent.id = "C-parent";

let Capturingpara = document.createElement("p");
Capturingpara.id = "C-capturing";
Capturingpara.innerHTML =
  'Lorem <button id="C-child" style="background-color: rgb(255, 255, 200);"> dolor </button> sit amet consectetur adipisicing elit. Expedita aliquid necessitatibus autem assumenda consequatur harum incidunt architecto, asperiores, ullam eaque dolores sunt odit eum. Veritatis nisi dicta id commodi unde!';

capturingParent.appendChild(Capturingpara);
console.log(capturingParent);

let capturingdiv = document.getElementById("eventCapturing");
capturingdiv.appendChild(capturingParent);
console.log(capturingdiv);

// event bubling

const parent = document.getElementById("parent");
const bubling = document.getElementById("bubling");
const child = document.getElementById("child");

parent.addEventListener("click", function () {
  parent.style.backgroundColor = "rgb(64, 223, 239)";
  parent.style.padding = "8px";
  console.log("I am Parent");
});

bubling.addEventListener("click", function () {
  bubling.style.backgroundColor = "blue";
  bubling.style.padding = "4px";
  console.log("I am bubling");
});

child.addEventListener("click", function () {
  child.style.backgroundColor = "red";
  child.style.padding = "3px";
  console.log("I am child");
});

// // Capturing

const Cparent = document.getElementById("C-parent");
const Ccapturing = document.getElementById("C-capturing");
const Cchild = document.getElementById("C-child");

Cparent.addEventListener(
  "click",
  function () {
    Cparent.style.backgroundColor = "rgb(142, 50, 0)";
    Cparent.style.padding ='8px'
    console.log("I am Parent");
  },
  true
);

Ccapturing.addEventListener(
  "click",
  function () {
    Ccapturing.style.backgroundColor = "red";
    Ccapturing.style.padding= '4px'
    console.log("I am capturing");
  },
  true
);

Cchild.addEventListener(
  "click",
  function () {
    Cchild.style.backgroundColor = "blue";
    Cchild.style.padding= '3px'
    console.log("I am child");
  },
  true
);
