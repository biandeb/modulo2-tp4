'use strict'

/* 2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
Una propiedad titular con el valor "Alex".
Una propiedad saldo, teniendo como valor inicial 0.
Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
Un método extraer() que permita retirar la cantidad pasada como parámetro.
Un método informar() que retorne la información del estado de la cuenta. 

Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.
*/


const cuenta = {
  //propiedades
  titular: "Alex",
  saldo: 0,
  //métodos
  ingresar(cantidad){
    if(cantidad > 0){
      this.saldo += cantidad;
      console.log(`Se ingresó ${cantidad} pesos al saldo actual, siendo el total del mismo: ${this.saldo}`);
    } else{
      console.log("Lo siento, la cantidad ingresada debe ser mayor que 0.");
    }
  },
  extraer(cantidad){
    if(cantidad > 0 && cantidad <= this.saldo){
      this.saldo -= cantidad;
      console.log(`Se extrajo ${cantidad} pesos al saldo actual, siendo el total del mismo: ${this.saldo}`);
    } else{
      console.log("El saldo actual es insuficiente");
    }
  },
  informar() {
    console.log(`El saldo de ${this.titular} es ${this.saldo} pesos`);
  }
};

// mostrar descripción inicial de la cuenta 
console.log("Descripción inicial de la cuenta:");
cuenta.informar();

// mostrar ingreso del dinero
cuenta.ingresar(550);

// mostrar la extracción del dinero
cuenta.extraer(150);

// mostrar la descripción final
console.log("Descripción final de la cuenta:");
cuenta.informar();







