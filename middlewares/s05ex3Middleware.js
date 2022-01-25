const c = require('../config/constants');

module.exports.checkNumQueryParam = (req, res, next) => {
  if (req.query.num) {
    next();
  } else {
    res.status(c.status.badRequest).send({
      message: '"num" param missing'
    });
  }
};

module.exports.checkNumQueryInteger = (req, res, next) => {
  req.query.num = Number(req.query.num);
  if (!Number.isNaN(req.query.num)) {
    if (Number.isInteger(req.query.num)) {
      next();
    } else {
      res.status(c.status.badRequest).send({
        message: '"num" param must be integer'
      });
    }
  } else {
    res.status(c.status.badRequest).send({
      message: '"num" param must be numeric'
    });
  }
};