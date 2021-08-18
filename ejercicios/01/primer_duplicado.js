const firstDuplicate = (a) => {
  const copyA = [...a];

  const auxAcumulator = {};

  const objOfDuplicates = copyA.reduce((acc, el, i) => {
    !auxAcumulator[el]
      ? (auxAcumulator[el] = [i])
      : (auxAcumulator[el] = [...auxAcumulator[el], i]);
    if (auxAcumulator[el].length > 1) acc[el] = [...auxAcumulator[el]];
    return acc;
  }, {});

  const arrOfKeys = Object.keys(objOfDuplicates);

  if (!arrOfKeys.length) return -1;

  let min = arrOfKeys[0];

  arrOfKeys.forEach((key) => {
    if (objOfDuplicates[min][1] > objOfDuplicates[key][1]) min = key;
  });

  return min;
};

// Tests

console.log(firstDuplicate([2, 1, 3, 5, 3, 2])); // 3
console.log(firstDuplicate([2, 4, 3, 5, 1])); // -1
console.log(firstDuplicate([1])); // -1
console.log(firstDuplicate([2, 2])); // 2
console.log(firstDuplicate([2, 1])); // -1
console.log(firstDuplicate([2, 1, 3])); // -1
console.log(firstDuplicate([2, 3, 3])); // 3
console.log(firstDuplicate([3, 3, 3])); // 3
console.log(firstDuplicate([8, 4, 6, 2, 6, 4, 7, 9, 5, 8])); // 6
console.log(firstDuplicate([10, 6, 8, 4, 9, 1, 7, 2, 5, 3])); // -1
console.log(firstDuplicate([1, 1, 2, 2, 1])); // 1
