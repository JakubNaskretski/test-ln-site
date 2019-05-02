// var slideIndex = 1;
// showSlides(slideIndex);
//
// // Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }
//
// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }
//
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

var slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n) => {
clearInterval(myTimer);
this.showSLides(slideIndex +=n);
if (n = -1){
	myTimer = setInterval(() => {this.plusSlides(n + 2);}, 4000);
    } else {
   	myTimer = setInterval(() => {this.plusSlides(n + 1);}, 4000);
    }
   }

function currentSlide(n) {
  clearInterval(myTimer);
  this.showSlides(slideIndex = n);
  if (n = -1) {
  	myTimer = setInterval(() => {this.plusSlides(n + 2);}, 4000);
    } else {
    	myTimer = setInterval(() => {this.plusSlides(n + 1);}, 4000);
       }
}

function componentDidMount = () => {
	this.showSLides(slideIndex);
    myTimer = setInterval(() => {this.plusSlides(1);}, 4000);
   }

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
