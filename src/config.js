const DIRECTIONS = require('./const/directions');

module.exports={
  server:{
    port:process.env.PORT || 3000
  },
  app:{
    initCoordinates:{
      x: 4,
      y: 2,
      direction: DIRECTIONS.EAST.value
    }
  }
}