class Rover {

  /**
   * @param {object} initCoordinates 
   * @param {function} moveStrValidator 
   */
  constructor(initCoordinates, moveStrValidator) {
    this.initCoordinates = initCoordinates;
    this.moveStrValidator = moveStrValidator;
  }

  move(movePattern) {
    if (!this.moveStrValidator(movePattern)) {
      return null;
    }
    return this.initCoordinates;
  }
}

module.exports = Rover;