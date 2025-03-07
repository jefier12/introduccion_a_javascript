const obtenerDatos = async () => { 
    try {
        const respuesta = await fetch('../js/json/ejercicio15.json'); 
        const datos = await respuesta.json(); 
        return datos;
    } catch (error) {
        console.error('Error al cargar el JSON:', error);
    }
};


obtenerDatos().then(datos => {
    console.log('Datos obtenidos con async/await:', datos);
}); 


