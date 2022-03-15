const { Router } = require('express');
const Contenedor = require('./Contenedor');

const router = Router();
const productsFile = new Contenedor('products.json');

router.get('/', async (req, res) => {
  try {
    const products = await productsFile.getAll();

    res.json(products);
  } catch (error) {
    console.log({ error });
    res.json(error);
  }
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const product = await productsFile.getById(parseInt(id));
    console.log(product);

    if (!product) {
      return res.json({ error: 'producto no encontrado' });
    }

    res.json(product);
  } catch (error) {
    console.log({ error });
    res.json(error);
  }
});

router.post('/', async (req, res) => {
  const { title, price, thumbnail } = req.body;

  console.log({ title, price, thumbnail });

  try {
    const product = await productsFile.save({
      title,
      price,
      thumbnail,
    });

    res.json(product);
  } catch (error) {
    console.log({ error });
    res.json(error);
  }
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { title, price, thumbnail } = req.body;

  try {
    const product = await productsFile.update(parseInt(id), {
      title,
      price,
      thumbnail,
    });

    res.json(product);
  } catch (error) {
    console.log({ error });
    res.json(error);
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const product = await productsFile.deleteById(parseInt(id));

    res.json(product);
  } catch (error) {
    console.log({ error });
    res.json(error);
  }
});

module.exports = router;