const express = require('express');
const app = express.Router()
const stringValidator = require('./util/validateString');
const Rover = require('./services/rover');
const {app:appConfig} = require('./config');


const garvis = new Rover({ ...appConfig.initCoordinates }, stringValidator)

const validateMiddleware = (req, res, next) => {
  if (stringValidator(req.params.movePattern)) {
    return next();
  }
  return res.status(400).json({ message: "Invalid move pattern" });
}
app.get("/rover/:movePattern", validateMiddleware, validateMiddleware, (req, res) => {
  const pattern = req.params.movePattern;
  return res.json(garvis.move(pattern));
});


module.exports = app;