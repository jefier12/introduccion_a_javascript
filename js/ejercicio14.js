function promesa(numero, tiempo) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(numero);
        }, tiempo);
    });
}

promesa(5, 1000)
    .then((num1) => {
        console.log(`Número 1: ${num1}`);
        return promesa(15, 1000);
    })
    .then((num2) => {
        console.log(`Número 2: ${num2}`);
        return promesa(25, 1000);
    })
    .then((num3) => {
        console.log(`Número 3: ${num3}`);
        const suma = num1 + num2 + num3;
        console.log(`La suma de los resultados es: ${suma}`);
    });