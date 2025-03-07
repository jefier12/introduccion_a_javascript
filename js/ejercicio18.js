let promesa1 = new Promise((resolve) => {
    setTimeout(() => {
        console.log(" Promesa 1 resuelta");
        resolve("Resultado de la promesa 1");
    }, 1500);
});

let promesa2 = new Promise((resolve) => {
    setTimeout(() => {
        console.log(" Promesa 2 resuelta");
        resolve("Resultado de la promesa 2");
    }, 2500);
});

let promesa3 = new Promise((resolve) => {
    setTimeout(() => {
        console.log(" Promesa 3 resuelta");
        resolve("Resultado de la promesa 3");
    }, 3500);
});


Promise.all([promesa1, promesa2, promesa3])
    .then((resultados) => {
        console.log(" Todas las promesas se han resuelto:", resultados);
    });
