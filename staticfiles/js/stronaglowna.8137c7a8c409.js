var i = 0; //startpoint
var images = [];
var time = 5000;
const contentList = document.querySelectorAll('.content__text');

function hideElements() {
  Array.from(contentList).map(item => item.style.display = 'none');
}


// Image list
// images[0] = document.getElementsByClassName("slajd1");
// images[1] = document.getElementsByClassName("slajd2");
// images[2] = document.getElementsByClassName("slajd3");

//change image
function changeImg(){
  hideElements();
  document.getElementById("images" + i).style.opacity = "1";

  if(i < images.length - 1){
    i++;
  }else {
    i = 0;
  }


  setTimeout("changeImg()", time);
}

window.onload = changeImg;