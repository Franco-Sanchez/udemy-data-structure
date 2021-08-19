const insertionSort = (a) => {
  for (let i = 1; i < a.length; i++) {
    let aux = a[i];
    let j;
    for (j = i - 1; j >= 0; j--) {
      if (a[j] <= aux) break;
      a[j + 1] = a[j];
    }
    a[j + 1] = aux;
  }

  return a;
};

console.log(insertionSort([2, 7, 1, 5, 0, 4, 3, 8, -1, 2, 4]));
console.log(insertionSort([2, 7, 1, 4, 3, 5, 0, 8, 2, -1, 2]));
console.log(insertionSort([7, 2, 1, 4, 0, 5, 6, 8, 2]));
