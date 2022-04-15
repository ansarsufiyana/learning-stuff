// // generator function is used by adding asterisk symbol (*) after function
// // function*
// // yield is a special type of return key word that is only usefull in generator

// // generator function will return generator object that alows us to use this generator funtion.
// // mostly use for creating infinte loop.. eg= generating id's.

// // generator function

// function* generateId() {
//   let id = 1;

//   while (true) {
//     yield id;
//     id++;
//   }
// }

// const generatorObject = generateId();
// console.log(generatorObject.next());
// console.log(generatorObject.next());
// console.log(generatorObject.next());
// console.log(generatorObject.next());

// // // for reseting generator loop we can make a brand new genetorobject now when we call it reset values.

// const generatorObject2 = generateId();
// console.log(generatorObject2.next());

// // // useing as iterator

// function* generator(array) {
//   for (let i = 0; i < array.length; i++) {
//     yield array[i];
//   }
// }

// const generatorObject3 = generator([1, 2, 3]);

// console.log(generatorObject3.next());
// console.log(generatorObject3.next());
// console.log(generatorObject3.next());
// console.log(generatorObject3.next());

function* generateId() {
  let id = 1;

  while (true) {
    const increment = yield id;
    if (increment != null) {
      id += increment;
    } else {
      id++;
    }
  }
}

const generatorObject = generateId();
console.log(generatorObject.next());
console.log(generatorObject.next());
console.log(generatorObject.next());
console.log(generatorObject.return(6));
console.log(generatorObject.next());
