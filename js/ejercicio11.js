const miPromesa = new Promise(cumplir => {
    setTimeout(() => {
        cumplir("Promesa resuelta");
    }, 3000);
});

miPromesa.then(mensaje => console.log(mensaje));
