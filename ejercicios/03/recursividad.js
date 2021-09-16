/* 
Crear una función que busque el valor de la llave pasada como segundo argumento
dentro del objeto pasado como primer argumento, si la llave no es válida regresa null.
Esto sin usar más de 2 loops anidados.
*/

const search = (obj, key) => {
  if (typeof obj !== "object" || Array.isArray(obj)) return null;
  if (obj[key]) return obj[key];

  const arrOfKeys = Object.keys(obj);

  if(!arrOfKeys.length) return null; 

  let value;

  for (let i = 0; i < arrOfKeys.length; i++) {
    value = search(obj[arrOfKeys[i]], key);
    if (value) break;
  }

  return value;
};

const obj = {
  a: { b: 1 },
  c: 2,
  d: { e: { f: 3 } },
  g: {}
};

console.log(search(obj, "a")); // {b : 1}
console.log(search(obj, "b")); // 1
console.log(search(obj, "c")); // 2
console.log(search(obj, "d")); // {e: {f: 3}}
console.log(search(obj, "e")); // {f: 3}
console.log(search(obj, "f")); // 3
console.log(search(obj, "h")); // null
