const Contenedor = require('./main');

async function Executar() {
  const contenedor = new Contenedor("productos.txt");
  await contenedor.deleteById(1);
}
Executar();