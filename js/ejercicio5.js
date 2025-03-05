let arreglo = [2,-6,6,7,-9,-12];
let nuevo = [];

const callback = (x) => {
  if (arreglo[i] == 0) {
    console.log(" el numero es 0")
  }
  if(arreglo[i] > 0){
    return push
  }
}

const map = (callback, arreglo) => { 
  for (let i = 0; i < arreglo.length; i++) {
    nuevo.push(callback(arreglo[i]));
  }
  return nuevo;
}
let respuesta = map(callback, arreglo);
console.log(arreglo)
console.log(respuesta);
