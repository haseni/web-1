function chang(id,mode){
	document.getElementByld(id).style.display=mode;
	if(mode=='block'){//显示下拉内容
        document.getElementByld(id).style.border="1px solid #999";
        document.getElementByld(id).style.borderTop="none";
        //背景颜色
         document.getElementByld(id).paretNode.style.backgroundColor="#FFF";
         document.getElementByld(id).paretNode.style.border="1px solid #999";
	   document.getElementByld(id).paretNode.style.borderBottom="none";
   }
   else{
   	 document.getElementByld(id).paretNode.style.backgroundColor="#";
   	 document.getElementByld(id).paretNode.style.border="";

   }
} 