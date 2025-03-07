const target = { nombre: "Juan", edad: 25 };

const handler = {
  get(obj, prop) {
    console.log('Accediendo a la propiedad: ${prop}');
    return prop in obj ? obj[prop] : "Propiedad no encontrada";
  },
  set(obj, prop, value) {
    if (prop === "edad" && typeof value !== "number") {
      console.log("La edad debe ser un número.");
      return false;
    }
    console.log('Modificando ${prop}: ${value}');
    obj[prop] = value;
    return true;
  }
};

const proxy = new Proxy(target, handler);

console.log(proxy.nombre);
proxy.edad = 30;            
proxy.edad = "treinta";    
console.log(proxy.direccion); 