const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

//Importing the routes
const authRoutes = require("./routes/auth");
const postRoute = require("./routes/posts");

dotenv.config();

//Connect to MongoDB
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () => {
  console.log("Connected to DB");
});

//Middleware
app.use(express.json());

//Route middleware
app.use("/api/user", authRoutes);
app.use("/api/posts", postRoute);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
