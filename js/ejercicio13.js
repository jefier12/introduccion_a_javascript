const miPromesa = new Promise((_, rechazar) => {
    setTimeout(() => {
        rechazar("Promise rechazada");
    }, 2000);
});

miPromesa
    .then(console.log)
    .catch(error => console.log("Error:", error));
