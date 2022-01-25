const c = require('../config/constants');

module.exports.factorial = (req, res) => {
  // if (req.query.num) {
    let result = 1;
    for (let i = req.query.num; i > 1; i--) {
      result *= i;
    }
    res.status(c.status.ok).send({result});
  // } else {
  //   res.status(c.status.badRequest).send({
  //     message: '"num" param missing'
  //   })
  // }
}