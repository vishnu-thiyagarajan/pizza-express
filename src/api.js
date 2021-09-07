const express = require("express");
const serverless = require("serverless-http");
const app = express();
const router = express.Router();
const cors = require("cors");

router.get("/", (req, res) => {
  res.json({
    hello: "hi!",
  });
});

router.get("/test", (req, res) => {
  res.json({
    test: "tested",
  });
});
app.use(
  cors({
    origin: "*",
  })
);
app.use("/.netlify/functions/api", router);

module.exports.handler = serverless(app);
