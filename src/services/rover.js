const { getMoveStrategy } = require("../util/movingStrategyManager");
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
      let moveStrategy = getMoveStrategy(char);
      moveStrategy(this.initCoordinates);
    }
    return this.initCoordinates;
  }
}

module.exports = Rover;
