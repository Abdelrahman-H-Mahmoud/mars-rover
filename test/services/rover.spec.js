const Rover = require('../../src/services/rover');
const DIRECTIONS = require('../../src/const/directions');
const validateString = require('../../src/util/validateString');
describe("Validate Rover Service", () => {
  let rover = null;
  const initCoordinates = {
    x: 4,
    y: 2,
    direction: DIRECTIONS.EAST.value
  };
  beforeEach(function (done) {
    rover = new Rover(initCoordinates, validateString);
  });
});