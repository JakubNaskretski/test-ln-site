var slideIndex = 1;
showSlides(slideIndex);

window.onscroll = function() {
  countOnScroll();
}

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

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

// When scrolling on counters, start counting


// TODO: Make func with auto find offset of element instead of puting value in if statement
function countOnScroll() {
  if (window.pageYOffset > 950) {
    setInterval(setTime1, 400);
    setInterval(setTime2, 400);
    setInterval(setTime3, 5);
    setInterval(setTime4, 1000);
  }
}

var count1 = document.getElementById("count1");
var count2 = document.getElementById("count2");
var count3 = document.getElementById("count3");
var count4 = document.getElementById("count4");
var maxcount1 = 15;
var maxcount2 = 5;
var maxcount3 = 3875;
var maxcount4 = 2;
var counter1 = 0;
var counter2 = 0;
var counter3 = 0;
var counter4 = 0;

function setTime1() {
  if (counter1 < maxcount1) {
    ++counter1;
    count1.innerHTML = (counter1);
  }
}
function setTime2() {
  if (counter2 < maxcount2) {
    ++counter2;
    count2.innerHTML = (counter2);
  }
}
function setTime3() {
  if (counter3 < maxcount3) {
    ++counter3;
    count3.innerHTML = (counter3);
  }
}
function setTime4() {
  if (counter4 < maxcount4) {
    ++counter4;
    count4.innerHTML = (counter4);
  }
}

function scrollOnTop() {
  window.scroll(0,0) //setting screen to the position 0 from left 0 from top
}
