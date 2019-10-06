const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv').config();
const path = require('path');

const USERMONGO = process.env.USERMONGO;
const PASSMONGO = process.env.PASSMONGO;
const DBNAME = process.env.DBNAME;


const app = express();

mongoose.connect(`mongodb+srv://${USERMONGO}:${PASSMONGO}@${DBNAME}?retryWrites=true&w=majority`,
{ useNewUrlParser: true, useUnifiedTopology: true })

app.use(cors({origin:'http://localhost:3000'}));
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);

app.listen(3333, () => {
   console.log("Backend online...");
});