self.onload() = () => {
    console.log('Ventana Lista');
}
window.nombre = 'Monitor';

const producto = {
    precio: 200,
    mostrarInfo: function() {
        return `El Producto: ${self.nombre}`;
    }
}

console.log(producto.mostrarInfo());