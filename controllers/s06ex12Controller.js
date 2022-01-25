const c = require('../config/constants');

module.exports.ex1 = (req, res) => {
  const random = Math.floor(Math.random() * (req.query.num - 1)) + 1;

  res.status(c.status.ok).send({random});
};

module.exports.ex2 = (req, res) => {
  let arr = [2,4,8,9,7,3,5,6];
  arr = arr.map((el) => el * req.query.num);

  res.status(c.status.ok).send({arr});
};