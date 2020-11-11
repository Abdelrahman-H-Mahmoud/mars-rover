class Rover {

  /**
   * @param {object} initCoordinates 
   * @param {function} strValidator 
   */
  constructor(initCoordinates, strValidator) {
    this.initCoordinates = initCoordinates;
    this.strValidator = strValidator;
  }
}

module.exports = Rover;