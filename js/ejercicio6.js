let arreglo = [2, 4, 6, 7];

let callback = (x) => { return x % 2 === 0; } 

const some = (callback, arreglo) => { 
  for (let i = 0; i < arreglo.length; i++) {
    if (callback(arreglo[i])) {
      return true;
    }
  }
  return false;
}

let respuesta = some(callback, arreglo);
console.log(respuesta);