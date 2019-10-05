const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');


const app = express();

mongoose
.connect('mongodb+srv://usrmongo:usrmongo@clustermiguelote-gb3nk.mongodb.net/omnistack?retryWrites=true&w=majority',
{ useNewUrlParser: true, useUnifiedTopology: true })

app.use(express.json());
app.use(routes);

app.listen(3333, () => {
   console.log("Backend online...");
});