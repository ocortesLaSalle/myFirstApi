const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
const connect = require('./database/connect');

connect.createConnection();

app.use(cors());
app.use(express.json()); // Parseja bodies de json (ajax)
app.use(express.urlencoded({extended: true})); //Parseja bodies de form

// req = request
// res = response

app.use('/api/v1/user', require('./routes/userRoutes'));
app.use('/api/v1/s05ex3', require('./routes/s05ex3Routes'));
app.use('/api/v1/s06ex12', require('./routes/S06ex12Routes'));

app.listen(process.env.PORT || 3000, () => {
  console.log(`My First API running on port: ${process.env.PORT}`);
});