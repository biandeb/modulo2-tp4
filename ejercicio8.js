'use strict'

/* Ejercicios adicionales:

8- Crea una clase llamada "Persona" que tenga las propiedades "nombre", "edad" y "profesión", y los métodos "saludar" y "despedirse". Luego, crea dos objetos de la clase "Persona" con diferentes valores para sus propiedades y llama a sus métodos "saludar" y "despedirse".

*/

class Persona{
    constructor(nombre, edad, profesion) {
        this.nombre = nombre;
        this.edad = edad;
        this.profesion = profesion;
    }
    saludar(){
        console.log(`Buenas tardes, ¿qué tal?. Me presento, mi nombre es ${this.nombre}, tengo ${this.edad} años y soy ${this.profesion}.`);
    }
    despedirse(){
        console.log(`¡Un gustazo en conocerte! Que tengas hermoso día.`);
    }
}

const persona1 = new Persona("Julián", 19, "estudiante");
const persona2 = new Persona("Martina", 28, "arquitecta");

persona1.saludar();
persona1.despedirse();
persona2.saludar();
persona2.despedirse();
