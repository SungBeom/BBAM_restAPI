const jwt = require('jsonwebtoken');

const util = {};

util.successTrue = data => ({
  success: true,
  message: null,
  errors: null,
  data,
});

util.successFalse = (err, msg) => ({
  success: false,
  message: (!err && !msg) ? 'data not found' : msg,
  errors: err ? util.parseError(err) : null,
  data: null,
});

util.parseError = (errors) => {
  const parsed = {};
  if (errors.name === 'ValidationError') {
    Object.keys(errors.errors).forEach((name) => {
      const validationError = errors.errors[name];
      parsed[name] = { message: validationError.message };
    });
  } else if (errors.code === '11000' && errors.errmsg.indexOf('username') > 0) {
    parsed.username = { message: 'This username already exists!' };
  } else {
    parsed.unhandled = errors;
  }
  return parsed;
};

// middlewares
util.isLoggedin = (req, res, next) => {
  const token = req.headers['x-access-token'];
  if (!token) {
    return res.json(util.successFalse(null, 'token is required!'));
  } else {
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.json(util.successFalse(err));
      } else {
        req.decoded = decoded;
        next();
      }
    });
  }
};

module.exports = util;
