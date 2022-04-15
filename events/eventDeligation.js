// // event delegation is a way to add event listener to multiple element.
// // and adding a new child with the same event on it


// // creating a ol list and using event delegation on it


let myList = document.createElement('ol')
myList.id= 'friutlist'
myList.innerHTML= '<div>asdf</div> <li>Apple</li> <li>Bananas</li> <li>Tomotos</li>'



let List = document.getElementById('mylist')
List.appendChild(myList)
console.log(List);

let friutList = document.getElementById('friutlist')
friutList.addEventListener('click', function(e){
    console.log(e); 
    
    let Target = e.target;
    console.log(Target)
    Target.style.backgroundColor = 'red';
    if(Target.matches("li")){
    }
})

// // adding new li item
let newli = document.createElement("li")
newli.textContent = 'wrok'
myList.appendChild(newli);
