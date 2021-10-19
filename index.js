const express = require('express');
const app = express();
require('dotenv');

const myFirstController = require('./controllers/myFirstController');

// req = request
// res = response
app.post('/', myFirstController.helloWorld);

app.use('/api/v1/user', require('./routes/userRoutes'));

app.listen(process.env.PORT || 3000, () => {
  console.log('My First API running!');
});