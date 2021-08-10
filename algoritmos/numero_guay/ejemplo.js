const isAGuayNumber = (num) => {
  if (num <= 0) return `${num} isn't a guay number.`;

  let sum = 0;
  for (let i = 1; i <= num / 2; i++) {
    sum += i;
    if (sum >= num) break;
  }

  if (num === sum) return `${num} is a guay number.`;

  return `${num} isn't a guay number.`;
};
