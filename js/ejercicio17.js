
const obtenerYManipularDatos = async () => {
    const respuesta = await fetch('../js/json/ejercicio17.json'); 
    const datos = await respuesta.json(); 
    
   
    const infoUsuarios = datos.usuarios.map(usuario => ({
        nombre: usuario.nombre,
        edad: usuario.edad
    }));

    console.log('Información específica de usuarios:', infoUsuarios);
};

// Llamar a la función
obtenerYManipularDatos();
