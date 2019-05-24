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



// Show "Back to Top" button upon scroll
const returnBtnEl = document.querySelector('.btn-return');

window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    returnBtnEl.style.display = "flex";
  } else {
    returnBtnEl.style.display = "none";
  }
})



// Smooth Navigation Scrolling
$('.navigation__link, .btn-return').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 100
      },
      800
    );
  }
});



// Showcase Slideshow
const buttonEls = [...document.querySelectorAll('.slideshow__control-btn')];
const slideEls = [...document.querySelectorAll('.slideshow__slide')];
let index = 0;

setInterval(slideShow, 9000);

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



// Video Modal
const playVideoEl = document.querySelector('.testimonials__play-video');
const videoModalEl = document.querySelector('.video-modal');
const videoEl = document.querySelector('.video-modal__video');

playVideoEl.addEventListener('click', openVideoModal);
window.addEventListener('click', closeVideoModal);

function openVideoModal(e) {
  // Reset the 'src' in case it was previously closed (and thus the 'src' was removed)
  videoEl.setAttribute('src', 'https://www.youtube.com/embed/l8ccw7BMrMA');

  videoModalEl.style.display = "flex";
}

function closeVideoModal(e) {
  if (e.target === videoModalEl) {
    // Stop the video
    videoEl.setAttribute('src', '');

    videoModalEl.style.display = "none";
  }
}