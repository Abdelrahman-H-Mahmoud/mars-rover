const { expect } = require("chai");
const { moveRight } = require("../../src/util/movingStrategies");
const DIRECTIONS = require('../../src/const/directions');

describe("moving strategies",()=>{
  it("should move right and the new direction is south",(done)=>{
    let currCoordinates={
      x: 4,
      y: 2,
      direction: DIRECTIONS.EAST.value
    };
    let newCoordinates=moveRight(currCoordinates);
    expect(newCoordinates).to.have.own.property('direction');
    expect(newCoordinates.direction).to.equal(DIRECTIONS.SOUTH.value);
    done();
  })
})