// JavaScript Document
	function mouse(){
		$(".obj").mouseenter(function(){
//			console.log($(this).children(".up_ul"));
			$(this).children(".up_ul").stop().show(300);
		}),
		$(".obj").mouseleave(function(){
//			console.log("out"+$(this).children(".up_ul"));
			$(this).children(".up_ul").stop().hide();
		}) 
	}
	function add(lis_2){
			var select = document.getElementsByClassName("select");
			var obj = document.createElement("div");
			obj.className = "obj";
			var lis_1 = ["ICON","编号","姓名","积分","工种"];
//			var lis_2 = ["fang01.jpg","00","name",100,"Web"];
			//添加上ul （up_ul）--------------------------------------------
			var ul_1 = document.createElement("ul");
			ul_1.className = "up_ul";
			ul_1.style.cssText = "display: none";
			for(var i=0; i<5; i++){
				var li = document.createElement("li");
				if(!i) li.style.cssText = "padding: 0; width: 45px; text-align: center;";
				li.innerHTML = "<b>"+lis_1[i]+"</b>";
				ul_1.appendChild(li);
			}
			obj.appendChild(ul_1);
			select[0].appendChild(obj);
			//添加下面的ul （down_ul）--------------------------------------
			var ul_1 = document.createElement("ul");
			lis_2[1] = ++document.getElementsByClassName("down_ul").length;
			ul_1.className = "down_ul";
			for(var i=0; i<5; i++){
				var li = document.createElement("li");
				if(!i) {
					li.style.cssText = "padding: 0; width: 45px; text-align: center;";
					var img = document.createElement("img");
					img.src = lis_2[i];
					img.className = "eicon";
					li.appendChild(img);
				}else {
					li.innerHTML = lis_2[i];
				}
				ul_1.appendChild(li);
			}
			obj.appendChild(ul_1);
			select[0].appendChild(obj);
			//对obj添加mouse()鼠标进入出来事件
			mouse();
			alert("已添加 "+lis_2[1]+","+lis_2[2]+","+lis_2[3]+","+lis_2[4]);
	}
	function del(i){
		var objs = document.getElementsByClassName("obj");
		objs[i-1].parentNode.removeChild(objs[i-1]);
		alert("删除编号 "+i);
	}
	function amend(i,con){
			var down_e = document.getElementsByClassName("down_ul");
			var lis = $(down_e[i-1]).find("li");
			//lis[1].innerHTML = i+1;
			lis[2].innerHTML = con[0];
			lis[3].innerHTML = con[1];
			lis[4].innerHTML = con[2];
			alert("已修改 "+lis[1].innerHTML+","+lis[2].innerHTML+","
					+lis[3].innerHTML+","+lis[4].innerHTML);
	}
	function search(){
			var down_e = document.getElementsByClassName("down_ul");
			for(var i=0; i<down_e.length; i++){
				var lis = $(down_e[i]).find("li");
				if(lis[1].innerHTML == 3){
					alert("搜索到 "+lis[1].innerHTML+","+lis[2].innerHTML+","
						  +lis[3].innerHTML+","+lis[4].innerHTML);
					return;
				}
			}
			alert("No Search!");
	}
	
	window.onload = function(){
		mouse();
		//添加************************************************************
		$("#add>a").click(function(){
			var lis_2 = ["fang01.jpg","00","name",100,"Web"];
			add(lis_2);
		});
		//修改**********************************************************************
		$("#amend>a").click(function(){
			var con = ["name",100,"C"];
			amend(2,con);
		});
		//删除***********************************************************************
		$("#del>a").click(function(){
			del(4);
		});
		
		//搜索***********************************************************************
		$("#search>a").click(function(){
			search(3);
		});
	}