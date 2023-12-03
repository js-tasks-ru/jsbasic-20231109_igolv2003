function makeFriendsList(friends) {
  // ваш код...
  const list = document.createElement("ul");
  friends.forEach(element => {
      let li = document.createElement("li");
      li.innerHTML = element.firstName + ' ' + element.lastName;
      list.append(li);
  });

  return list
};
