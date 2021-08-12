const myFirstArr = Array(6);
myFirstArr[0] = 10;
myFirstArr[1] = 20;
myFirstArr[2] = 30;
myFirstArr[3] = 40;
myFirstArr[4] = 50;
myFirstArr[5] = 60;

myFirstArr.forEach((element, i) =>
  console.log(`In the position ${i} the element is ${element}.`)
);

const target = 40;

myFirstArr.forEach(
  (element, i) =>
    element === target &&
    console.log(`The target ${target} is in the position ${i}.`)
);
