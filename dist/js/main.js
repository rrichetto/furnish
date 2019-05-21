const headerEl = document.querySelector('.header');


// Header shrink upon scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    headerEl.style.padding = "1rem 0";
  } else {
    headerEl.style.padding = "3rem 0";
  }
})