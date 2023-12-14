function hideSelf() {
  // ваш код...
  const button = document.querySelector('[class="hide-self-button"]');
  button.addEventListener('click',() => {
    button.setAttribute("hidden", true);
  });
}
