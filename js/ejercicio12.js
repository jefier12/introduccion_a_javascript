async function operacionAsincronica() {
    await new Promise(resolver => setTimeout(resolver, 1000));
    return "Operación completada";
}

operacionAsincronica().then(console.log);
