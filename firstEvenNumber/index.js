// Trouver le premier nombre pair dans un tableau

const numbers = [1, 3, 7, 8, 10];

const firstEvenNumber = numbers.find((index) => {
  return index % 2 === 0;
});

console.log(firstEvenNumber);
