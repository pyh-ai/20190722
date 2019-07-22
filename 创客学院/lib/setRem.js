window.onload  = function(){
	function setRem(){
		var uiWidth = 750;
//		var shijiWidth = uiWidth/uiWidth;
		var oWidth = document.documentElement.clientWidth;
		console.log(oWidth);
		var size = oWidth/uiWidth*100;
		document.documentElement.style.fontSize = size +'px';
		
		
	}
	setRem()
	window.onresize =  function(){
		setRem()
	}
		
	
			
	
	
}
