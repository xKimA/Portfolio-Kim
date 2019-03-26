
    
var blendAmount = 70;
var delay = -10;
var windowWidth = window.innerWidth;
var bg = document.getElementById("footer");

document.onmousemove = function(e){
	mouseX = Math.round(e.pageX / windowWidth * 100 - delay);
	
	col1 = mouseX - blendAmount;
	col2 = mouseX + blendAmount;
	
	bg.style.background = "linear-gradient(to right, rgb(69, 58, 216) "+ col1 +"%, #673ab7 "+ col2 +"%)";
}



