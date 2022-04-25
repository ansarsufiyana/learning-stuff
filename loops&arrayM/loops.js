// for loop to ittirate over some data until certan condition is meet
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

// // for of

for(let element of student){
    if(element === 'Crystal') console.log(element + ' is the toper')
    else console.log(element)
}

// for each loop


student.forEach(function(value, index){
    console.log(value, index);
})

// while loop

let i = 0;

while (i < 5) {
    console.log('i tried it', i);
    i++;
}

// do while loop

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
