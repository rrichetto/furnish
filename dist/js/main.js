// Header shrink upon scroll
const headerEl = document.querySelector('.header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    headerEl.style.padding = "1rem 0";
    headerEl.style.boxShadow = "0 1rem 1rem rgba(0, 0, 0, .1)";
  } else {
    headerEl.style.padding = "3rem 0";
    headerEl.style.boxShadow = "none";
  }
})


// Showcase Slideshow
const buttonEls = [...document.querySelectorAll('.slideshow__control-btn')];
const slideEls = [...document.querySelectorAll('.slideshow__slide')];

document.addEventListener("click", e => {
  if (e.target.classList.contains("slideshow__control-btn")) {

    buttonEls.forEach(button => {
      button.classList.remove('slideshow__control-btn--active');
    });

    e.target.classList.add('slideshow__control-btn--active');

    let index = Number(e.target.dataset.index);
    showSlide(index);
  }
});

function showSlide(index) {
  slideEls.forEach((slide, i) => {
    if (i === index) {
      slide.style.display = "flex";
    } else {
      slide.style.display = "none";
    }
  })
}



// ADD SET TIMOUT FUNCITON!!!