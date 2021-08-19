const bubbleSort = (a) => {
  const size = a.length;
  let rounds = 0;
  let ord = false;

  while (!ord) {
    ord = true;

    for (let i = 0; i < size - 1 - rounds; i++) {
      if (a[i] > a[i + 1]) {
        let aux = a[i + 1];
        a[i + 1] = a[i];
        a[i] = aux;

        ord = false;
      }
    }

    rounds++;
  }

  return a;
};

console.log(bubbleSort([2, 7, 1, 5, 0, 4, 3, 8, -1, 2, 4]));
console.log(bubbleSort([2, 7, 1, 4, 3, 5, 0, 8, 2, -1, 2]));
console.log(bubbleSort([7, 2, 1, 4, 0, 5, 6, 8, 2]));
