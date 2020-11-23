const { getMoveStrategy } = require("../util/movingStrategyManager");
class Rover {
  /**
   * @param {object} initCoordinates
   * @param {number} initCoordinates.x
   * @param {number} initCoordinates.y
   * @param {string} initCoordinates.direction
   * @param {function} moveStrValidator
   */
  constructor(initCoordinates, moveStrValidator) {
    this.coordinates = initCoordinates;
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
      let moveStrategy = getMoveStrategy(char);
      moveStrategy(this.coordinates);
    }
    return this.coordinates;
  }
}

module.exports = Rover;
