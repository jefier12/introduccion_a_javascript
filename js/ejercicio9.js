//9. ¿Cuál es el resultado del código a continuación?

let i = 0;

setTimeout(() => alert(i), 100); // ?

// asumimos que el tiempo para ejecutar esta función es > 100 ms
for (let j = 0; j < 100000000; j++) {
    i++;
}


//rta el resultado es de 10000000 Como el for toma más de 100 ms, 
// el setTimeout se ejecuta después de que i ya haya sido incrementado a 100000000.