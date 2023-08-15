'use strict'

/* Ejercicios adicionales:

9- Crea una clase llamada "Animal" que tenga las propiedades "nombre" y "edad", y el método "emitirSonido". Luego, crea dos clases hijas llamadas "Perro" y "Gato" que hereden de "Animal" y tengan su propio método "emitirSonido". Finalmente, crea dos objetos, uno de la clase "Perro" y otro de la clase "Gato", y llama a sus métodos "emitirSonido" para verificar que cada animal emite el sonido adecuado. 

*/

class Animal{
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    emitirSonido(){
    }
}
// clase padre "animal" hereda/extiende a clase hija "gato"
class Gato extends Animal{
    constructor(nombre, edad) {
        // para que lo inicie de la clase padre
        super(nombre, edad);
    }
    emitirSonido(){
        console.log(`${this.nombre} al ser una gatita, maúlla. Y su edad es ${this.edad} años."`);
    }

}
class Perro extends Animal{
    constructor(nombre, edad) {
        super(nombre, edad);
    }
    emitirSonido(){
        console.log(`${this.nombre} al ser un perro, ladra. Y su edad es ${this.edad} años."`);
    }
}

const gato = new Gato("Patitas", 4);
const perro = new Perro("Pulguitas", 5);

gato.emitirSonido();
perro.emitirSonido();
