const router = require('express').Router;
const jwt = require('jsonwebtoken');
const util = require('../util');

export default ({ config, db }) => {
  const auth = router();

  auth.post('/login', (req, res, next) => {
    let isValid = true;
    const validationError = {
      name: 'ValidationError',
      errors: {},
    };

    if (!req.body.username) {
      isValid = false;
      validationError.errors.username = { message: 'Username is required!' };
    }
    if (!req.body.password) {
      isValid = false;
      validationError.errors.password = { message: 'Password is required!' };
    }

    if (!isValid) return res.json(util.successFalse(validationError));
    next();
  },
  (req, res, next) => {
    db.USR.findOne({ USR_ID: req.body.username })
      .then((user) => {
        const userData = user.dataValues;

        if (!user || req.body.password !== userData.USR_PW) {
          return res.json(util.successFalse(null, 'Username or Password is invalid'));
        }

        const payload = {
          ...userData,
        };
        const secretOrPrivateKey = process.env.JWT_SECRET;
        const options = { expiresIn: 60 * 60 * 24 };

        jwt.sign(payload, secretOrPrivateKey, options, (err, token) => {
          if (err) {
            res.json(util.successFalse(err));
          } else {
            res.json(util.successTrue(token));
          }
        });
      })
      .catch(err => res.json(util.successFalse(err)));
  });

  auth.get('/me', util.isLoggedin, (req, res, next) => {
    db.USR.findById(req.decoded.USR_ID)
      .then((user) => {
        res.json(util.successTrue(user));
      })
      .catch((err) => {
        res.json(util.successFalse(err));
      });
  });

  auth.get('/refresh', util.isLoggedin, (req, res, next) => {
    db.USR.findById(req.decoded.USR_ID)
      .then((user) => {
        const payload = {
          ...user.dataValues,
        };
        const secretOrPrivateKey = process.env.JWT_SECRET;
        const options = { expiresIn: 60 * 60 * 24 };

        jwt.sign(payload, secretOrPrivateKey, options, (err, token) => {
          if (err) {
            res.json(util.successFalse(err));
          } else {
            res.json(util.successTrue(token));
          }
        });
      });
  });

  return auth;
};
