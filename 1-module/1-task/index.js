function factorial(n) {
  // ваш код...
  if (n === 0 || n === 1){
    return 1
  }
  for (var i = n - 1; i >= 1; i--) {
    n = n * i;
  }
  return n;
};

function factorial(num){
  if (num === 0 || num === 1){
    return 1;
  }
  result = num;
  while (num > 1) {
    num--;
    result *=num;
  }
  return result;
};
