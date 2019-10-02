var i = 0;
var images = [];
var time = 8000;

images[0] = 'W1.jpg';
images[1] = 'W2.jpg';
images[2] = 'W3.jpg';
images[3] = 'W4.jpg';
images[4] = 'W5.jpg';
images[5] = 'W6.png';

function changeImg(){
	document.getElementById("slide").src = images[i];

	if (i <images.length - 1){
		i++;
	}
	else{
		i = 0;
	}
	
	setTimeout("changeImg()", time);
	}
	window.onload = changeImg;