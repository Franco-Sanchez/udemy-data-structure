const checkPal = (str) => {
  const transformedStr = str.toLowerCase().replace(/\s/g, "");
  const transformedStrReverted = transformedStr.split("").reverse().join("");
  return transformedStr === transformedStrReverted;
};

console.log(checkPal("allivessevilla"));
