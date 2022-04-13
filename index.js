 //there is two types of data types
 //1 primitive 
 //in which we store data in variables, which can bi accesses by variable
 // 2 reference 
 //in which we store data in objects , which can bi accessed by reference


 // there are six data types in primitive..
 //string
 const name = 'ansaar';
 console.log(name);
 console.log(typeof name);
 //number
 const age=45;
 console.log(age);   
 console.log(typeof age);
 //boolean
 const isTrue = true
 console.log(isTrue);
 console.log(typeof isTrue);
 //null
 const car = null;
 console.log(car);
 console.log(typeof car);
 //undefined
 const test= undefined;
 console.log(test);
 console.log(typeof test);
 //symbols
const sym = Symbol(`#`);
console.log(sym);
console.log(typeof sym);



//reference types are..
// these are all going to come back as objects
//Arrays
const array = ['love', '&' , 'war'];
console.log(array);
console.log(typeof array);
//object literals
const adress ={
    city: 'gilgit',
    state: 'pakistan '
}
console.log(adress);
console.log(typeof adress);
//dates
const toDay= new Date();
console.log(toDay);
console.log(typeof toDay);