const fs = require('fs').promises;
class Contenedor {
  constructor(nombreArchivo) {
    this.productos = [];
    this.rutaArchivo = './' + nombreArchivo //./productos.txt
  }
  async save(producto) {
    const resultado = await (await fs.readFile(this.rutaArchivo)).toString()
    if (resultado === '') {
      producto.id = 1
      this.productos.push(producto)

    } else {
      this.productos = JSON.parse(resultado)
      const size = this.productos.length
      const ultimoProducto = this.productos[size - 1];
      const ultimoId = ultimoProducto.id
      producto.id = ultimoId + 1
      this.productos.push(producto)
    }
    const array2string = JSON.stringify(this.productos, null, 2)
    await fs.writeFile(this.rutaArchivo, array2string)
    return producto.id

  }
  async getById(id) {
    const resultado = await (await fs.readFile(this.rutaArchivo)).toString()
    this.productos = JSON.parse(resultado)
    for (let i = 0; i < this.productos.length; i++) {
      if (this.productos[i].id === id) {
        return this.productos[i]
      }
    }
  }
  async getAll() {
    const resultado = await (await fs.readFile(this.rutaArchivo)).toString()
    this.productos = JSON.parse(resultado)
    return this.productos
  }
  async deleteById() {
    const productos = await this.getAll()
    const nuevaListaProductos = productos.filter(function (producto) {
      if (producto.id != id)
        return producto


    })
    const array2string = JSON.stringify(nuevaListaProductos, null, 2)
    await fs.writeFile(this.rutaArchivo, array2string)
  }
  async deleteAll() {
    await fs.writeFile(this.rutaArchivo, '')
  }
}

const producto1 = {
  title: 'producto 1',
  price: 10,
  thumbnail: 'thumbnail 1'
}

const contenedor = new Contenedor('productos.txt');
contenedor.save(producto1)