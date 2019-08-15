// JavaScript Document

		//showFirefox
		function showFirefox1(){
			var img1 = document.getElementById("firefox_img");
			img1.src = "../imgs/Firefox09.png";
			setTimeout("showFirefox2()",2000);
		}
		function showFirefox2(){
			var img2 = document.getElementById("firefox_img");
			img2.src = "../imgs/Firefox10.png";
			setTimeout("showFirefox3()",2000);
		}
		function showFirefox3(){
			var img3 = document.getElementById("firefox_img");
			img3.src = "../imgs/Friefox01.png";
			setTimeout("showFirefox1()",2000);
			
		}
		//showChrome
		function showChrome1(){
			var img1 = document.getElementById("chrome_img");
			img1.src = "../imgs/google03.png";
			setTimeout("showChrome2()",1500);
		}
		function showChrome2(){
			var img2 = document.getElementById("chrome_img");
			img2.src = "../imgs/google04.png";
			setTimeout("showChrome3()",1500);
		}
		function showChrome3(){
			var img3 = document.getElementById("chrome_img");
			img3.src = "../imgs/google01.png";
			setTimeout("showChrome4()",1500);
		}
		function showChrome4(){
			var img4 = document.getElementById("chrome_img");
			img4.src = "../imgs/google02.png";
			setTimeout("showChrome1()",1500);
		}
		//showSafari
		function showSafari1(){
			var img1 = document.getElementById("safari_img");
			img1.src = "../imgs/safari08.jpg";
			setTimeout("showSafari2()",1500);
		}
		function showSafari2(){
			var img2 = document.getElementById("safari_img");
			img2.src = "../imgs/safari09.jpg";
			setTimeout("showSafari3()",1500);
		}
		function showSafari3(){
			var img3 = document.getElementById("safari_img");
			img3.src = "../imgs/safari12.jpg";
			setTimeout("showSafari4()",1500);
		}
		function showSafari4(){
			var img4 = document.getElementById("safari_img");
			img4.src = "../imgs/safari06.png";
			setTimeout("showSafari5()",1500);
		}
		function showSafari5(){
			var img5 = document.getElementById("safari_img");
			img5.src = "../imgs/safari07.jpg";
			setTimeout("showSafari1()",1500);
		}
		//IE
		/*function showIe1(){
			var img1 = document.getElementById("ie_img");
			img1.src = "ie03.jpg";
			setTimeout("showIe2()",2000);
		}
		function showIe2(){
			var img2 = document.getElementById("ie_img");
			img2.src = "ie04.jpg";
			setTimeout("showIe1()",2000);
		}*/
		function ViewShow(){
			setTimeout("showFirefox1()",2000);
			setTimeout("showChrome1()",1500);
			setTimeout("showSafari1()",1500);
			setTimeout("showIe1()",2000);
		}