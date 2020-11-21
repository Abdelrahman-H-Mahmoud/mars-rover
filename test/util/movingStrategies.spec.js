const { expect } = require("chai");
const {
  moveRight,
  moveLeft,
  moveForward,
  moveBackward
} = require("../../src/util/movingStrategies");
const DIRECTIONS = require("../../src/const/directions");

describe("moving strategies", () => {
  describe("move right strategy", () => {
    let currCoordinates = {
      x: 4,
      y: 2,
      direction: DIRECTIONS.EAST.value,
    };
    it("should move right and the new direction is south", (done) => {
      moveRight(currCoordinates);
      expect(currCoordinates).to.have.own.property("direction");
      expect(currCoordinates.direction).to.equal(DIRECTIONS.SOUTH.value);
      done();
    });
    it("should move right and the new direction is west", (done) => {
      moveRight(currCoordinates);
      expect(currCoordinates).to.have.own.property("direction");
      expect(currCoordinates.direction).to.equal(DIRECTIONS.WEST.value);
      done();
    });
    it("should move right and the new direction is north", (done) => {
      moveRight(currCoordinates);
      expect(currCoordinates).to.have.own.property("direction");
      expect(currCoordinates.direction).to.equal(DIRECTIONS.NORTH.value);
      done();
    });
    it("should move right and the new direction is east", (done) => {
      moveRight(currCoordinates);
      expect(currCoordinates).to.have.own.property("direction");
      expect(currCoordinates.direction).to.equal(DIRECTIONS.EAST.value);
      done();
    });
  });

  describe("move left strategy", () => {
    let currCoordinates = {
      x: 4,
      y: 2,
      direction: DIRECTIONS.EAST.value,
    };
    it("should move left and the new direction is north", (done) => {
      moveLeft(currCoordinates);
      expect(currCoordinates).to.have.own.property("direction");
      expect(currCoordinates.direction).to.equal(DIRECTIONS.NORTH.value);
      done();
    });
    it("should move left and the new direction is west", (done) => {
      moveLeft(currCoordinates);
      expect(currCoordinates).to.have.own.property("direction");
      expect(currCoordinates.direction).to.equal(DIRECTIONS.WEST.value);
      done();
    });
    it("should move left and the new direction is south", (done) => {
      moveLeft(currCoordinates);
      expect(currCoordinates).to.have.own.property("direction");
      expect(currCoordinates.direction).to.equal(DIRECTIONS.SOUTH.value);
      done();
    });
    it("should move left and the new direction is east", (done) => {
      moveLeft(currCoordinates);
      expect(currCoordinates).to.have.own.property("direction");
      expect(currCoordinates.direction).to.equal(DIRECTIONS.EAST.value);
      done();
    });
  });

  describe("move forward strategy", () => {
    it("should move forward in x direction case east", (done) => {
      let currCoordinates = {
        x: 4,
        y: 2,
        direction: DIRECTIONS.EAST.value,
      };
      moveForward(currCoordinates);
      expect(currCoordinates.x).to.equal(5);
      done();
    });
    it("should move forward in x direction case west", (done) => {
      let currCoordinates = {
        x: 4,
        y: 2,
        direction: DIRECTIONS.WEST.value,
      };
      moveForward(currCoordinates);
      expect(currCoordinates.x).to.equal(5);
      done();
    });
    it("should move forward in y direction case north", (done) => {
      let currCoordinates = {
        x: 4,
        y: 2,
        direction: DIRECTIONS.NORTH.value,
      };
      moveForward(currCoordinates);
      expect(currCoordinates.y).to.equal(3);
      done();
    });
    it("should move forward in y direction case south", (done) => {
      let currCoordinates = {
        x: 4,
        y: 2,
        direction: DIRECTIONS.SOUTH.value,
      };
      moveForward(currCoordinates);
      expect(currCoordinates.y).to.equal(3);
      done();
    });
  });

  describe("move backward strategy",()=>{
    it("should move backward in x direction case east", (done) => {
      let currCoordinates = {
        x: 4,
        y: 2,
        direction: DIRECTIONS.EAST.value,
      };
      moveBackward(currCoordinates);
      expect(currCoordinates.x).to.equal(3);
      done();
    });
    it("should move backward in x direction case west", (done) => {
      let currCoordinates = {
        x: 4,
        y: 2,
        direction: DIRECTIONS.WEST.value,
      };
      moveBackward(currCoordinates);
      expect(currCoordinates.x).to.equal(3);
      done();
    });
    it("should move backward in y direction case north", (done) => {
      let currCoordinates = {
        x: 4,
        y: 2,
        direction: DIRECTIONS.NORTH.value,
      };
      moveBackward(currCoordinates);
      expect(currCoordinates.y).to.equal(1);
      done();
    });
    it("should move backward in y direction case south", (done) => {
      let currCoordinates = {
        x: 4,
        y: 2,
        direction: DIRECTIONS.SOUTH.value,
      };
      moveBackward(currCoordinates);
      expect(currCoordinates.y).to.equal(1);
      done();
    });
  });
});
