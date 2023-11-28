function showSalary(users, age) {
  // ваш код...
  let arr = users.filter((el) => el.age <= age).map((element) => {return element.name + ', ' + element.balance});
  let str = arr.join("\n")
  return str;
}
