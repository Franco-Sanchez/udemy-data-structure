const subtractionV2 = (num1, num2) => {
  let result = 0;

  if (num1 > num2) {
    result = _incrementValue(num1, num2, 0);
  } else if (num2 > num1) {
    result = _incrementValue(num2, num1, 0);
    return result * -1;
  }
  return result;
};

const _incrementValue = (bigger, minor, value) => {
  while (bigger > minor) {
    minor++;
    value++;
  }
  return value;
};
