const cliente = {
    nombre: 'Facundo',
    saldo: 500
}

console.log(cliente);
console.log(typeof cliente);

function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

const juan = new Cliente('Juan', 500);
console.log(juan);
