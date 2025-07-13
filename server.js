const express = require("express");
const kevin = express();
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 4000;

kevin.use("/", (req, res) => {
  res.send(
    "Hello again Developer King Everrett! Your homePage route is working fine."
  );
});

kevin.listen(PORT, () => {
  console.log(
    `Server is running at PORT: ${PORT}, King Everrett. Everything is going according to plan!`
  );
});
