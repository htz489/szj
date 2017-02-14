//拖拽
var wrap2 = document.querySelector(".wrap2");
var desk = document.querySelector(".desk");
var mid2 = document.querySelector(".mid2");
var sofa = document.querySelector(".sofa");
var lamp = document.querySelector(".lamp");
var winW = document.documentElement.clientWidth;
var winH = document.documentElement.clientHeight;

var num = 0;

function check(tz){
	var l1 = mid2.offsetLeft;
	var r1 = l1 + mid2.offsetWidth;
	var t1 = mid2.offsetTop;
	var b1 = t1 + mid2.offsetHeight;
	// console.log(l1,r1,t1,b1);

	var l2 = tz.offsetLeft;
	var r2 = l2 + tz.offsetWidth;
	var t2 = tz.offsetTop;
	var b2 = t2 + tz.offsetHeight;
	// console.log(l2,r2,t2,b2);
	if (l1<l2 && r1>r2 && t1<t2 && b1>b2) {
		num+=1;
		// console.log(num);
		if (num>=6) {
			setTimeout(function(){
				// alert("1");
				wrap2.style.display = "none";
				wrap3.style.display = "block";

			},1000);
		}
	}
}

change(desk);
change(sofa);
change(lamp);
function change(tz){
	var x = 0;
	var y = 0;
	var dx = 0;
	var dy = 0;
	var bol = false;
	tz.addEventListener("touchstart",function(e){
		dx = e.touches[0].clientX - tz.offsetLeft;
		dy = e.touches[0].clientY - tz.offsetTop;
		$(".hand").css("display","none");
		bol = true;
		document.addEventListener("touchmove",function(e){
			if (bol) {
				x = e.touches[0].clientX - dx;
				y = e.touches[0].clientY - dy;
			}
			if (x<=0) {
				x=0;
			}
			if (x>=winW-tz.offsetWidth) {
				x=winW-tz.offsetWidth;
			}
			if (y<=0) {
				y=0;
			}
			if (y>=winH-tz.offsetHeight) {
				y=winH-tz.offsetHeight;
			}
			tz.style.left = x +"px";
			tz.style.top = y +"px";
		})
	})
	document.addEventListener("touchend",function(e){
		bol = false;
		check(tz);
	})
}



