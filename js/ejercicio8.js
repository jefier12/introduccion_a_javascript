let arreglo = ["casa", "perro", "gato", "elefante"];

let callback = (x) => x.includes("o"); 

const findIndex = (callback, arreglo) => { 
  for (let i = 0; i < arreglo.length; i++) {
    if (callback(arreglo[i])) {
      return i;
    }
  }
  return undefined;
}

let respuesta = findIndex(callback, arreglo);
console.log(respuesta); 
