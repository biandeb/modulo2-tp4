'use strict'

/* 6- Crear una clase Libro que contenga al menos las siguientes propiedades:
ISBN
Título
Autor
Número de páginas

Crear el método mostrarLibro() para mostrar la información relativa al libro con el siguiente formato:
“El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”

Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.
*/

class Libro{
    constructor(ISBN, titulo, autor, numPags, dimensiones){
      this.ISBN = ISBN;
      this.titulo = titulo;
      this.autor = autor;
      this.numPags = numPags;
      this.dimensiones = dimensiones;
    }
  
    mostrarLibro(){
      console.log(`El libro titulado ${this.titulo} con un ISBN: ${this.ISBN}, creado por el autor ${this.autor} tiene un total de ${this.numPags} páginas. Y sus dimensiones de ${this.dimensiones}.`);
    }
  }
  
  // dos nuevas instancias de libros

  const libro1 = new Libro("978-9585155633", "Escalofríos", "R. L. Stine", 240, "15x23cm");
  const libro2 = new Libro("978-8415709886", "Pesadillas", "R. L. Stine", 144, "15x23cm");
  
  console.log(libro1.mostrarLibro());
  console.log(libro2.mostrarLibro());
  
  // qué libro tiene más páginas

  if (libro1.numPags > libro2.numPags) {
    console.log("El libro titulado Escalofríos tiene más páginas.");
  } else if (libro2.numPaginas > libro1.numPags) {
    console.log("El libro titulado Pesadillas tiene más páginas.");
  } else {
    console.log("Ambos libros tienen la misma cantidad de páginas.");
  }
  
