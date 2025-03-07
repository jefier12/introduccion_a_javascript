
const obtenerDatos = async () => {
    try {
        const respuesta = await fetch('../js/json/ejercicio21.json'); 
        if (!respuesta.ok) {
            throw new Error(`HTTP Error: ${respuesta.status}`);
        }
        const datos = await respuesta.json(); 
        console.log(" Datos obtenidos:", datos);
    } catch (error) {
        console.error(" Error al cargar el JSON:", error.message);
    }
};

obtenerDatos();
