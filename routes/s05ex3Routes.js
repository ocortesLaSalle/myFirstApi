const express = require('express');
const router = express.Router();

const controller = require('../controllers/s05ex3Controller');
const middleware = require('../middlewares/s05ex3Middleware');

router.get('/fact', 
  middleware.checkNumQueryParam,
  middleware.checkNumQueryInteger,
  controller.factorial
);


module.exports = router;