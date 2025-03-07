const reglas = {
    numero: (valor) => !isNaN(valor),
    texto: (valor) => /^[a-zA-Z]+$/.test(valor),
    email: (valor) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor),
    fecha: (valor) => !isNaN(Date.parse(valor))
};

const handler = {
    set(obj, prop, value) {
        if (typeof value === "string") value = value.trim();
        
        let tipo = obj.tipos[prop];
        if (tipo && !reglas[tipo](value)) {
            console.error(`Error: '${value}' no es válido para '${prop}' (debe ser ${tipo}).`);
            return false;
        }
        
        obj[prop] = value;
        console.log(`Asignado: '${value}' en '${prop}'.`);
        return true;
    }
};

const datos = new Proxy({ tipos: { edad: "numero", nombre: "texto", correo: "email", nacimiento: "fecha" } }, handler);

datos.edad = 30;
datos.edad = "abc";
datos.nombre = "Juan";
datos.nombre = "123";
datos.correo = "juan@mail.com";
datos.correo = "correo-invalido";
datos.nacimiento = "2000-01-01";
datos.nacimiento = "ayer";
  