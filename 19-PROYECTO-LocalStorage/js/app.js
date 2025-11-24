// Variables
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweets = [];


// Event Listeners
eventListeners();
function eventListeners() {
    formulario.addEventListener('submit', agregarTweet);
}



// Funciones
function agregarTweet(e) {
    e.preventDefault();

    // Textarea donde el usuario escribe
    const tweet = document.querySelector('#tweet').value;

    // Validación
    if (tweet === '') {
        mostrarError('Un Mensaje No Puede ir Vacío');

        return; // Evita que se ejecuten más líneas de código
    }

}

// Mostrar mensaje de error
function mostrarError(error) {
    const mensajeError = document.createElement('P');
    mensajeError.textContent = error;
    mensajeError.classList.add('error');

    // Insertarlo en el Contenido
    const contenido = document.querySelector('#contenido');
    contenido.appendChild(mensajeError);

    // Elimina la alerta después de 3s
    setTimeout(() => {
        mensajeError.remove();
    }, 3000);
}
