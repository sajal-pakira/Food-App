// dot env configuration
require("dotenv").config();

const express = require("express");
const colors = require("colors");
const cors = require("cors");
const morgan = require("morgan");
const connectDB = require("./config/db.config");

// console.log("MONGO_URI:", process.env.MONGO_URI);

//DB connection
connectDB();

//rest object
const app = express();

//middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

//routers
app.use("/api/v1/test", require("./routers/test.route"));
app.use("/api/v1/auth", require("./routers/auth.route"));
app.use("/api/v1/user", require("./routers/user.route"));
app.use("/api/v1/restaurant", require("./routers/restaurant.route"));

app.get("/", (req, res) => {
  return res.status(200).send("<h1>Sajal this side</h1>");
});
const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server is runnin at port ${port}`.white.bgMagenta);
});
