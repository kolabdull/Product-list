const mongoose = require("mongoose");

// const connectionString = process.env.MONOG_URI
const connectDB = (url) => {
  return mongoose.connect(url, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;
