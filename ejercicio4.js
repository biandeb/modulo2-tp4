'use strict'

/* 4- Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.*/

class producto{
    constructor(codigo, nombre, precio) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
    }

    verDatos(){
        console.log(`Código: ${this.codigo}`);
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Precio: ${this.precio}`);
    }
}

// crear instancias de producto
const prod1 = new producto("001", "Celular", 100000);
const prod2 = new producto("002", "Vestido", 30000);
const prod3 = new producto("003", "Anteojos", 50000);

// guardar instancias en un arreglo o array y mostrar por consola
const productosArreglo = [prod1, prod2, prod3];
console.log(productosArreglo)

// mostrar los valores de los objetos
productosArreglo.forEach(producto => {
    console.log("Los datos del producto son:");
    producto.verDatos();
});
