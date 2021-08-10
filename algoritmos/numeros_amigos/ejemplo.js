const areNumbersFriends = (num1, num2) => {
  if (num1 <= 0 || num2 <= 0) return `${num1} and ${num2} aren't numbers friends`;

  let sumOfDivisorsOfTheFirstNumber = 0;

  for (let i = 1; i <= num1 / 2; i++) {
    if (num1 % i === 0) sumOfDivisorsOfTheFirstNumber += i;
  }

  if (sumOfDivisorsOfTheFirstNumber === num2) {
    let sumOfDivisorsOfTheSecondNumber = 0;

    for (let i = 1; i <= num2 / 2; i++) {
      if (num2 % i === 0) sumOfDivisorsOfTheSecondNumber += i;
    }

    if (sumOfDivisorsOfTheSecondNumber === num1) return `${num1} and ${num2} are numbers friends`;
  }

  return `${num1} and ${num2} aren't numbers friends`;
};

areNumbersFriends(220, 284);
