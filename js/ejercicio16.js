
const obtenerDatos = async () => {
    const respuesta = await fetch('../js/json/ejercicio16.json'); 
    const datos = await respuesta.json(); 
    return datos;
};

obtenerDatos().then(datos => {
    const filtrados = datos.usuarios.filter(usuario => usuario.nombre.startsWith("A"));
    console.log('Usuarios cuyo nombre empieza con "A":', filtrados);
});