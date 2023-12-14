function toggleText() {
  // ваш код...;
  const button = document.querySelector('[class="toggle-text-button"]');
  const div = document.querySelector('[id="text"]');
  button.addEventListener('click', () => {
    if(div.getAttribute('hidden'))
    {
      div.removeAttribute('hidden');
    }
    else 
    {
      div.setAttribute('hidden', 'true');
    }
  });
}
