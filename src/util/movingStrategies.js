const DIRECTIONS = require("../const/directions");
const moveRight = (currCoordinates) => {
  let currDir = DIRECTIONS[currCoordinates.direction];
  currCoordinates.direction = currDir.next;
  return currCoordinates;
};

module.exports = {
  moveRight,
};
