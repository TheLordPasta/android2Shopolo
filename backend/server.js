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
    methods: "GET,POST,DELETE",
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
    const username = user.username;

    const [dbUser, orders] = await Promise.all([
      User.findOne({ username }).lean(),
      Order.find({ username }).lean(),
    ]);
    res.send({ status: "ok", data: { ...dbUser, orders } });
  } catch (error) {
    console.error(error);
    res.send({ status: "error", data: error });
  }
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

app.delete("/product/:id", (req, res) => {
  const { id } = req.params;
  Product.deleteOne({ id })
    .then((product) => res.json({ status: "ok" }))
    .catch((err) => res.status(400).json("Error: " + err));
});

// New route to handle order submission and save it to MongoDB
app.post("/submitOrder", async (req, res) => {
  const { token, orderData } = req.body;

  let username;
  try {
    const user = jwt.verify(token, JWT_SECRET);
    username = user.username;
  } catch {
    return res.sendStatus(401);
  }
  const user = await User.findOne({ username });
  if (!user) res.sendStatus(401);

  const newOrder = new Order(orderData); // Assuming req.body contains order data
  const products = await Product.find({
    name: { $in: newOrder.products.map((p) => p.name) },
  })
    .select({
      name: 1,
      category: 1,
      description: 1,
      image: 1,
      price: 1,
    })
    .lean();

  newOrder.totalPrice = products.reduce((acc, cur) => acc + cur.price, 0);
  newOrder.products = products;
  newOrder.username = username;
  newOrder.email = user.email;
  newOrder.orderDate = new Date();

  try {
    await newOrder.save();
    res.status(201).json(order);
  } catch {
    res.status(400).json("Error: " + err);
  }
});
