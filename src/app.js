const express = require('express');
const app = express();
const stringValidator = require('./util/validateString');

const validateMiddleware = (req, res, next) => {
  if (stringValidator(req.params.movePattern)) {
    next();
  }
  return res.status(400).json({ message: "Invalid move pattern" });
}
app.get("/api/rover/:movePattern", validateMiddleware, validateMiddleware, (req, res) => {
});

app.listen(3000, () => {
  console.log("App is running");
})

module.exports = app;