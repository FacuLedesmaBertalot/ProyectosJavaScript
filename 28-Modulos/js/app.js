import { nombreCliente, ahorro, mostrarInformacion, tieneSaldo, Cliente } from "./cliente";

console.log(nombreCliente);
console.log(ahorro);
console.log(mostrarInformacion(nombreCliente, ahorro));

tieneSaldo(ahorro);

const cliente = new Cliente(nombreCliente, ahorro);

console.log(cliente.mostrarInformacion());