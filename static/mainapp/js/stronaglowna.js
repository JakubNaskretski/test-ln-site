var i = 0; //startpoint
var images = [];
var time = 1000;

// Image list
images[0].src = '/images/SlajdyStronaGlowna/slajd1.jpg';
images[1] = 'slajd2.jpg';
images[2] = 'slajd3.jpg';

//change image
function changeImg(){
  document.getElementById("slides").src = images [i];

  if(i < images.length - 1){
    i++;
  }else {
    i = 0;
  }

  setTimeout("changeImg()", time);
}

window.onload = changeImg;
