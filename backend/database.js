const dotenv = require("dotenv").config(); // import du fichier .env
const bcrypt = require("bcrypt");
const cryptoJS = require("crypto-js");
// Connection on data base MongoDB with mongoose.connect
const mongoose = require("mongoose"); // import de mongoose
const User = require("./models/User");

mongoose
  .connect(process.env.MONGODB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connexion Database réussie !");
    User.findOne({ admin: true })
      .then((_admin) => {
        if (_admin == null) {
          const adminPassword = bcrypt.hash(process.env.ADMIN_PASSWORD, 10);
          const user = new User({
            pseudo: process.env.ADMIN_PSEUDO,
            password: adminPassword,
            admin: true,
            email: cryptoJS.enc.Base64.stringify(
              cryptoJS.SHA512(
                process.env.CRYPTO_SECRET_KEY + process.env.ADMIN_EMAIL
              )
            ),
          });
          user
            .save()
            .then(() => console.log("Un compte Administrateur a été crée."))
            .catch(() =>
              console.log(
                "Echec lors de la création d'un compte Administrateur"
              )
            );
        } else {
          console.log("Un compte administrateur existe déjà.");
        }
      })
      .catch(async () => {});
  })
  .catch(() => console.log("Connexion Database échouée !"));
