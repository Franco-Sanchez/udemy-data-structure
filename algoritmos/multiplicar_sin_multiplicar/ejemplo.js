const multiplicationV1 = (num1, num2) => {
  let result = 0;

  if(num1 === 0 || num2 === 0) {
    return result;
  }

  if(num1 < 0 && num2 < 0) {
    if(num1 > num2 || num1 === num2) {
      result = calculateNegativeV1(num2, num1, 0);
    } else {
      result = calculateNegativeV1(num1, num2, 0);
    }
    return result;
  }

  if(num1 > num2 || num1 === num2) {
    result = calculatePositiveV1(num2, num1, 0);
  } else {
    result = calculatePositiveV1(num1, num2, 0);
  }
  return result; 
};


const calculatePositiveV1 = (num1, num2, value) => {
  for(let i = 1; i <= num2; i++) {
    value += num1;
  }
  return value;
};


const calculateNegativeV1 = (num1, num2, value) => {
  for(let i = -1; i >= num2; i--) {
    value += num1;
  }
  return value;
};


// solución profe

const multiplicationV2 = (num1, num2) => {
  let result = 0;

  while(num1) {
    num1--;
    result += num2;
  }
  return result;
};


multiplicationV1(8, -10);
multiplicationV1(10, 10);
multiplicationV1(12, 4);
multiplicationV1(-10, -5);
multiplicationV1(0, -20);