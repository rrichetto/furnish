const headerEl = document.querySelector('.header');


// Header shrink upon scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    headerEl.style.padding = "1rem 0";
    headerEl.style.boxShadow = "0 1rem 1rem rgba(0, 0, 0, .1)";
  } else {
    headerEl.style.padding = "3rem 0";
    headerEl.style.boxShadow = "none";
  }
})