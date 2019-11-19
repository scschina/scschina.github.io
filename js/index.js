/*banner*/
var banner={
	bannerImgNum:"",
	bannerImgHeight:"",
	bannerNowIndex:"",
	bannerInterval:"",
	//切换事件
	bannerDo:function(btnIndex){
		$(".banner-img img:eq("+this.bannerNowIndex+")").stop(true,true).fadeOut(1000);
		if(btnIndex||btnIndex==0){
			this.bannerNowIndex=btnIndex;
		}else{
			this.bannerNowIndex==this.bannerImgNum?this.bannerNowIndex=0:this.bannerNowIndex++;
		}
		
		this.bannerImgHeight=parseInt($(".banner img:eq(0)").height());
		this.bannerBtnPosition(this.bannerNowIndex);
		$(".banner-img img:eq("+this.bannerNowIndex+")").stop(true,true).fadeIn(1000);
		/*$(".banner-img").animate({
			"top":-this.bannerNowIndex*this.bannerImgHeight+"px"
		},{duration: 600, easing:"easeInCubic"});*/
	},
	//添加导航按钮
	bannerBtnAppend:function(){
		$(".banner-img img").not($(".banner-img img:eq(0)")).hide();
		$(".banner-btn").append("<img id='bannerBtn0' onclick='bannerBtnClick(0)' src='/skin/images/banner-pointer-on.png'>");
		for(var i=1;i<=this.bannerImgNum;i++){
			$(".banner-btn").append("<img id='bannerBtn"+i+"' onclick='bannerBtnClick("+i+")' src='/skin/images/banner-pointer.png'>");
		}
	},
	//确定哪个为白色
	bannerBtnPosition:function(btnIndex){
		$(".banner-btn>img").attr("src","/skin/images/banner-pointer.png");
		$(".banner-btn>img:eq("+btnIndex+")").attr("src","/skin/images/banner-pointer-on.png");
	},
};
//白点被点击
function bannerBtnClick(btnIndex){
	
	if(btnIndex=="-"){
		banner.bannerNowIndex==0?btnIndex=banner.bannerImgNum:btnIndex=banner.bannerNowIndex-1;
	}else if(btnIndex=="+"){
		banner.bannerNowIndex==banner.bannerImgNum?btnIndex=0:btnIndex=banner.bannerNowIndex+1;
	}
	clearInterval(banner.bannerInterval);
	banner.bannerDo(btnIndex);
	banner.bannerBtnPosition(btnIndex);
	banner.bannerInterval=setInterval(function(){
		banner.bannerDo(null);
	},5000);
}

/*banner end*/

/*main1*/
var main1={
	bannerImgNum:"",
	bannerImgHeight:"",
	bannerNowIndex:"",
	bannerInterval:"",
	//切换事件
	bannerDo:function(btnIndex){
		$(".main1-img>img:eq("+this.bannerNowIndex+")").stop(true,true).fadeOut(1000);
		if(btnIndex||btnIndex==0){
			this.bannerNowIndex=btnIndex;
		}else{
			this.bannerNowIndex==this.bannerImgNum?this.bannerNowIndex=0:this.bannerNowIndex++;
		}
		
		this.bannerImgHeight=parseInt($(".banner>img:eq(0)").height());
		this.bannerBtnPosition(this.bannerNowIndex);
		$(".main1-img>img:eq("+this.bannerNowIndex+")").stop(true,true).fadeIn(1000);
		/*$(".banner-img").animate({
			"top":-this.bannerNowIndex*this.bannerImgHeight+"px"
		},{duration: 600, easing:"easeInCubic"});*/
	},
	//添加导航按钮
	bannerBtnAppend:function(){
		$(".main1-img>img").not($(".main1-img>img:eq(0)")).hide();
		$(".main1-btn").append("<img id='bannerBtn0' onclick='main1BtnClick(0)' src='/skin/images/main1-pointer-on.png'>");
		for(var i=1;i<=this.bannerImgNum;i++){
			$(".main1-btn").append("<img id='bannerBtn"+i+"' onclick='main1BtnClick("+i+")' src='/skin/images/main1-pointer.png'>");
		}
	},
	//确定哪个为白色
	bannerBtnPosition:function(btnIndex){
		$(".main1-btn>img").attr("src","/skin/images/main1-pointer.png");
		$(".main1-btn>img:eq("+btnIndex+")").attr("src","/skin/images/main1-pointer-on.png");
	},
};
//白点被点击
function main1BtnClick(btnIndex){
	if(btnIndex=="-"){
		main1.bannerNowIndex==0?btnIndex=main1.bannerImgNum:btnIndex=main1.bannerNowIndex-1;
	}else if(btnIndex=="+"){
		main1.bannerNowIndex==main1.bannerImgNum?btnIndex=0:btnIndex=main1.bannerNowIndex+1;
	}
	clearInterval(main1.bannerInterval);
	main1.bannerDo(btnIndex);
	main1.bannerBtnPosition(btnIndex);
	main1.bannerInterval=setInterval(function(){
		main1.bannerDo(null);
	},10000);
}

