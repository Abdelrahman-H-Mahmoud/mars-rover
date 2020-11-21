const {
  moveBackward,
  moveForward,
  moveLeft,
  moveRight,
} = require("./movingStrategies");

const mapStrategies={
  f:moveForward,
  F:moveForward,
  b:moveBackward,
  B:moveBackward,
  l:moveLeft,
  L:moveLeft,
  r:moveRight,
  R:moveRight
};

const getMoveStrategy=(moveChar)=>{
  return mapStrategies[moveChar];
}

module.exports={
  getMoveStrategy
}