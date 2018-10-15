var i 0; //start point
var images = [];
var time = 3000;

//img list
images[0] = "coolgalaxy.jpg";
images[1] = "coolspace.jpg";
images[2] = "purplespace.jpg";
images[3] = "coolspace11.jpg";
images[4] = "earthnmoon1.jpg";
images[5] = "galaxy.jpg";

// change image
function changImg(){
	document.slide.src =images[i];

	if(i < images.length - 1){
      i++;
	} else {
		i = 0;
	}
	setTimeout("changeImg()", time);
}

window.onload = changeImg;