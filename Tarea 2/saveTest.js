const Contenedor = require('./main');

const producto1 = {
  title: 'producto 2',
  price: 20,
  thumbnail: 'thumbnail 2'
};
const producto2 = {
  title: 'producto 2',
  price: 20,
  thumbnail: 'thumbnail 2'
};
const producto3 = {
  title: 'producto 3',
  price: 20,
  thumbnail: 'thumbnail 3'
};


async function Executar() {
  const contenedor = new Contenedor('productos.txt');
  const id1 = await contenedor.save(producto1);
  console.log(id1)
  const id2 = await contenedor.save(producto2);
  console.log(id2)
  const id3 = await contenedor.save(producto3);
  console.log(id3)
}

Executar()