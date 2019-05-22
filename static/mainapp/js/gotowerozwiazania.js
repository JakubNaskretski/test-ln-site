// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function() {
  scrollFunction1();
  scrollFunction2();
}

var i;
const redbox = document.querySelectorAll(".red");
const bluebox = document.querySelectorAll(".blue");
const purplebox = document.querySelectorAll(".purple");


// calling function when click display image (for now alert)
// displayImageOnClick1();
// displayImageOnClick5();

function scrollFunction1() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("center").style.fontSize = "30px";
  } else {
    document.getElementById("center").style.fontSize = "90px";
  }
}

function scrollFunction2() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("imagebackground").setAttribute(
    "style","height: 50%; width: 50%; background: center;  margin-left: auto; margin-right: auto; opacity: 0.2");
  } else {
    document.getElementById("imagebackground").setAttribute(
    "style","display: block; height: 100%; width: 100%; background: center; margin-left: auto; margin-right: auto; opacity: 0.5;");
  }
}

// var clickstatesyrup = 0;
// var clickstatefunctional = 0;
// function displayImageOnClick1() {
//
//     document.getElementById("btn1").addEventListener("click", function() {
//
//   if (clickstatesyrup == 0 && clickstatefunctional == 0) {
//     // code snippet 1
//     document.getElementById("syrupsdisplay").style.display = "block";
//     clickstatesyrup = 1;
//   } else{
//     // code snippet 2
//     document.getElementById("syrupsdisplay").style.display = "none";
//     clickstatesyrup = 0;
//   }
//
// })};
//
// function displayImageOnClick5() {
//
//     document.getElementById("btn5").addEventListener("click", function() {
//
//   if (clickstatefunctional == 0 && clickstatesyrup == 0) {
//     // code snippet 1
//     document.getElementById("funcdrinksdisplay").style.display = "block";
//     clickstatefunctional = 1;
//   } else {
//     // code snippet 2
//     document.getElementById("funcdrinksdisplay").style.display = "none";
//     clickstatefunctional = 0;
//   }
//
// })};


// Display products images


function displayOils(i) {
    // redbox.style.width += "30%";
    document.getElementById("oilsdisplay").style.display = "block";
    document.getElementById("functionaldisplay").style.display = "none";
    return i = 3;
}

function displayFunctional(i) {
    // redbox.style.width += "30%";
    document.getElementById("oilsdisplay").style.display = "none";
    document.getElementById("functionaldisplay").style.display = "block";
    console.log(bluebox[1]);
    return i = 1;
}

// product images
var redinex = 10;
var purpleindex = 20;
var blueindex = 30;
var greeenindex = 40;
var blackindex = 50;

function redontop(i) {
    redbox[i].style.zIndex = "30";
    bluebox[i].style.zIndex = "20";
    purplebox[i].style.zIndex = "10";
}

function purpleontop(i) {
    redbox[i].style.zIndex = "10";
    bluebox[i].style.zIndex = "20";
    purplebox[i].style.zIndex = "30";
}

function blueontop(i) {
    redbox[i].style.zIndex = "10";
    bluebox[i].style.zIndex = "30";
    purplebox[i].style.zIndex = "20";
}


//
// safety copy of one solution
// function displayImageOnClick5() {
//     document.getElementById("btn5").addEventListener("click", function() {
//     document.getElementById("funcdrinksdisplay").style.display = "block";
//     // alert("Hello World!");
//     }
//   );
// }
//
// rozwiązanie Macieja
// const contentList = document.querySelectorAll('.content__text');
//
// function hideElements() {
//   Array.from(contentList).map(item => item.style.display = 'none');
// }
//
// hideElements();
//
// let selectedButton = null
//
// function chengeElement(no) {
//   hideElements();
//   Array.from(document.querySelectorAll(`[data-btn]`)).map(item => item.style.background = 'initial');
//
//   if(selectedButton === no) {
//     selectedButton = null;
//   } else {
//     selectedButton = no;
//     // document.querySelector(`[data-btn="${no}"]`).style.background = 'red';
//     document.querySelector(`[data-id="${no}"]`).style.display = 'block';
//   }
//
// }
