// // array helpers

// // for each
// // map
// //filter
// //find
// //every
// //some
// //reduce

// // array
var arrayOfObjects = [
  { names: "Ansar", age: 26, location: "rahimabad" },
  { names: "mubeen", age: 22, location: "rahimabad" },
  { names: "jahangeer", age: 24, location: "oshikhandass" },
  { names: "muhabat", age: 23, location: "sost" },
  { names: "danish", age: 21, location: "kareemabad" },
  { names: "nouman", age: 25, location: "gojal" },
  { names: "sajid", age: 20, location: "gilgit" },
  { names: "khifayat", age: 26, location: "nager" },
  { names: "faizan", age: 20, location: "aliabad" },
];

// // for each helper
// // using for each to iterate the given array

// let presentAll = [];
// function rollCall(student, index) {
//   let callRoll = `The number ${index + 1} student is ${student.names}. age  ${student.age}. from ${student.location} present? Yes!`;
//   presentAll[index] = callRoll;
// }

// arrayOfObjects.forEach((names, index) => rollCall(names, index));
// console.log(presentAll);



// let sum = 0;
// arrayOfObjects.forEach(function (e) {
// //   e;

//   sum+= (`${e.names}, ${e.age}, ${e.location} ${''}`);
// });
// console.log(sum);

// //map helper
// // Map takes a function and applies that function to each element in the array. 
// // using map helper to get the person's by there location

// let selectedKeys = arrayOfObjects.map(({names, age}) => ({[names]: age}));
// console.log(selectedKeys);

// // filter
// // The way the filter() method works is very simple. It entails filtering out one or more items (a subset) from a larger collection of items (a superset) 
// //based on some condition/preference

// let range = {
//   lower: 23,
//   upper: 25
// }

   
// let teenagers = arrayOfObjects.filter(function(person) {
// 	return person.age >= this.lower && person.age <= this.upper;
// }, range)

// console.log(teenagers)

// const Location = arrayOfObjects.filter(arrayOfObjects => arrayOfObjects.location === 'rahimabad');
// console.log(Location);

// // reduce
// // using reduce helper to get the all names in the array
// //

// let namesAll = arrayOfObjects.reduce((nam, arrobj) => {
//     nam.push(arrobj.names)
//     return(nam)
// }, [])

// console.log(namesAll);

// // find helper
// // using find helper to find the excat valve we need

// let findname = arrayOfObjects.find(function(user){
//     return user.names === "Ansar";
// });
// console.log(findname);