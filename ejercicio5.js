'use strict'

/* 5- Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
Para realizar este método tener en cuenta la siguiente tabla de generaciones:
esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
mostrarDatos: devuelve toda la información del objeto.
generaDNI(): genera un número aleatorio de 8 cifras.

*/

let generacion;

class Persona{
    constructor(nombre, edad, dni, sexo, peso, altura, anioNacim){
        this.nombre = nombre;
        this.edad = edad;
        this.dni = dni;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
        this.anioNacim = anioNacim;
    }

    mostrarGeneracion(){
        const generaciones ={
            generacionZ: "Generación Z (1994 - 2010)",
            generacionY: "Generación Millennials (1981 - 1993)",
            generacionX: "Generación X (1969 - 1980)",
            babyBoom: "Baby Boomers (1949 - 1968)",
            silentGeneracion: "Los niños de la posguerra (1930 - 1948)",
        };

        if (this.anioNacim >= 1994 && this.anioNacim <= 2010){
            generacion = generaciones.generacionZ;
        } else if (this.anioNacim >= 1981 && this.anioNacim <= 1993) {
            generacion = generaciones.generacionY;
        } else if (this.anioNacim >= 1969 && this.anioNacim <= 1980) {
            generacion = generaciones.generacionX;
        } else if (this.anioNacim >= 1949 && this.anioNacim <= 1968) {
            generacion = generaciones.babyBoom;
        } else if (this.anioNacim >= 1930 && this.anioNacim <= 1948) {
            generacion = generaciones.silentGeneracion;
        }

        console.log(`Generación: ${generacion}`);
    }

    esMayorDeEdad(){
        if (this.edad >= 18){
            console.log("La persona ya es mayor de edad.")
        } else {
            console.log("La persona no es mayor de edad.")
        }
    }

    mostrarDatos(){
        console.log("Datos personales");
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Edad: ${this.edad}`);
        console.log(`DNI: ${this.dni}`);
        console.log(`Sexo: ${this.sexo}`);
        console.log(`Peso: ${this.peso}`);
        console.log(`Altura: ${this.altura}`);
        console.log(`Año de nacimiento: ${this.anioNacim}`);
        this.mostrarGeneracion();
    }
}

const persona = new Persona("Bianca Deblinger", 26, "39976527", "M", 63, 1.64, 1996);
persona.mostrarDatos();
console.log(persona.esMayorDeEdad());