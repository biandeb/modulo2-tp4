'use strict'

/* Ejercicios adicionales:

10- crear una clase aeropuerto con las propiedades nombreAeropuerto y lista de aviones, esta clase deberá contener el método agregarAvion, el cual recibirá un objeto de tipo Avión, además de un método buscarAvion el cual recibirá el nombre de un avión y devolverá información en caso de encontrarlo, si no lo encontró indicar con un mensaje.
Por su parte los aviones tendrán las propiedades: nombre, capacidad, destino, lista de pasajeros. Los aviones tienen el método abordar el cual permite que un pasajero suba al avión solo si hay capacidad disponible en el mismo, caso contrario mostrar un mensaje que indique que el avión está lleno.

Crear un objeto de tipo aeropuerto llamado "Aeropuerto Internacional", crear 3 objetos aviones con diferentes destinos. Agregar los 3 aviones al aeropuerto, buscar un avión y usar el método abordar.

*/

// objeto avions
class Avion{
    constructor(nombre, capacidad, destino) {
        this.nombre = nombre;
        this.capacidad = capacidad;
        this.destino = destino;
        this.listaPasajeros = [];
    }

    abordar(pasajero) {
        if (this.listaPasajeros.length < this.capacidad) {
            this.listaPasajeros.push(pasajero);
            console.log(`${pasajero} ha abordado el avión ${this.nombre}.`);
        } else {
            console.log(`El avión ${this.nombre} está lleno. No se puede abordar a ${pasajero}.`);
        }
    }
}

// objeto aeropuerto
class Aeropuerto{
    constructor(nombreAeropuerto){
        this.nombreAeropuerto = nombreAeropuerto;
        this.listaAviones = [];
    }

    agregarAvion(avion){
        this.listaAviones.push(avion);
        console.log(`El avión ${avion.nombre} se ha agregado al aeropuerto ${this.nombreAeropuerto}.`);
    }

    buscarAvion(nombreAvion){
        const avionEncontrado = this.listaAviones.find(avion => avion.nombre === nombreAvion);
        if (avionEncontrado){
            console.log(`Información del avión ${avionEncontrado.nombre}:`);
            console.log(`Capacidad de pasajeros: ${avionEncontrado.capacidad}`);
            console.log(`Destino: ${avionEncontrado.destino}`);
            console.log(`Pasajeros a bordo: ${avionEncontrado.listaPasajeros}`);
        } else {
            console.log(`No hemos encontrado un avión nombrado:  ${nombreAvion}.`);
        }
    }
}

class PasajeroAv{
    constructor(nombre, apellido, edad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
}


const aeropuertoInter = new Aeropuerto("Aeropuerto Internacional");

const avion1 = new Avion("Vuelo1", 230, "Miami");
const avion2 = new Avion("Vuelo2", 110, "Argentina");
const avion3 = new Avion("Vuelo3", 300, "España");


aeropuertoInter.agregarAvion(avion1);
aeropuertoInter.agregarAvion(avion2);
aeropuertoInter.agregarAvion(avion3);

const Pasajero1 = new PasajeroAv ();


aeropuertoInter.buscarAvion("Vuelo2");
avion2.abordar("Pasajero1");
avion2.abordar("Pasajero2");
avion2.abordar("Pasajero3");


aeropuertoInter.buscarAvion("Vuelo3");
