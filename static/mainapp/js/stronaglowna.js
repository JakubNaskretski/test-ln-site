//old working slideshow
// var i = 0; //startpoint
// var images = [];
// var time = 5000;
// const contentList = document.querySelectorAll('.content__text');
//
// function hideElements() {
//   Array.from(contentList).map(item => item.style.display = 'none');
// }
//
//
// // Image list
// images[0] = document.getElementsByClassName("slajd1");
// images[1] = document.getElementsByClassName("slajd2");
// images[2] = document.getElementsByClassName("slajd3");
//
// //change image
// function changeImg(){
//   hideElements();
//   document.getElementById("images" + i).style.display = "block";
//
//   if(i < images.length - 1){
//     i++;
//   }else {
//     i = 0;
//   }
//
//
//   setTimeout("changeImg()", time);
// }
//
// window.onload = changeImg;

var imgArray = [
    document.getElementsByClassName("slajd1"),
    document.getElementsByClassName("slajd2"),
    document.getElementsByClassName("slajd3")],
    curIndex = 0;
    imgDuration = 3000;

function slideShow() {
    document.getElementById('slider').className += "fadeOut";
    setTimeout(function() {
        document.getElementById('slider').src = imgArray[curIndex];
        document.getElementById('slider').className = "";
    },1000);
    curIndex++;
    if (curIndex == imgArray.length) { curIndex = 0; }
    setTimeout(slideShow, imgDuration);
}
slideShow();
