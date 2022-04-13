var arrayOfObjects = [
  { names: "Ansar", age: 26, location: "rahimabad" },
  { names: "mubeen", age: 22, location: "rahimabad" },
  { names: "jahangeer", age: 24, location: "oshikhandass" },
  { names: "muhabat khan", age: 23, location: "sost" },
  { names: "danish", age: 21, location: "kareemabad" },
  { names: "nouman", age: 25, location: "gojal" },
  { names: "sajid", age: 20, location: "gilgit" },
  { names: "khifayat", age: 26, location: "nager" },
  { names: "faizan", age: 20, location: "aliabad" },
];

// //using for of loop on array of objects
// for (let element of arrayOfObjects) {
//     console.log(element);
//     // document.write(element[0] +element[1].names +  ' ' + element[1].age + ' ' +element[1].location + ' ' + '<br>'  )
//     document.write(element.names + ' ' + '<br>')
// }

// //using for loop on array of objects
//  for (item= 0; item < arrayOfObjects.length; item++) {
//      document.write(arrayOfObjects[item].names+'_______'+arrayOfObjects[item].age +' _________'+arrayOfObjects[item].location + '<br>')
//  }
// console.log('sdfg');

// //using for in loop on array of objects

// let text = "";
// for (let x in arrayOfObjects) {
//   text += arrayOfObjects[x] + "";
//   // document.write(
//   //   [x],
//   //   " ",
//   //   arrayOfObjects[x].names + " ",
//   //   arrayOfObjects[x].age + " ",
//   //   arrayOfObjects[x].location+"<br>"
//   // );
//   console.log([x], arrayOfObjects[x] );
// }

// // using for each loop on array of objects

// arrayOfObjects.forEach((arrayOfObjects) => {
//   for (let key in arrayOfObjects) {
//     document.write(`${key}  : ${arrayOfObjects[key] + "" + "<br>"}`);
//   }
// });

// // dowhile loop
// // it will first excute the body and tan check he Condition

// let student = 0;
// do {
//   alert( student );
//   student++;
// } while (student < 3);
// // in this loop the body of student first excuite and than the condition checked for the next to run agin boday or terminate the loop

// // array methods to create an  array (arrayof)
// const innn = Array.of(4);
// console.log(innn);

// // array methods to create an  array (array())
// // inserting a value into array by index
const out = Array(7);
out[3] = "ansar";

// // adding into array to end
out.push("ali");
// // adding into array to front
out.unshift("khan");
console.log(out);
// //finding length of array
let arrayLength;
arrayLength = out.length;
console.log(arrayLength);

// // take out from end
out.pop();

// // take out from front
out.shift();
console.log(out);
// // splice values
const mixed = ["rumi", "mubeen", "danish", "apple", "red", "green"];
mixed.splice(1, 2);
console.log(mixed);


// // reverse
mixed.reverse()
console.log(mixed);


// // concatenate array
let vall;

vall = out.concat(mixed)
console.log(vall);

// // sorting array
let number = ['3', '7', '100' , '9']
number.sort()
console.log(number);

// // sorting by using "compare function"
vall =number.sort(function (x, y){
  return x - y;
  // for revers sorting
  //return y -x ;
});
console.log(vall);


// // find 

// function under10(num) {
  
// }

// // slice
vall = number.slice(1, 2);
console.log(vall);