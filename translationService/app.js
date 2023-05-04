const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json()).use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:19006");
  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});

const port = process.env.PORT || 3000;

app.get("/", async (req, res) => {
  res.send("it works");
});

app.use("/locales", express.static("locales"));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
