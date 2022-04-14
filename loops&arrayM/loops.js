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
    if(i === 6){
        console.log(student[i]+ ' is the ' + 'toper' );
        continue;
    }
    console.log(student[i]);

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