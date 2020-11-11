const DIRECTIONS = require('../const/directions');
class Rover {

  /**
   * @param {object} initCoordinates 
   * @param {function} moveStrValidator 
   */
  constructor(initCoordinates, moveStrValidator) {
    this.initCoordinates = initCoordinates;
    this.moveStrValidator = moveStrValidator;
  }

  /**
   * 
   * @param {string} movePattern 
   */
  move(movePattern) {
    if (!this.moveStrValidator(movePattern)) {
      return null;
    }
    for (let i = 0; i < movePattern.length; i++) {
      const char = movePattern[i];
      let currDir = null;
      switch (char) {
        case "F":
        case "f":
          currDir = DIRECTIONS[this.initCoordinates.direction];
          this.initCoordinates[currDir.dir]++;
          break;
        case "B":
        case "b":
          currDir = DIRECTIONS[this.initCoordinates.direction];
          this.initCoordinates[currDir.dir]--;
          break;
        case "L":
        case "l":
          currDir = DIRECTIONS[this.initCoordinates.direction];
          this.initCoordinates.direction = currDir.prev;
          break;
        case "R":
        case "r":
          currDir = DIRECTIONS[this.initCoordinates.direction];
          this.initCoordinates.direction = currDir.next;
          break;
      }
    }
    return this.initCoordinates;
  }
}

module.exports = Rover;