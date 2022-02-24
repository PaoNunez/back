const Contenedor = require('./main');

async function Executar() {
  const contenedor = new Contenedor("productos.txt");
  const resultado = await contenedor.getAll();
  console.log(resultado);
}
Executar();