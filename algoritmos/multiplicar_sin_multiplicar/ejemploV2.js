const multiplicationV2 = (num1, num2) => {
  let result = 0;

  while (num1) {
    num1--;
    result += num2;
  }
  return result;
};
