const contiene = (el, input) => {
  if (el === input) return true;
  if (!validation(el)) return false;

  const arrOfValues = Object.values(el);

  // validate if the object is empty
  if (!arrOfValues.length) return false;

  let result;

  for (let i = 0; i < arrOfValues.length; i++) {
    result = contiene(arrOfValues[i], input);
    if (result === true) break;
  }

  return result;
};

const validation = (obj) => typeof obj === "object" && !Array.isArray(obj);

// Tests

const objetoAnidado = {
  data: {
    informacion: {
      alguna: {
        cosa: {
          muy: {
            anidada: {
              numeroMagico: 33,
              otraCosa: "foo2",
            },
          },
        },
        otraCosa: {
          noTanAnidada: 55,
        },
      },
    },
  },
};

console.log(contiene(objetoAnidado, 33)); // true
console.log(contiene(objetoAnidado, "foo2")); // true
console.log(contiene(objetoAnidado, "foo")); // false
console.log(contiene(objetoAnidado, 55)); // true
console.log(contiene(objetoAnidado, 80)); // false
