const express = require('express');
const app = express();
const stringValidator = require('./util/validateString');
const Rover = require('./services/rover');
const DIRECTIONS = require('./const/directions');

const initCoordinates = {
  x: 4,
  y: 2,
  direction: DIRECTIONS.EAST.value
};
const garvis = new Rover({ ...initCoordinates }, stringValidator)

const validateMiddleware = (req, res, next) => {
  if (stringValidator(req.params.movePattern)) {
    return next();
  }
  return res.status(400).json({ message: "Invalid move pattern" });
}
app.get("/api/rover/:movePattern", validateMiddleware, validateMiddleware, (req, res) => {
  const pattern = req.params.movePattern;
  return res.json(garvis.move(pattern));
});

app.listen(process.env.PORT || 3000, () => {
  console.log("App is running");
})

module.exports = app;