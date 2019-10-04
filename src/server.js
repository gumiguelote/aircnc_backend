const express = require('express');

const app = express();

app.get('/', (req, res) => {
   return res.send({message:"hello word"})
});

app.listen(3333, () => {
   console.log("Backend online...");
});