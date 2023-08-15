'use strict'

/* 7- Nos piden realizar una agenda telefónica de contactos.
Un contacto está definido por un nombre y un teléfono. Se considera que un contacto es igual a otro cuando sus nombres son iguales.
Una agenda de contactos está formada por un conjunto de contactos. Se podrá crear de dos formas, indicando nosotros el tamaño o con un tamaño por defecto (10).

Los métodos de la agenda serán los siguientes:
aniadirContacto(Contacto): Añade un contacto a la agenda, sino la agenda no puede almacenar más contactos indicar por pantalla.
existeContacto(Contacto): indica si el contacto pasado existe o no.
listarContactos(): Lista toda la agenda
buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.
eliminarContacto(Contacto c): elimina el contacto de la agenda, indica si se ha eliminado o no por pantalla
agendaLlena(): indica si la agenda está llena.
huecosLibres(): indica cuántos contactos más podemos ingresar.

Crea un menú con opciones que serán seleccionadas por el usuario usando un prompt, las salidas de las operaciones seleccionadas por el usuario se pueden mostrar en pantalla y  por consola.

*/

class Contacto{
    constructor(nombre, telefono){
      this.nombre = nombre;
      this.telefono = telefono;
    }
  }
  
  class Agenda{
    constructor(tamano = 10){
      this.tamanoMaximo = tamano;
      this.contactos = [];
    }
  
    aniadirContacto(contacto){
      if (this.contactos.length <= this.tamanoMaximo){
        this.contactos.push(contacto);
        console.log('El contacto se ha agregado exitosamente');
      } else{
        console.log('Lo sentimos, no se ha podido agregar el contacto. Por favor, elimine algún contacto existente.');
      }
    }
  
    existeContacto(contacto){
      return this.contactos.some(c => c.nombre === contacto.nombre);
    }
  
    listarContactos(){
      console.log('Lista de contactos:');
      this.contactos.forEach(c => {
        console.log(`Nombre: ${c.nombre}, Teléfono: ${c.telefono}`);
      });
    }
  
    buscarContacto(nombre){
      const contactoEncontrado = this.contactos.find(c => c.nombre === nombre);
      if (contactoEncontrado){
        console.log(`Teléfono de ${nombre}: ${contactoEncontrado.telefono}`);
      } else {
        console.log(`No se encontró ningún contacto con el nombre ${nombre}.`);
      }
    }
  
    eliminarContacto(contacto){
      const index = this.contactos.findIndex(c => c.nombre === contacto.nombre);
      if (index !== -1){
        this.contactos.splice(index, 1);
        console.log('Contacto eliminado correctamente.');
      } else {
        console.log('No se encontró ningún contacto para eliminar.');
      }
    }
  
    agendaLlena(){
      return this.contactos.length >= this.tamanoMaximo;
    }
  
    huecosLibres(){
      return this.tamanoMaximo - this.contactos.length;
    }
  }
  const agenda = new Agenda();
  
  while(true){
    
}
  