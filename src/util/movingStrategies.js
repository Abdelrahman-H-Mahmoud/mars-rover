const DIRECTIONS = require("../const/directions");
const moveRight = (currCoordinates) => {
  let currDir = DIRECTIONS[currCoordinates.direction];
  currCoordinates.direction = currDir.next;
  return currCoordinates;
};

const moveLeft = (currCoordinates) => {
  let currDir = DIRECTIONS[currCoordinates.direction];
  currCoordinates.direction = currDir.prev;
  return currCoordinates;
};

const moveForward = (currCoordinates) => {
  let currDir = DIRECTIONS[currCoordinates.direction];
  currCoordinates[currDir.dir]++;
  return currCoordinates;
};
module.exports = {
  moveRight,
  moveLeft,
  moveForward,
};
