// Implicit Binding

const usuario = {
    nombre: 'Juan',
    edad: 20,
    informacion() {
        console.log(`Mi nombre es ${this.nombre} y mi edad es ${this.edad}`);
    },
    mascota: {
        nombre: 'Hook',
        edad: 2,
        informacion() {
            console.log(`Mi nombre es ${this.nombre} y mi edad es ${this.edad}`);
        }

    }
}

usuario.informacion();
usuario.mascota.informacion();