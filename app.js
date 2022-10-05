const express = require("express");
const { mongoose } = require("mongoose");
const products = require("./routes/products");
const connectDB = require("./db/connect");
require("dotenv").config();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello Express!");
});

app.use("/api/v1/products", products);

// app.post('/api/v1/products')      - create a new product
// app.get('/api/v1/products')       - get all the products
// app.get('/api/v1/products/:id')   - get single product
// app.patch('/api/v1/products/:id') - update product
// app.delete('/api/v1/products/:id')    - delete product

const port = 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is listening on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};
start();
