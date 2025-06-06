let slides = document.querySelectorAll('.review-slide');
let index = 0;

function showSlide(i) {
  slides.forEach(slide => slide.classList.remove('active'));
  slides[i].classList.add('active');
}

function changeSlide(direction) {
  index += direction;
  if (index < 0) index = slides.length - 1;
  if (index >= slides.length) index = 0;
  showSlide(index);
}

// Optional autoplay:
setInterval(() => changeSlide(1), 5000);

function brkDirections() {
window.open("https://www.google.com/maps/dir/?api=1&destination=Soul+Food+Caterers, 88 Kingston Ave, Brooklyn, NY 11213");

}
 
function qnsDirections () {
window.open("https://www.google.com/maps/dir/?api=1&destination=Queens+Soul+Food+Caterers, 9211 Guy R Brewer Blvd, Jamaica, NY 11433");

}

