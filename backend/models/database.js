const dotenv = require("dotenv").config(); // import du fichier .env
const bcrypt = require("bcrypt");
const cryptoJS = require("crypto-js");
// Connection on data base MongoDB with mongoose.connect
const mongoose = require("mongoose"); // import de mongoose
const User = require("./User");

mongoose
  .connect(process.env.MONGODB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connexion Database réussie !");
    User.findOne({ admin: true })
      .then(async (_admin) => {
        if (_admin == null) {
          const adminPassword = await bcrypt.hash("admin", 10);
          const user = new User({
            pseudo: "Administrateur Groupomania",
            password: adminPassword,
            admin: true,
            email: cryptoJS.enc.Base64.stringify(
              cryptoJS.SHA512(
                process.env.CRYPTO_SECRET_KEY + "Admin@groupomania.com"
              )
            ),
          });
          user
            .save()
            .then(() => console.log("admin crée"))
            .catch(() =>
              console.log("Echec lors de la création d'un administrateur")
            );
        } else {
          console.log("Un admin existe déja");
        }
      })
      .catch(async () => {});
  })
  .catch(() => console.log("Connexion Database échouée !"));
