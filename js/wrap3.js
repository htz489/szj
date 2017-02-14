var next = document.querySelector(".next");
var s1 = document.querySelector(".s1");
var s2 = document.querySelector(".s2");
var subject = document.querySelectorAll(".subject");
var min4 = document.querySelectorAll(".min4");

var bol = false;
var indexS = 0;
var arr=[];

//随机题目
function ranSj(){
	var num = parseInt(Math.random()*5);
	var span = subject[num].querySelectorAll("span");
	var img = subject[num].querySelectorAll("img");
    var p = subject[num].querySelector("p");

	
	//若没有出现与数组一样的num
	if (arr.indexOf(num) == -1) {
		arr.push(num);
		//把随机出来的题目显示出来
		subject[num].style.display="block";
		if (arr.length==1) {
			p.innerHTML = "一、" + p.innerHTML;
		}
		if (arr.length==2) {
			p.innerHTML = "二、" + p.innerHTML;
		}
		if (arr.length==3) {
			console.log(arr.length);
			p.innerHTML = "三、" + p.innerHTML;
		}

		
		for (var i = 0; i < span.length; i++) {
			span[i].indexS = i;
			//点击选项
			span[i].addEventListener("touchstart",function(e){
				indexS = this.indexS;
				//打钩图片
				var imgShow = this.querySelector("img");
				//循环所有文字颜色为黑色和none掉打钩图片
				for (var j = 0; j < span.length; j++) {
					span[j].style.color = "black";
					img[j].style.display = "none";
				}
				//设置选中文字颜色为灰色
				span[indexS].style.color = "darkgray";
				//把选中选项的打钩图片显示出来
				imgShow.style.display = "inline-block";
			})
			span[i].addEventListener("touchend",function(e){
				bol = true;
			})
		}
	//若出现与数组一样的num，重新调用ranSj()
	}else{
		ranSj();
	} 
	return indexS;
}
ranSj();



var grades = 0;
function Grades(span){
	if (span=="gra") {
		grades += 1;
	}
	if (span=="grb") {
		grades += 2;
	}
	if (span=="grc") {
		grades += 3;
	}
}

var sum = 0;
//点击下一题
// function Next(span){
	next.addEventListener("touchstart",function(e){
    	// console.log("33");
    	// Grades(span);
    	if (!bol) {return;}

    	for (var i = 0; i < subject.length; i++) {
    		subject[i].style.display="none";
    	}
		ranSj();
		sum += (indexS+1);
    	console.log(sum);
		if (arr.length>3) {
			wrap3.style.display = "none";
			wrap4.style.display = "block";
			// var h3 = document.querySelector("h3");
			// h3.innerHTML = sum+"分";
			btn(sum);
		}
		
	})
	next.addEventListener("touchend",function(e){
		bol = false;
	})
// }


// 
//分享及昭告的按钮
function btn(grades){
	var count = 0;
	if (3<=grades && grades<=5) {
		count = 0;
	}
	if (6<=grades && grades<=7) {
		count = 1;
	}
	if (8<=grades && grades<=9) {
		count = 2;
	}
	var btnL = document.querySelectorAll(".btnL");
	var btnR = document.querySelectorAll(".btnR");
	
	min4[count].style.display="block";
	
	for (var i = 0; i < btnL.length; i++) {
		//终极解决办法
		btnL[i].addEventListener("touchstart",function(e){
		    location.href = "http://m.525j.com.cn/ajzx/home_5.shtml";
		})
		btnL[i].addEventListener("touchend",function(e){
				
		})	
	}
	for (var i = 0; i < btnR.length; i++) {
		//去昭告朋友圈
		btnR[i].addEventListener("touchstart",function(e){
		    wrap5.style.display = "block";

		})
		
		btnR[i].addEventListener("touchend",function(e){
				
		})	
		wrap5.addEventListener("touchstart",function(e){
		    wrap5.style.display = "none";
		})
	}	
}

