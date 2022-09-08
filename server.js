const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3001;

// parse the inputs
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

// allow for CORS
// app.use(cors());

// set up the general routing path
app.use("/news", require("./api.js"));

app.listen(PORT, "0.0.0.0", () => console.log("listening on the port ", PORT));

module.exports = app;
