const multiplicationV1 = (num1, num2) => {
  let result = 0;

  if (num1 === 0 || num2 === 0) {
    return result;
  }

  if (num1 < 0 && num2 < 0) {
    if (num1 > num2 || num1 === num2) {
      result = _calculateNegativeV1(num2, num1, 0);
    } else {
      result = _calculateNegativeV1(num1, num2, 0);
    }
    return result;
  }

  if (num1 > num2 || num1 === num2) {
    result = _calculatePositiveV1(num2, num1, 0);
  } else {
    result = _calculatePositiveV1(num1, num2, 0);
  }
  return result;
};

const _calculatePositiveV1 = (minor, bigger, value) => {
  for (let i = 1; i <= bigger; i++) {
    value += minor;
  }
  return value;
};

const _calculateNegativeV1 = (minor, bigger, value) => {
  for (let i = -1; i >= bigger; i--) {
    value += minor;
  }
  return value;
};
