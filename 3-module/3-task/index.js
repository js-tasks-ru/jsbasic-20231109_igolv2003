function camelize(str) {
  // ваш код...
  let arr = str.split("-")
  let newArr  = arr.slice(1).map(element => element[0].toUpperCase() + element.slice(1));
  newArr.unshift(arr[0]);
  return newArr.join('');
}
