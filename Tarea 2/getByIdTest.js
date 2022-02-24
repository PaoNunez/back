const Contenedor = require('./main')

async function Executar() {
  const contenedor = new Contenedor("productos.txt")
  const resultado = await contenedor.getById(2)
  console.log(resultado)
}
Executar()