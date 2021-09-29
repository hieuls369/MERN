const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const posts = require("./routers/posts");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.port || 5000;

const URI =
  "mongodb+srv://admin:HOe4pt2ArBI62N0d@cluster0.lumci.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

app.use(bodyParser.json({ limit: "30mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "30mb" }));
app.use(cors());

mongoose
  .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("err", err);
  });

app.use("/posts", posts);
