var i = 0; //startpoint
var images = [];
var time = 100;
// const contentList = document.querySelectorAll('.content__text');
// var imagesArray = Array.from(contentList);

// function hideElements() {
//   Array.from(contentList).map(item => item.style.display = 'none');
// }


// Image list
images[0] = document.getElementsByClassName("slajd1");
images[1] = document.getElementsByClassName("slajd2");
images[2] = document.getElementsByClassName("slajd3");

console.log("Hello world!");

function changeImg() {
  document.getElementById("images0").className = "fadeIn";
    setTimeout(function() {
    document.getElementById("images0").className = "fadeOut";
    },100);
    i ++;
    if (i == 1) { i = 0; }
    setTimeout(changeImg, time);
}

// //change image
// function changeImg(){
//   document.getElementById("images" + i).className = "fadeIn";
//   // fading image
//   setTimeout(function() {
//     document.getElementById("images" + i).remove("fadeIn");
//     // document.getElementById("images" + i).className.replace("fadeIn","content__text");
//   },1000);
//   // if(i < images.length - 1){
//   //   i++;
//   // }else {
//   //   i = 0;
//   // }
//   i ++;
//   if (i == imagesArray.length) { i = 0; }
//     setTimeout(changeImg, time);
// }
// //   setTimeout("changeImg()", time);
// // }
//
changeImg();

window.onload = changeImg;