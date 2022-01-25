const express = require('express');
const router = express.Router();
const middle = require('../middlewares/s06ex12Middleware');
const contr = require('../controllers/s06ex12Controller');

router.get('/ex1',
  middle.checkNumeric,
  middle.checkGreater,
  contr.ex1
);

router.get('/ex2',
  middle.checkNumeric,
  middle.checkString,
  contr.ex2
);

module.exports = router;