'use strict'

/* 3-Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho, más los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área*/


class rectangulo{
    // propiedades
    constructor(alto, ancho){
        this.alto = alto;
        this.ancho = ancho;
    }
    // métodos - modificar prop
    modificoAlto(alto){
        this.alto = alto;
    }

    modificoAncho(ancho){
        this.ancho = ancho;
    }

    rectanguloPropiedades(){
        console.log(`El Alto del rectángulo es ${this.alto}`);
        console.log(`El Ancho del rectángulo es ${this.ancho}`);
    }

    calcularPerimRec(){
        return 2 * (this.alto + this.ancho);
    }
    calcularAreaRec(){
        return (this.alto * this.ancho);
    }
}

// creo instancia del objeto rectangulos, defino sus dimensiones
const miRec = new rectangulo(15, 5);

// muestro el valor de las propiedades iniciales
console.log("El valor de las propiedades iniciales:")
miRec.rectanguloPropiedades();

miRec.modificoAlto(6);

miRec.modificoAncho(12);

// muestro el valor final de propiedades
console.log("Propiedades modificadas: ");
miRec.rectanguloPropiedades();

console.log("Las dimensiones del rectángulo son ancho:", miRec.ancho,"y alto:", miRec.alto);
console.log("Perímetro es: ", miRec.calcularPerimRec());
console.log("Área es: ", miRec.calcularAreaRec());
