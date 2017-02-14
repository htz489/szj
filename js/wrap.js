function start(){
	var btn = document.querySelector(".wrap .btn");
	
	btn.addEventListener("touchstart",function(){
		wrap.style.display = "none";
		wrap2.style.display = "block";
	})
}