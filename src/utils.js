function createScale(x, inputMin, inputMax, outMin, outMax) {
    return ((x - inputMin) * (outMax - outMin)) / (inputMax - inputMin) + outMin;
  }
  
  export { createScale };
  