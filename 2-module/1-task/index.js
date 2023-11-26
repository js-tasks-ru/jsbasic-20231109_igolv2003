function sumSalary(salaries) {
  // ваш код...
  let sum = Object.values(salaries).filter(v => typeof v ==='number' && isFinite(v)).reduce((a,b) => a + b, 0);
  console.log(sum);
  return sum;
}

