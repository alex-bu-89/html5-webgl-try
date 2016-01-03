/**
 * Created by Alexander Buyanov and Phillip Redlich on 22.04.2015
 */

var IMG_FOLDER = "img/";
var WIDTH = 200;
var HEIGHT = 200;
var imgNum = 0;
var firstImg = 0;
var lastImg;

// sprite images
var imgArr = new Array(
	"img-1.png",
	"img-2.png",
	"img-3.png",
	"img-4.png",
	"img-5.png",
	"img-6.png",
	"img-7.png",
	"img-8.png"
)

// initialization function
function init(){
    console.log("Start app");
	lastImg = imgArr.length - 1;
    window.addEventListener("keydown", checkKeyPressed, false);
    loadImg(imgArr[imgNum]);
}

// loads img in document
// name - img name
function loadImg(name){
	var img = new Image(WIDTH, HEIGHT);
	img.onerror = function() {
	    // doesn't exist or error loading
	    console.log("There is no image");
	};
    img.onload = function() {
	    // code to set the src on success
	    var imgTag = document.getElementById("disc");
	    imgTag.setAttribute('src', this.src);
		imgTag.setAttribute('style', 'width:' + WIDTH + 'px;' + 'height:' + HEIGHT + 'px;');
	};
	img.src = IMG_FOLDER + name;
	console.log(img);
	//console.log("img nummer: " + imgNum);
	//console.log("last image: " + lastImg);
}

// checks if user press R or L key 
function checkKeyPressed(e){
	if (e.keyCode == "76") {
        rotateLeft();
    }
    if (e.keyCode == "82") {
        rotateRight();
    }
}

// changes img name and load next img
function rotateRight(){
	imgNum--;
	if(imgNum < firstImg){
		imgNum = lastImg;
		loadImg(imgArr[imgNum]);
	} else {
		loadImg(imgArr[imgNum]);
	}
}

// changes img name and load next img
function rotateLeft(){
	imgNum++;
	if(imgNum > lastImg){
		imgNum = 0;
		loadImg(imgArr[imgNum]);
	} else {
		loadImg(imgArr[imgNum]);
	}
}