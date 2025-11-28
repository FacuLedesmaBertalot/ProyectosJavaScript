class Cliente {

    #nombre; // # hace la variable o la propiedad privada

    setNombre(nombre) {
        this.#nombre = nombre;
    }

    getNombre() {
        return this.#nombre;
    }
}

const juan = new Cliente('Juan', 300);
juan.setNombre('Juan');
console.log(getNombre());
// console.log(juan.#nombre);

