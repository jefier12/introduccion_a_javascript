let promesa1 = new Promise((resolve) => {
    setTimeout(() => {
        console.log(" Promesa 1 resuelta");
        resolve("Resultado de la promesa 1");
    }, 2000);
});

let promesa2 = new Promise((_, reject) => {
    setTimeout(() => {
        console.log(" Promesa 2 rechazada");
        reject("Error en la promesa 2");
    }, 3000);
});

let promesa3 = new Promise((resolve) => {
    setTimeout(() => {
        console.log(" Promesa 3 resuelta");
        resolve("Resultado de la promesa 3");
    }, 1000);
});

// Usamos Promise.allSettled() para manejar todas las promesas sin importar su estado
Promise.allSettled([promesa1, promesa2, promesa3])
    .then((resultados) => {
        console.log(" Estado de todas las promesas:", resultados);
    });
