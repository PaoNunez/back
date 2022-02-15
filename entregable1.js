//Declarar una clase Usuario
class Usuario {
  nombre;
  apellido;
  libros;
  mascotas;
  //atributos con constructor
  constructor(nombre, apellido, libros, mascotas) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = libros;
    this.mascotas = mascotas;
  }
  //ingresando metodos
  getFullName() {
    return `Soy ${this.nombre} ${this.apellido}, `
  }

  addMascota(mascota) {
    this.mascotas.push(mascota);

  }
  countMascotas() {
    return (this.mascotas).length
  }

  addBook(titulo, autor) {
    this.libros.push({ titulo, autor })
  }

  getBookNames() {
    const nombresLibros = this.libros.map(function (libro) {
      return libro.titulo
    })
    return nombresLibros
  }
}
const usuario = new Usuario('Paola', 'Nunez', [{ titulo: 'Crepusculo-La Saga', autor: 'Stephenie Meyer' }, { titulo: 'EL Codigo da Vinci ', autor: 'Dan Brown' }, { titulo: 'EL Alquimista', autor: 'Paulo Coelho' }], ['perro'])

console.log(usuario.getFullName())
console.log(usuario.countMascotas())
usuario.addMascota('gato')
console.log(usuario.countMascotas())
console.log(usuario.getBookNames())
usuario.addBook('Lo que el viento se llevo', 'Margaret Mitchell')
console.log(usuario.getBookNames())

