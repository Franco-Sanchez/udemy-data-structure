const divisionV1 = (num1, num2) => {
  let result = 0;

  if (num1 === 0) {
    return result;
  } else if (num2 === 0) {
    return Infinity;
  }

  while (num1 >= num2) {
    result++;
    num1 -= num2;
  }
  return result;
};
