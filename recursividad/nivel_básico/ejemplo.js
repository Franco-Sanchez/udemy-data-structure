const countdown = (num) => {
  console.log(num);
  num > 0 ? countdown(num - 1) : console.log("BOOM!");
};

countdown(5);
