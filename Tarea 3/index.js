const Contenedor = require('./main');
const express = require('express');
const app = express();

app.get('/productos', async (req, res) => {
  const contenedor = new Contenedor('productos.txt');

  const productos = await contenedor.getAll();

  res.send(productos);
});
app.get('/randomProduct', async (req, res) => {
  const contenedor = new Contenedor('productos.txt');

  const productos = await contenedor.getAll();

  const random = Math.floor(Math.random() * productos.length);

  res.send(productos[random]);
});

app.listen(8080, () => {
  console.log('servidor escuchando en puerto 8080')
});