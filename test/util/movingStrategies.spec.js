const { expect } = require("chai");
const { moveRight, moveLeft } = require("../../src/util/movingStrategies");
const DIRECTIONS = require('../../src/const/directions');

describe("moving strategies",()=>{
  describe("move right strategy",()=>{
    let currCoordinates={
      x: 4,
      y: 2,
      direction: DIRECTIONS.EAST.value
    };
    it("should move right and the new direction is south",(done)=>{
      moveRight(currCoordinates);
      expect(currCoordinates).to.have.own.property('direction');
      expect(currCoordinates.direction).to.equal(DIRECTIONS.SOUTH.value);
      done();
    });
    it("should move right and the new direction is west",(done)=>{
      moveRight(currCoordinates);
      expect(currCoordinates).to.have.own.property('direction');
      expect(currCoordinates.direction).to.equal(DIRECTIONS.WEST.value);
      done();
    });
    it("should move right and the new direction is north",(done)=>{
      moveRight(currCoordinates);
      expect(currCoordinates).to.have.own.property('direction');
      expect(currCoordinates.direction).to.equal(DIRECTIONS.NORTH.value);
      done();
    });
    it("should move right and the new direction is east",(done)=>{
      moveRight(currCoordinates);
      expect(currCoordinates).to.have.own.property('direction');
      expect(currCoordinates.direction).to.equal(DIRECTIONS.EAST.value);
      done();
    });
  });
  describe("move left strategy",()=>{
    let currCoordinates={
      x: 4,
      y: 2,
      direction: DIRECTIONS.EAST.value
    };
    it("should move left and the new direction is north",(done)=>{
      moveLeft(currCoordinates);
      expect(currCoordinates).to.have.own.property('direction');
      expect(currCoordinates.direction).to.equal(DIRECTIONS.NORTH.value);
      done();
    });
  });
  
})