const mongoose = require("mongoose");
const colors = require("colors");
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(`Connected to Db ${mongoose.connection.host}`);
  } catch (error) {
    console.log("DB ERROR\n", error);
  }
};
module.exports = connectDB;