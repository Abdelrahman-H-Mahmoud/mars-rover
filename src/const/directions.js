module.exports = {
  NORTH: {
    value: "NORTH",
    dir: "y",
    next:"EAST",
    prev:"WEST"
  },
  EAST: {
    value: "EAST",
    dir: "x",
    next:"SOUTH",
    prev:"NORTH"
  },
  SOUTH: {
    value: "SOUTH",
    dir: "y",
    next:"WEST",
    prev:"EAST"

  },
  WEST: {
    value: "WEST",
    dir: "x",
    next:"NORTH",
    prev:"SOUTH"
  }
}