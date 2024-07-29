require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const ProductModel = require('./models/products')
const app = express();
const PORT = process.env.PORT;

// Middleware
app.use(cors({
  origin: 'http://localhost:3000',
  methods: 'GET,POST',
  credentials: true
}));
app.use(bodyParser.json());

// MongoDB connection
const mongoURI = process.env.MONGO_URL;
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// User model
const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String,
});

const User = mongoose.model("User", UserSchema);

// Routes
app.post("/signup", (req, res) => {
  const { username, password, email } = req.body;
  const newUser = new User({ username, password, email });
  newUser
    .save()
    .then((user) => res.json(user))
    .catch((err) => res.status(400).json("Error: " + err));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use(express.json())

app.get('/getProducts', (req, res) => {
  ProductModel.find()
    .then(products => res.json(products))
    .catch(err => {
      console.log('Error fetching products:', err);
      res.status(500).json({ message: 'Failed to fetch products' });
    });
  });