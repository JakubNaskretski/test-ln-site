var slideIndex = 1;
showSlides(slideIndex);
window.onscroll = function() {
  scrollFunction1();
  scrollFunction2();
}

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// // on click slides
// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
// }

// automatic Slideshow
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}

function scrollFunction1() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("mySlides").style.fontSize = "30px";
  } else {
    document.getElementById("mySlides").style.fontSize = "90px";
  }
}

function scrollFunction2() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("mySlides").setAttribute(
    "style","height: 50%; width: 50%; background: center;  margin-left: auto; margin-right: auto; opacity: 0.2");
  } else {
    document.getElementById("mySlides").setAttribute(
    "style","display: block; height: 100%; width: 100%; background: center; margin-left: auto; margin-right: auto; opacity: 0.5;");
  }
}
