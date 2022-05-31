const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cryptoJS = require("crypto-js");

const User = require("../models/User");
const dotenv = require("dotenv").config();

exports.signup = (req, res, next) => {
  bcrypt
    .hash(req.body.password, 10)
    .then((hash) => {
      const user = new User({
        email: cryptoJS.enc.Base64.stringify(
          cryptoJS.SHA512(process.env.CRYPTO_SECRET_KEY + req.body.email)
        ),
        password: hash,
      });
      user
        .save()
        .then(() => res.status(201).json({ message: "Utilisateur crée" }))
        .catch((error) => res.status(400).json({ error }));
    })
    .catch((error) => res.status(500).json({ error }));
};

exports.login = (req, res, next) => {
  User.findOne({
    email: cryptoJS.enc.Base64.stringify(
      cryptoJS.SHA512(process.env.CRYPTO_SECRET_KEY + req.body.email)
    ),
  })
    .then((user) => {
      if (!user) {
        return res.status(401).json({ error: "Utilisateur incorrecte" });
      }
      bcrypt
        .compare(req.body.password, user.password)
        .then((valid) => {
          if (!valid) {
            return res.status(401).json({ error: "mdp incorrecte" });
          }
          res.status(200).json({
            userId: user._id,
            token: jwt.sign({ userId: user._id }, process.env.TOKEN_SECRET, {
              expiresIn: "24h",
            }),
          });
        })
        .catch((error) => res.status(500).json({ error }));
    })
    .catch((error) => res.status((500).json(error)));
};
