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
let index = 0;

setInterval(slideShow, 7500);

function slideShow() {
  if (index < 2) {
    index++;
  } else {
    index = 0;
  }

  // Changes the slide
  slideEls.forEach((slide, currentIndex) => {
    if (currentIndex === index) {
      slide.style.display = "flex";
    } else {
      slide.style.display = "none";
    }
  })

  // Changes the active button
  buttonEls.forEach((button, currentIndex) => {
    if (currentIndex === index) {
      button.classList.add('slideshow__control-btn--active');
    } else {
      button.classList.remove('slideshow__control-btn--active');
    }
  })
}

// Event listener for click to change slide
document.addEventListener("click", e => {
  if (e.target.classList.contains("slideshow__control-btn")) {

    buttonEls.forEach(button => {
      button.classList.remove('slideshow__control-btn--active');
    });

    e.target.classList.add('slideshow__control-btn--active');

    index = Number(e.target.dataset.index);
    changeSlide(index);
  }
});

function changeSlide(index) {
  slideEls.forEach((slide, i) => {
    if (i === index) {
      slide.style.display = "flex";
    } else {
      slide.style.display = "none";
    }
  })
}