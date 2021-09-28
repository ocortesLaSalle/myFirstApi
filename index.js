const express = require('express');
const app = express();

const myFirstController = require('./controllers/myFirstController');

// req = request
// res = response
app.get('/', myFirstController.helloWorld);

app.listen(3000, () => {
  console.log('My First API running!');
});