function init(){
   var newwindow=window.open("11.html");
}
function fenlei(){
   var newwindow=window.open("fenlei.html");
}

window.onload=function(){
	var current_index=0;
	//2000表示调用周期，以毫秒为单位，2000毫秒就是5秒
	var timer=window.setInterval(autoChange, 2000);//autoChange
	console.log(timer);
	//获取所有轮播按钮
	var button_li=document.getElementById("button").getElementsByTagName("li");
	//获取所有banner图
	var pic_div=document.getElementById("banner_pic").getElementsByTagName("div");
	//遍历元素banner_pic为显示图片的
	console.log(button_li.length);
	for(var i=0;i<button_li.length;i++){
		//添加鼠标滑过事件
		button_li[i].onmouseover=function(){
			//定时器存在时清除定时器
			if(timer){
				clearInterval(timer);
			}
			//遍历元素
			for(var j=0;j<pic_div.length;j++){
				// console.log(this);
				console.log(button_li[j]);
	
				//将当前索引对应的元素设为显示
				if(button_li[j]==this){
					current_index=j;  //从当前索引位置开始
					button_li[j].className="current";
					pic_div[j].className="current";
				}else{
					//将所有元素改变样式
					pic_div[j].className="pic";
					button_li[j].className="but";
				}
				// console.log(this);
				console.log(button_li[j]);
			}
		}
		//鼠标移出事件
		button_li[i].onmouseout=function(){
			//启动定时器，恢复自动切换
			timer=setInterval(autoChange,5000);			
		}
	}
	function autoChange(){
		//自增索引
		++current_index;
		//当索引自增达到上限时，索引归0
		if (current_index==button_li.length) {
			current_index=0;
		}//button_li为按钮索引
		for(var i=0;i<button_li.length;i++){
			if(i==current_index){
				button_li[i].className="current";
				pic_div[i].className="current";
				//切换按钮颜色和图片
			}else{
				button_li[i].className="but";
				pic_div[i].className="pic";
				//时间不到
			}
		}
	}
}
