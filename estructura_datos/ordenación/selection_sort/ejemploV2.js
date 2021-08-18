const selectionSort = (a) => {
  for (let i = 0; i < a.length - 1; i++) {
    let positionMin = i;
    for (let j = i + 1; j < a.length; j++) {
      if (a[positionMin] > a[j]) {
        positionMin = j;
      }
    }
    let aux = a[i];
    a[i] = a[positionMin];
    a[positionMin] = aux;
  }

  return a;
};

console.log(selectionSort([2, 7, 1, 5, 0, 4, 3, 8, -1, 2, 4]));
console.log(selectionSort([2, 7, 1, 4, 3, 5, 0, 8, 2, -1, 2]));
