const DIRECTIONS = require("../const/directions");
/**
 * @param {object} currCoordinates
 * @param {number} currCoordinates.x
 * @param {number} currCoordinates.y
 * @param {string} currCoordinates.direction
 */
const moveRight = (currCoordinates) => {
  let currDir = DIRECTIONS[currCoordinates.direction];
  currCoordinates.direction = currDir.next;
  return currCoordinates;
};

/**
 * @param {object} currCoordinates
 * @param {number} currCoordinates.x
 * @param {number} currCoordinates.y
 * @param {string} currCoordinates.direction
 */
const moveLeft = (currCoordinates) => {
  let currDir = DIRECTIONS[currCoordinates.direction];
  currCoordinates.direction = currDir.prev;
  return currCoordinates;
};

/**
 * @param {object} currCoordinates
 * @param {number} currCoordinates.x
 * @param {number} currCoordinates.y
 * @param {string} currCoordinates.direction
 */
const moveForward = (currCoordinates) => {
  let currDir = DIRECTIONS[currCoordinates.direction];
  currCoordinates[currDir.dir]++;
  return currCoordinates;
};

/**
 * @param {object} currCoordinates
 * @param {number} currCoordinates.x
 * @param {number} currCoordinates.y
 * @param {string} currCoordinates.direction
 */
const moveBackward = (currCoordinates) => {
  let currDir = DIRECTIONS[currCoordinates.direction];
  currCoordinates[currDir.dir]--;
  return currCoordinates;
};
module.exports = {
  moveRight,
  moveLeft,
  moveForward,
  moveBackward,
};
