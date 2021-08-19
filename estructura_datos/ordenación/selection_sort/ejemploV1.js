const selectionSort = (a) => {
  const lastPosition = a.length - 1;
  let initialValue = 0;

  while (initialValue < lastPosition) {
    let positionMin = initialValue;

    for (let i = initialValue; i < lastPosition; i++) {
      if (a[positionMin] > a[i + 1]) {
        positionMin = i + 1;
      }
    }
    let aux = a[positionMin];
    a[positionMin] = a[initialValue];
    a[initialValue] = aux;

    initialValue++;
  }

  return a;
};

console.log(selectionSort([2, 7, 1, 5, 0, 4, 3, 8, -1, 2, 4]));
console.log(selectionSort([2, 7, 1, 4, 3, 5, 0, 8, 2, -1, 2]));
console.log(selectionSort([7, 2, 1, 4, 0, 5, 6, 8, 2]));
