const Rover = require('../../src/services/rover');
const DIRECTIONS = require('../../src/const/directions');
const validateString = require('../../src/util/validateString');
const { expect } = require('chai');
describe("Validate Rover Service", () => {
  let rover = null;
  const initCoordinates = {
    x: 4,
    y: 2,
    direction: DIRECTIONS.EAST.value
  };

  beforeEach(function (done) {
    rover = new Rover(initCoordinates, validateString);
    done();
  });

  it("move=> Should return null if direction pattern wrong", () => {
    expect(rover.move("FBLCRX")).to.be.null;
  });

  it("move=> Should return direction Object if direction pattern correct", () => {
    expect(rover.move("FLFFFRFLB")).to.have.own.property('x');
    expect(rover.move("FLFFFRFLB")).to.have.own.property('y');
    expect(rover.move("FLFFFRFLB")).to.have.own.property('direction');
  });
});