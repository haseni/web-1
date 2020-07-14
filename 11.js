
	function check(){
		var name = document.getElementById("name").value;
		var password = document.getElementById("pwd").value;
		if(!name){
			alert("用户名为空！！！");
			return false;
		}else if(!password){
			alert("密码为空！！！");
			return false;
		}
		if(name!="12345"||password!="abcdefg"){
			alert("用户名或密码错误！！！");
			return false;
		}
		return true;
	}
