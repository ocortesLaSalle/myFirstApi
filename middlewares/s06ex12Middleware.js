const c = require('../config/constants');

module.exports.checkNumeric = (req, res, next) => {
  req.query.num = Number(req.query.num);
  if (!Number.isNaN(req.query.num)) {
    next();
  } else {
    res.status(c.status.badRequest).send({
      message: '"num" param must be numeric'
    });
  }
};

module.exports.checkGreater = (req, res, next) => {
  if (req.query.num >= 1) {
    next();
  } else {
    res.status(c.status.badRequest).send({
      message: '"num" param must be greater or equals than 1'
    });
  }
};

module.exports.checkString = (req, res, next) => {
  if (req.body.string === 'micajafuerte') {
    next();
  } else {
    res.status(c.status.badRequest).send({
      message: 'string missing'
    });
  }
};