

document.addEventListener('DOMContentLoaded', () => {
    crmDB();
})


function crmDB() {
    // Crear bd versión 1.0
    let crmDB = window.indexedDB.open('crm', 1);

    // Si hay un error
    crmDB.onerror = function() {
        console.log('Error al crear la bd');
    }

    // Si se creó bien
    crmDB.onsuccess = function() {
        console.log('Base de datos creada');
    }

    // Configuración de la bd
    crmDB.onupgradeneeded = function() {
        console.log('Este método solo se ejecuta una vez.');
    }

}