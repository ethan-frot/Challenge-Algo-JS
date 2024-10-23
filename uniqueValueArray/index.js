const arr = [1, 2, 3, 4, 4, 5, 6, 6, 7];

function onlyUnique(value, index, array) {
  return array.indexOf(value) === index;
}

const uniqueValues = arr.filter(onlyUnique);

// Écris une fonction qui prend un tableau en argument et retourne un tableau contenant uniquement des valeurs uniques.
console.log(uniqueValues); // [1, 2, 3, 4, 5, 6, 7]
