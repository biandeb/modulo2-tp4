'use strict'

/* 1- Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.

Output:
objeto.encender();
objeto.apagar()
auto encendido
El auto se apagó*/

let estado = prompt("Ingrese el estado del automóvil siendo apagado: false y encendido: true")

class auto {
  // propiedades o características
  constructor(color, marca, modelo){
    this.color = color;
    this.marca = marca;
    this.modelo = modelo;
    this.encendido = "false";
  }

  // métodos para permitir encender y apagar el auto
  encenderAuto(estado) {
    if (estado === this.encendido){
      console.log("Auto apagado");
      console.log("El auto se encendió");
    }
  } 

  apagarAuto(estado) {
    if (estado !== this.encendido){
      console.log("Auto encendido");
      console.log("El auto se apagó");
    }
  } 
}
// crear instancias del objeto auto
const miAuto = new auto("Lila", "Chevrolet", "Cruze");

console.log(miAuto)

miAuto.encenderAuto(estado);
miAuto.apagarAuto(estado); 