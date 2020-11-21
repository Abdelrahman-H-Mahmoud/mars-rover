const DIRECTIONS = require("../const/directions");
const moveRight = (currCoordinates) => {
  let currDir = DIRECTIONS[currCoordinates.direction];
  currCoordinates.direction = currDir.next;
  return currCoordinates;
};

const moveLeft=(currCoordinates)=>{
  let currDir = DIRECTIONS[currCoordinates.direction];
  currCoordinates.direction = currDir.prev;
  return currCoordinates;
}

module.exports = {
  moveRight,
  moveLeft
};
