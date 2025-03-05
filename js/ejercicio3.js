let arreglo = [2,4,6,7];
let nuevo = [];

let callback = (x) => { return x * 10; }

const map = (callback, arreglo) => { 
  for (let i = 0; i < arreglo.length; i++) {
    nuevo.push(callback(arreglo[i]));
  }
  return nuevo;
}

let respuesta = map(callback, arreglo);
console.log(arreglo)
console.log(respuesta);
