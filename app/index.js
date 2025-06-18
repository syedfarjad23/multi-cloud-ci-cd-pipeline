const express = require("express");
const os = require("os");

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send({
    message: "Hello from the Multi-Cloud App!",
    hostname: os.hostname(),
    environment: process.env.DEPLOY_ENV || "Local",
    timestamp: new Date(),
  });
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
