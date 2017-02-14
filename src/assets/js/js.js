$(function(){
	var num=0;
	$(".meau").click(function(){ 
		if($(".nav").css("left")!=="0px"){
			$('.nav').animate({'left':'0'},200);
		}else{
			$('.nav').animate({'left':'-4rem'},200);
		}
	});
		function move(){
			
			 if(num==0){
			 
				$('.nav').animate({'left':'0'},200);
				setTimeout(function(){
					num=1;
				},100)
				 
			}else{
			  
				$('.nav').animate({'left':'-4rem'},200);
					num=0;
			}
		}
		/*touch事件*/
		var box = document.querySelector("body");
		var startPos,endPos,startTime,endTime;
           startPos = {
				x : 0,
				y : 0
			};
           endPos = {
				x : 0,
				y :0
			}
			if(box.addEventListener){
				box.addEventListener("touchstart",function(e){
					e = window.event || e;
					startPos = {
						x : e.touches[0].clientX,
						y : e.touches[0].clientY
					}
					startTime = new Date().getTime();
				})
				box.addEventListener("touchmove",function(e){
					e = window.event || e;
					endPos = {
						x : e.touches[0].clientX,
						y : e.touches[0].clientY
					}
				})
				box.addEventListener("touchend",function(e){
					e = window.event || e;
					endTime = new Date().getTime();
					judgeDirection()
				})
			}else{
				box.attachEvent("ontouchstart",function(e){
					e = window.event || e;
					startPos = {
						x : e.touches[0].clientX,
						y : e.touches[0].clientY
					}
					startTime = new Date().getTime();
				})
				box.attachEvent("ontouchmove",function(e){
					e = window.event || e;
					endPos = {
						x : e.touches[0].clientX,
						y : e.touches[0].clientY
					}
				})
				box.attachEvent("ontouchend",function(e){
					e = window.event || e;
					endTime = new Date().getTime();
					judgeDirection()
				})
			}
		var judgeDirection=function(){
			var xSpan = endPos.x - startPos.x;
			var ySpan = endPos.y - startPos.y;
			var direction ;
			var distance = Math.sqrt(xSpan*xSpan+ySpan*ySpan);
			if(xSpan<0&&Math.abs(ySpan/xSpan)<1&&endTime- startTime<300&&distance>30){
				num=1;
			   move();
			}
			if(xSpan>0&&Math.abs(ySpan/xSpan)<1&&endTime- startTime<300&&distance>30){
				num=0;
				move();
			}
		};
	$(".index_hddb").click(function(){
		window.scrollTo(0,0)
	});
	/*meau菜单二级*/

	$(".index_meauul").find("li").find("h2").click(function(){
		if($(this).siblings().hasClass("db")){
			$(this).siblings().removeClass("db").addClass("dn")
		}else{
			$(this).siblings().removeClass("dn").addClass("db").parent().siblings("li").find("p").removeClass("db").addClass("dn");
		}
	})

})

