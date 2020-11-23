const {
  moveBackward,
  moveForward,
  moveLeft,
  moveRight,
} = require("./movingStrategies");

const mapStrategies={
  f:moveForward,
  b:moveBackward,
  l:moveLeft,
  r:moveRight
};

const getMoveStrategy=(moveChar)=>{
  return mapStrategies[moveChar.toLowerCase()];
}

module.exports={
  getMoveStrategy
}