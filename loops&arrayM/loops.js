// // loops 
// // loops are used to perform 
// //repeated takes based on a condition.
// //loop will continue running until the condition returns false.




// //for loop to ittirate over some data until certan condition is meet
// //for loops are commonly used to run code aset number of times.
// // also you can use break to exit the loop early,
let student = ['Steve',
  'HeimMarc',
  'Horvath',
  'Robert',
  'King',
  'Lori',
  'Lawrence',
  'Daniel',
  'Lichty',
  'Stephanie',
  'Long',
  'Crystal',
  'Maggard',
  'Elizabeth',
  'Maina',
  'Sharon',
  'Mast',
  'Alexa',
  'Middleton',
  'Kent',
  'Miller',
];

for (let i = 0; i < student.length; i++) {
    if(student[i] === 'Crystal'){
        console.log(student[i]+ ' is the ' + 'toper' );
        continue;
    }
    console.log(student[i]);


}

// // for in
// // the for in loop iterates over the properties of an object.
//  // for each property, the code in the code block is executed.
// //the for in is meant for objects, its much slower with array.


const capitals = {
  a: "Athens",
  b: "Belgrade",
  c: "Cairo"
};

for (let key in capitals) {
  console.log(key + ": " + capitals[key]);
}

// // for of
// //the for of loop iterates over the values of many types of iterables,
// //including arrays, and special collection types,
// // for each value in the iterable object, the code in the code block is executed.


for(let element of student){
    if(element === 'Crystal') console.log(element + ' is the toper')
    else console.log(element)
}

// //for each method
// //it is builtin methods
// //The forEach() method calls a specified callback function once for every element it iterates over inside an array. 
// //Just like other array iterators such as map and filter, 
// //the callback function can take in three parameters:


function rollCall(value, index){
  console.log(`Is the number ${index + 1} student - ${value} present? Yes!`)
}
student.forEach((value, index) => rollCall(value, index))

// // while loop
// //the while loop starts by evaluating condition. if the condition evaluates to true,
// //the code in the code clock gets executed. if condition evaluates to false,
// //the code in the code block is not executed and loops ends


let i = 0;

while (i < 5) {
    console.log('i tried it', i);
    i++;
}

// //do while loop
// //the do...while loop is closely related to while loop. In a do...while loop, condition is checked at the end of each iteration of the loop, 
// //rather than at the beginning before the loop runs.

do{
    console.log('i tried it ', i);
    i++;
}while(i < 10)

// // using for of and for loop on an array which have two or more same value,
// // to output an array with singl value of the same one

const array = ["a", "b", "b", "c", "d"];
function unique(array) {
  let answer = [];
  for (let i = 0; i < array.length; i++) {
    if (answer.includes(array[i])) continue;
    else answer.push(array[i]);
  }
  return answer;
}

function unique(array) {
  let answer = [];
  for (let element of array) {
    if (answer.includes(element)) continue;
    else answer.push(element);
  }
  return answer;
}
console.log(unique(array));
