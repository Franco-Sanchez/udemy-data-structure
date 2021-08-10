const factorialV1 = (num) => {
  if (num === 0) {
    return 0;
  }

  let result = 1;

  for (let i = 1; i <= num; i++) {
    result *= i;
  }

  return result;
};
