// Explicit Binding

function persona (el1, el2) {
    console.log(`Mi nombre es ${this.nombre} y escucho ${el1} y ${el2}`);
}

const informacion = {
    nombre: 'Juan'
}

const musica = ['Heavy Metal', 'Rock'];

persona.call(informacion, musica[0], musica[1]);

persona.apply(informacion, musica);

const nuevaFn = persona.bind(informacion, musica[0], musica[1]);
nuevaFn();