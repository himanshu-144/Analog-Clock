setInterval(() => {
// store date for current tie
  const date = new Date();
 htime= date.getHours();
 mtime= date.getMinutes();
 stime= date.getSeconds();

 // rotation formulas
 hrotation = 30*htime + mtime/2;
 mrotation = 6*mtime;
 srotation = 6*stime;

 // moving rotation
 const hour = document.querySelector(".hour");
 const minute = document.querySelector(".minute");
 const second = document.querySelector(".second");

 //  for style 
hour.style.transform = ` rotate(${hrotation}deg)`;
minute.style.transform = ` rotate(${mrotation}deg)`;
second.style.transform = ` rotate(${srotation}deg)`;

}, 1000);
setInterval(showTime, 1000);
function showTime() {
	let time = new Date();
	let hour = time.getHours();
	let min = time.getMinutes();
	let sec = time.getSeconds();
	am_pm = "AM";

	if (hour > 12) {
		hour -= 12;
		am_pm = "PM";
	}
	if (hour == 0) {
		hr = 12;
		am_pm = "AM";
	}

	hour = hour < 10 ? "0" + hour : hour;
	min = min < 10 ? "0" + min : min;
	sec = sec < 10 ? "0" + sec : sec;

	let currentTime = hour + ":"
			+ min + ":" + sec + am_pm;

	document.getElementById("clock")
			.innerHTML = currentTime;
}
showTime();
