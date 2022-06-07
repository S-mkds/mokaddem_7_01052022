const express = require("express"); // import express
const app = express();
const cors = require("cors"); // import cors
const helmet = require("helmet"); // import de helmet
const mongoSanitize = require("express-mongo-sanitize"); // import de express mongo sanitize
const path = require("path"); // creation du path serveur

// import des routers
const userRoutes = require("./routes/user.router");
const postRoutes = require("./routes/post.router");
const commentRoutes = require("./routes/comment.router");

// Database
require("./models/database.js");

// Middleware
app.use(express.json());
// app.use(cors()); // CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options
// Helmet helps you secure your Express apps by setting various HTTP headers
app.use(mongoSanitize()); // middleware which sanitizes user-supplied data to prevent MongoDB Operator Injection.

// accés à l'API depuis n'importe quelle origine
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

// Routes
app.use("/api/auth", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/comment", commentRoutes);
app.use("/images", express.static(path.join(__dirname, "images")));

//test
app.post("/api/auth/signup", (req, res) => {
  console.log("Signup request:", req.body);
  res.send({ message: "Utilisateur: " });
});

module.exports = app;
