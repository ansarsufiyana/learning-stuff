let pets = [
  { id: "1", name: "animal" },
  { id: "2", name: "animal" },
];
let Category = [
  { id: "1", name: "Dog" },
  { id: "2", name: "Cats" },
  { id: "3", name: "Cows" },
  { id: "4", name: "Goat" },
];

var newpets = [];

pets.forEach((pet) => {
  let animalType = Category.find((cate) => pet.id === cate.id);
  newpets.push({ id: pet.id, name: animalType.name });
});

console.log(newpets);
