const filter = () => {
  let arreglo = [1, 4, 6, 984];
  let nuevo = [];
  for (let i = 0; i < arreglo.length; i++) { 
    if (arreglo[i] > 2) {
      nuevo.push(arreglo[i]);
    }
  }
  return nuevo;  
}

const map = (callback) =>{
  let dato = callback();
  for (let x = 0; x < dato.length; x++){
    console.log(dato[x]);
  }
}
map(filter);

