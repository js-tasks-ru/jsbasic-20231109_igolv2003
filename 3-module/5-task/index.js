function getMinMax(str) {
  // ваш код...
  let arr = str.split(' ').filter((el) => !isNaN(el)).map((el) => parseFloat(el));
  return {
    min: Math.min(...arr),
    max: Math.max(...arr),
  };

}
