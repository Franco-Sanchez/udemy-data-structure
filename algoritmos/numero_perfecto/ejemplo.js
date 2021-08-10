const isAPerfectNumber = (n) => {
  if (n === 0) return false;

  let value = 0;
  for (let i = 1; i <= n / 2; i++) {
    if (n % i === 0) value += i;
  }

  if (value === n) return true;
  return false;
};

isAPerfectNumber(6);
isAPerfectNumber(28);
isAPerfectNumber(496);
isAPerfectNumber(8_128);
