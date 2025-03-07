let arreglo = [2, 4, 6, 7];

let callback = (x) => { return x > 5; } 
const find = (callback, arreglo) => { 
  for (let i = 0; i < arreglo.length; i++) {
    if (callback(arreglo[i])) {
      return arreglo[i];
    }
  }
  return undefined; 
}

let respuesta = find(callback, arreglo);
console.log(respuesta);