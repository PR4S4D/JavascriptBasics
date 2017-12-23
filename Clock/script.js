const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

let hrPos = 20;
let minPos = 130;
let secPos = 26;

var date = new Date();
console.log(date.getHours());

HOURHAND.style.transform = "rotate("+getHourAngle()+"deg)";
MINUTEHAND.style.transform = "rotate("+getMinuteAngle()+"deg)";
SECONDHAND.style.transform = "rotate("+getSecondsAngle()+"deg)";



function getHourAngle(){
	return date.getHours() *30 + date.getMinutes()/2 + date.getSeconds()/120;
}

function getMinuteAngle(){
	return date.getMinutes() * 6 + date.getSeconds()/10;
}

function getSecondsAngle(){
	return date.getSeconds() *6;
}   