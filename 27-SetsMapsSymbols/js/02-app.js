// WeakSet

const weakset = new WeakSet();

const cliente = {
    nombre: 'Facu',
    saldo: 100
}



weakset.add(cliente);

// console.log(weakset.has('nombre'));
// weakset.delete(cliente);

console.log(cliente.size);

console.log(weakset);