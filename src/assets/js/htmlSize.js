// (function(w,doc){
// 	var docEl = doc.documentElement,
// 	resizeEvt = "orientationchange" in w ? "orientationchange" : "resize",
// 	recalc = function(){
// 		var clientwidth = docEl.clientWidth;
// 		if( !clientwidth ){
// 			return false;
// 		};
// 		docEl.style.fontSize = 20 * ( clientwidth / 640 ) + "px";
// 	};
// 	if( !doc.addEventListener ){
// 		return false;
// 	}
// 	w.addEventListener(resizeEvt,recalc,false);
// 	doc.addEventListener("DOMContentLoaded",recalc,false);
// })(window,document)
(function(w,doc){
	w.addEventListener("orientationchange", setRem);
	w.addEventListener("resize", setRem);
	function setRem() {
	 var design=640;
     var radio=doc.documentElement.clientWidth/design;
     doc.documentElement.style.fontSize=radio*100+"px";
	}
	setRem();
})(window,document)