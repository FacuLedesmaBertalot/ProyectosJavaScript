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

    const tweetObj = {
        id: Date.now(),
        tweet          // tweet es igual a tweet: tweet
    }
    // Añadir al arreglo de tweets
    tweets = [...tweets, tweetObj];

    // Una vez agregado creamos HTML
    crearHTML();


    // Reiniciar el formulario
    formulario.reset();

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


// Muestra un listado de los tweets
function crearHTML() {

    limpiarHTML();

    if (tweets.length > 0) {
        tweets.forEach( tweet => {
            // Crear el HTML

            const li = document.createElement('LI');

            // Añadir el texto
            li.innerText = tweet.tweet;
            
            // insertarlo en HTML
            listaTweets.appendChild(li);

        });
    }
}


// Limpiar el HTML
function limpiarHTML() {
    while (listaTweets.firstChild) {
        listaTweets.removeChild(listaTweets.firstChild);
    }
}