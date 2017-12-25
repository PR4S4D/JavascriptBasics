const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");


var date = new Date();
let hour = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();

var secPostion = sec *6;
var minPosition = min * 6 + sec/10;
var hourPosition = hour *30 + min/2 + sec/120;

function setCurrentTime() {
	secPostion +=6;
	minPosition += 1/10;
	hourPosition +=1/120;
	HOURHAND.style.transform = "rotate("+hourPosition+"deg)";
	MINUTEHAND.style.transform = "rotate("+minPosition+"deg)";
	SECONDHAND.style.transform = "rotate("+secPostion+"deg)";
}

window.setInterval(setCurrentTime, 1000); 