/*main1 end*/

$(function(){
	
	/*banner*/
	banner.bannerImgNum=$(".banner-img img").length-1;
	banner.bannerNowIndex=0;
	banner.bannerInterval=setInterval(function(){
		banner.bannerDo(null);
	},5000);
	banner.bannerBtnAppend();
	/*main-1*/
	main1.bannerImgNum=$(".main1-img>img").length-1;
	main1.bannerNowIndex=0;
	main1.bannerInterval=setInterval(function(){
		main1.bannerDo(null);
	},10000);
	main1.bannerBtnAppend();
	
	$(".main1-left .main1-contentInfoChild:eq(0)").addClass("main-1-leftIn");
	setTimeout(function(){$(".main1-left .main1-contentInfoChild:eq(1)").addClass("main-1-leftIn");},500);
	setTimeout(function(){$(".main1-left .main1-contentInfoChild:eq(2)").addClass("main-1-leftIn");},1000);
	
	$(".main1-right .main1-contentInfoChild:eq(0)").addClass("main-1-leftOut");
	setTimeout(function(){$(".main1-right .main1-contentInfoChild:eq(1)").addClass("main-1-leftOut");},500);
	setTimeout(function(){$(".main1-right .main1-contentInfoChild:eq(2)").addClass("main-1-leftOut");},1000);
	
	
	/*main-2*/
	$(document).scroll(function(){
		var top=$(this).scrollTop();
		if(top<=2000&&top>=500){
			var top1=-(top-500)/4+50;
			$("#main2").css({
				"backgroundPosition":"center "+top1+"px"
			});
		}
	});
	/*main-3*/
	$(".map-on").mouseover(function(){
		$(this).css("opacity",1);
	}).mouseleave(function(){
		$(this).css("opacity",0);
	});
	$(".main3-right-info").mouseover(function(){
		var index=$(".main3-right-info").index($(this));
		$(".map"+index).css("opacity",1);
		$(this).css("color","#F48321").find("font").css("color","#F48321");
		
	}).mouseleave(function(){
		var index=$(".main3-right-info").index($(this));
		$(".map"+index).css("opacity",0);
		$(this).css("color","#656565").find("font").css("color","#999999");
	});
	$(".main3-right-info").mouseover(function(){
		var index=$(".main3-right-info").index($(this));
		$(".map"+index).css("opacity",1);
		$(this).css("color","#F48321").find("font").css("color","#F48321");
		
	}).mouseleave(function(){
		var index=$(".main3-right-info").index($(this));
		$(".map"+index).css("opacity",0);
		$(this).css("color","#656565").find("font").css("color","#999999");
	});
	
	/*main-4*/
	$(".main-4-child").mouseover(function(){
		var index1=$(".main-4-child").index($(this));
		$("#main4-bottom").stop(true,false).animate({
			"left":index1*300+"px"
		},{duration: 500, easing:"easeOutBack"});
		$(this).find(".main4-title").css("color","#F48321");
		$(this).find(".Magnifier").removeClass("main-3-big-leave");
		$(this).find(".Magnifier").addClass("main-3-big");
		$(this).find(".main-4-hideBg").removeClass("main-3-small-leave");
		$(this).find(".main-4-hideBg").addClass("main-3-small");
	}).mouseleave(function(){
		$(this).find(".main4-title").css("color","#333333");
		$(this).find(".Magnifier").removeClass("main-3-big");
		$(this).find(".Magnifier").addClass("main-3-big-leave");
		$(this).find(".main-4-hideBg").removeClass("main-3-small");
		$(this).find(".main-4-hideBg").addClass("main-3-small-leave");
	});




	$(".npBtn").mouseover(function(){
			var imageSrc=$(this).attr("src");
			if(imageSrc.indexOf("On.png")>0){}else{
				imageSrc=imageSrc.replace(".png","On.png");
			}
			$(this).attr("src",imageSrc);
		}).mouseleave(function(){
			var imageSrc=$(this).attr("src");
			if(imageSrc.indexOf("On.png")>0){
				imageSrc=imageSrc.replace("On.png",".png");	
			}else{}
			$(this).attr("src",imageSrc);
		});
		
		var npIndex=0;
		var npMun=$(".main-4-child").length-4;
		$(".npRight").click(function(){
			if(npIndex>=npMun){
			
			}else{
				$(".main-4-child:eq("+npIndex+")").fadeOut(200);
				npIndex++;
			}
		});
		$(".npLeft").click(function(){
			if(npIndex<=0){
			
			}else{
				npIndex--;
				$(".main-4-child:eq("+npIndex+")").fadeIn(200);
				
			}
		});

});