document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
        console.log('Ejecuta funcion');
    } else {
        console.log('Pausar video');
    }
})