const jwt = require("jsonwebtoken");

const dotenv = require("dotenv").config();

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    req.token = jwt.verify(token, process.env.TOKEN_SECRET);

    if (req.body.userId && req.body.userId !== req.token.userId) {
      throw "Cet ID de l'utilisaeur ne correspond pas";
    } else {
      next();
    }
  } catch (error) {
    res.status(403).json({ error: "Requête non autorisée, Token non valide" });
  }
};
