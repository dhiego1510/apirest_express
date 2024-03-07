const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
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

module.exports = router;
