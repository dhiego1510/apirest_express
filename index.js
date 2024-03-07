const express = require('express');
const app = express();
const port = 3000;
const { faker } = require('@faker-js/faker')

app.get('/', (req, res) => {
  res.send('Hello my server in express');
})

app.get('/new-enpoint', (req, res) => {
  res.send('Hello, new endpoint!');
})

app.get('/users', (req, res) => {
  const { limit, offset } = req.query;
  if (limit && offset) {
    res.json({
      limit,
      offset
    });
  } else {
    res.send('there are no parameters');
  }
})// Esto son parametros tipo query, sus nombres son limit y offset , si existen devolvemos el valor sino decimos que no se encontraron parametros

app.get('/products', (req, res) => {
  const products = [];
  const { size } = req.query;
  const limit = size || 10;

  for (let i = 0; i < limit; i++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl()
    })

  }
  res.json(products);
})

app.get('/products/filter', (req, res) => {
  res.send('I am a filter')
}) // Este es un edpoint especifico

// --------------Todo lo que sea especifico tiene que ir antes de lo que sesa dinamico---------------//
app.get('/products/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'laptop',
    price: 100
  })
}) // Este es un edpoint dinamico


app.get('/categories/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;
  res.json({
    categoryId,
    productId,
  });
})

app.listen(port, () => {
  console.log('Mi port ' + port);
})
