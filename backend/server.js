require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const Product = require("./models/product");
const User = require("./models/User");
const Order = require("./models/order");
const app = express();
const PORT = process.env.PORT;
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const JWT_SECRET = "lksafdoasfoww2123441() ``kfldf``~~~rkf////[]{}..,*&%$&!@";

// Middleware
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST",
    credentials: true,
  })
);
app.use(bodyParser.json());

// MongoDB connection
const mongoURI = process.env.MONGO_URL;
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Routes

//register an account and also save it in mongoDB
app.post("/signup", async (req, res) => {
  const { username, password, email } = req.body;
  const userType = "Normal";

  try {
    // Hash the password
    const encryptedPassword = await bcrypt.hash(password, 10);

    // Check if user exists by email
    const oldUserEmail = await User.findOne({ email });
    if (oldUserEmail) {
      return res.status(400).json({ message: "Email already in use!" });
    }

    // Check if user exists by username
    const oldUserName = await User.findOne({ username });
    if (oldUserName) {
      return res.status(400).json({ message: "Username already in use!" });
    }

    // Create and save new user
    const newUser = new User({
      username,
      password: encryptedPassword,
      email,
      userType,
    });
    const savedUser = await newUser.save();
    res.status(201).json(savedUser); // Use 201 for successful creation
  } catch (err) {
    console.error("Error signing up user:", err); // Log error for debugging
    res.status(500).json({ status: "error", message: "Internal Server Error" });
  }
});

//login user
app.post("/signin", async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ message: "User Not Found!" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid Password" });
    }

    const token = jwt.sign({ username: user.username }, JWT_SECRET, {
      expiresIn: "30 days",
    });

    res.json({ token });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

//get logged-in-user data
app.post("/userData", async (req, res) => {
  const { token } = req.body;
  try {
    const user = jwt.verify(token, JWT_SECRET);
    const userName = user.username;
    await User.findOne({ username: userName })
      .then((data) => {
        res.send({ status: "ok", data: data });
      })
      .catch((error) => {
        res.send({ status: "error", data: error });
      });
  } catch (error) {}
});

app.use(express.json());

//get all product to shopping from mongoDB
app.get("/getProducts", (req, res) => {
  Product.find()
    .then((products) => res.json(products))
    .catch((err) => {
      console.log("Error fetching products:", err);
      res.status(500).json({ message: "Failed to fetch products" });
    });
});

//add product to shopping and to mongoDB
app.post("/addProduct", (req, res) => {
  const { name, category, description, image, price } = req.body;
  const newProduct = new Product({ name, category, description, image, price });
  newProduct
    .save()
    .then((product) => res.json(product))
    .catch((err) => res.status(400).json("Error: " + err));
});

// New route to handle order submission and save it to MongoDB
app.post("/submitOrder", (req, res) => {
  const newOrder = new Order(req.body); // Assuming req.body contains order data
  newOrder
    .save()
    .then((order) => res.status(201).json(order)) // Use 201 for successful creation
    .catch((err) => res.status(400).json("Error: " + err));
});

//remove product to shopping and to mongoDB
