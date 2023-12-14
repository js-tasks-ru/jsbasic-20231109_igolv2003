function initCarousel() {
  // ваш код...
  const element = document.querySelector('[class="carousel__inner"]');
  const buttonRight = document.querySelector('[class$="carousel__arrow_right"]');
  const buttonLeft = document.querySelector('[class$="carousel__arrow_left"]');
  const slideWidth = element.querySelector('.carousel__slide').offsetWidth;
  let shift = 0;
  
  buttonLeft.style.display = 'none';
  
  buttonLeft.addEventListener('click', () => {
    shift +=slideWidth; 
    if(shift == 0) {
      buttonLeft.style.display = 'none';
    }
    if(shift != slideWidth * -3){
      buttonRight.style.display = '';
      }
    element.style.transform = 'translateX(' + shift + 'px)';
  });

  buttonRight.addEventListener('click', () => {
    shift -=slideWidth;
    if(shift != 0){
      buttonLeft.style.display = '';
    };
    if(shift == slideWidth * -3){
      buttonRight.style.display = 'none';
    }
    element.style.transform = 'translateX(' + shift + 'px)';
  });

}
