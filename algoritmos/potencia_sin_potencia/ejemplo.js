const exponentiationV1 = (num1, num2) => {
  let result = 1;

  if ((num1 === 0 && num2 === 0) || num2 === 0) {
    return result;
  } else if (num1 === 0) {
    return 0;
  }

  while (num2) {
    num2--;
    result *= num1;
  }

  return result;
};
