const carrito = [
    { nombre: 'Monitor', precio: 500},
    { nombre: 'Televisor', precio: 700},
    { nombre: 'Tablet', precio: 200}
];


 // los dos son lo mismo
// const resultado = carrito.filter( producto => {
//     return producto.precio > 400;
// });

// console.log(resultado);

const mayor400 = producto => {
    return producto.precio > 400;
}

const resultado = carrito.filter(mayor400);
console.log(resultado);