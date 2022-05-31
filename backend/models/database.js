const dotenv = require("dotenv").config(); // import du fichier .env

// Connection on data base MongoDB with mongoose.connect
const mongoose = require("mongoose"); // import de mongoose

mongoose
  .connect(process.env.MONGODB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));
