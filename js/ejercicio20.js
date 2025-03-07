
const procesarElemento = async (elemento) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(` Elemento procesado: ${elemento}`);
            resolve(`Resultado de ${elemento}`);
        }, 1000); 
    });
};

const elementos = ["A", "B", "C", "D", "E"];


const procesarLista = async () => {
    for (const elemento of elementos) {
        await procesarElemento(elemento); 
    }
    console.log(" Todos los elementos han sido procesados.");
};

procesarLista();
