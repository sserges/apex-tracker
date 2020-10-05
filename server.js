const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");

// Load env
dotenv.config({ path: "./config.env" });

const app = express();

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}!`,
  );
});
