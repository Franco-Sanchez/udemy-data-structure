const jjSort = (arr) => {
  let finalPosition = arr.length - 1;

  for (let i = 0; i < arr.length / 2; i++) {
    let posMin = i;
    let posMax = i;

    for (let j = i; j <= finalPosition; j++) {
      if (arr[j] > arr[posMax]) posMax = j;
      if (arr[j] < arr[posMin]) posMin = j;
    }

    let aux = arr[posMin];
    arr[posMin] = arr[i];
    arr[i] = aux;

    if (posMax === i) posMax = posMin;

    aux = arr[finalPosition];
    arr[finalPosition] = arr[posMax];
    arr[posMax] = aux;

    finalPosition--;
  }

  return arr;
};

const arrForSorted = [
  7, 28, 2, 53, 16, 13, 45, 345, 2345, 234, 35235, 123, 4346, 75, 4, 7, 3, 68,
  2, 6, 63, 2, 0, 68, 436, 12, 343, 54, 25, 13, 15, 2, 97, 81, 981, 618, 61,
  3280, 18, 5, 78, 23, 81, 65, 84, 72, 95,
];

console.log(jjSort(arrForSorted));
