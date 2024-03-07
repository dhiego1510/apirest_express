const express = require('express');
const routerApi = require('./routes/index');

const app = express();
const port = 3000;

app.use(express.json())
// Esto es un middleware

app.get('/', (req, res) => {
  res.send('Hello my server in express');
})
app.get('/new-enpoint', (req, res) => {
  res.send('Hello, new endpoint!');
})

routerApi(app)



app.listen(port, () => {
  console.log('Mi port ' + port);
})
