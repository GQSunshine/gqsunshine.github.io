// JavaScript Document
function check(spanID,Str){
			var text = document.getElementById(spanID);
			text.innerHTML = Str;
		}
		
		function userBlur(){
			var name = document.getElementById('user').value;
			var text = document.getElementById('user_span');
			if(name.length < 6){
				text.innerHTML = "用户名长度太短";
				return false;
			}else{
				text.innerHTML = "用户名正确";
				return true;
			}
		}
		
		function userKeyUp(){
			var name = document.getElementById('user').value;
			var text = document.getElementById('user_span');
			if(name.length < 6){
				text.innerHTML = "用户名长度太短";
			}else{
				text.innerHTML = "用户名正确";
			}
		}
		
		function passwordBlur(){
			var password = document.getElementById('password').value;
			var text = document.getElementById('password_span');
			if(password.length < 6){
				text.innerHTML = "密码长度太短";
				return false;
			}else{
				text.innerHTML = "密码安全";
				return true;
			}
		}
		
		function passwordKeyUp(){
			var password = document.getElementById('password').value;
			var text = document.getElementById('password_span');
			if(password.length < 6){
				text.innerHTML = "密码长度太短";
			}else{
				text.innerHTML = "密码安全";
			}
		}
		
		function repasswordBlur(){
			var repassword = document.getElementById('repassword').value;
			var password = document.getElementById('password').value;
			
			var rtext = document.getElementById('repassword_span');
			
			if(repassword.length < 6){
				rtext.innerHTML = "密码长度太短";
				return false;
			}else if(repassword == password){
				rtext.innerHTML = "正确";
				return true;
			}else{
				rtext.innerHTML = "不正确";
				return false;
			}
		}
		
		function repasswordKeyUp(){
			var repassword = document.getElementById('repassword').value;
			var password = document.getElementById('password').value;
			
			var rtext = document.getElementById('repassword_span');
			
			if(repassword == password){
				rtext.innerHTML = "正确";
			}else{
				rtext.innerHTML = "不正确";
			}
		}
		
		function emailBlur(){
			var email = document.getElementById('email').value;
			var text = document.getElementById('email_span');
			var reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
			if( reg.test(email) ){
				text.innerHTML = "正确";
				return true;
			}else{
				text.innerHTML = "不正确";
				return false;
			}
		}
		
		function emailKeyUp(){
			var email = document.getElementById('email').value;
			var text = document.getElementById('email_span');
			var reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
			if( reg.test(email) ){
				text.innerHTML = "正确";
			}else{
				text.innerHTML = "不正确";
			}
		}
		
		function telephoneBlur(){
			var telephone = document.getElementById('telephone').value;
			var text = document.getElementById('telephone_span');
			
			var phoneReg = /^[1][3,4,5,7,8][0-9]{9}$/;
			
			if( phoneReg.test(telephone) ){
				text.innerHTML = "正确";
				return true;
			}else{
				text.innerHTML = "不正确";
				return false;
			}
		}
		
		function telephoneKeyUp(){
			var telephone = document.getElementById('telephone').value;
			var text = document.getElementById('telephone_span');
			
			var phoneReg = /^[1][3,4,5,7,8][0-9]{9}$/;
			
			if( phoneReg.test(telephone) ){
				text.innerHTML = "正确";
			}else{
				text.innerHTML = "不正确";
			}
		}
		
		function submit_form(){
			var action = document.getElementById("act");
			if(userBlur() && passwordBlur() && repasswordBlur() && emailBlur() && telephoneBlur() ){
				alert("提交成功！");
				return check;
			}
			alert("提交失败！");
			return false;
		}

var province = [
			["北京","天津","河北","河南","山东","山西"],
			["辽宁","吉林","黑龙江"],
			["陕西","宁夏","甘肃","内蒙古","青海","新疆","西藏"],
			["四川","云南","广西","贵州","重庆"],
			["海南","广东","福建"],
			["湖北","湖南","江西"],
			["安徽","上海","江苏","浙江"],
			["澳门","香港","台湾"]
		];
		
		function change(){
			//获得地区
			var position = document.getElementById("position").value;
			//提取地区省份信息
			
			var provinces = province[position];
			//向列表中加入各省份元素
			//获得省份下拉列表ID
			var select = document.getElementById("provinceSelect");
			select.options.length = 1;
			
			for(var i=0; i < provinces.length; i++){
				var provinceText = provinces[i];
				var option = document.createElement("option");
				var textNode = document.createTextNode(provinceText);
				option.appendChild(textNode);
				select.appendChild(option);
			}
		}