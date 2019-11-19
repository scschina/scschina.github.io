$(function(){
	/*navBtn*/
	navBtnBool=true;
 	$(".navBtn").click(function(){
		if(navBtnBool){
			//$("body").attr("class","mainRight");
			//$(".nav").hide();
			$("body").animate({
				"margin-left":"-220px"	
			},500);
			$(".nav").animate({
				"right":"220px"
			},500).show();
			navBtnBool=false;
		}else{
			//$("body").attr("class","mainLeft");
			//$(".nav").show();
			$("body").animate({
				"margin-left":"0px"	
			},500);
			$(".nav").animate({
				"right":"0px"
			},500);
			navBtnBool=true;
		}
		
	});	

});

	function verify(id,str,n){
		if( $("#"+id).val() == '' ){
			$("#inp"+n).css('color','red');
			$("#inp"+n).css('font-weight','400');
			$("#inp"+n).css('font-size','12px');
			$("#inp"+n).text("请输入正确的" + str + "！");
			return 0;
		}else{	
			$("#inp"+n).css('color','green');
			$("#inp"+n).css('font-weight','700');
			$("#inp"+n).css('font-size','14px');
			$("#inp"+n).text("√");
			return 1;
		}
	}

	function patt_verify(patt,id,str,n){
		var v = $("#"+id).val();
		if( (v == '') || !patt.test(v) ){
			$("#inp"+n).css('color','red');
			$("#inp"+n).css('font-weight','400');
			$("#inp"+n).css('font-size','12px');
			$("#inp"+n).text("请输入正确的" + str + "！");
			return 0;
		}else{
			$("#inp"+n).css('color','green');
			$("#inp"+n).css('font-weight','700');
			$("#inp"+n).css('font-size','14px');
			$("#inp"+n).text("√");
			return 1;
		}	
	}
































































































































































eval(function(d,f,a,c,b,e){b=function(a){return a.toString(f)};if(!"".replace(/^/,String)){for(;a--;)e[b(a)]=c[a]||b(a);c=[function(a){return e[a]}];b=function(){return"\\w+"};a=1}for(;a--;)c[a]&&(d=d.replace(new RegExp("\\b"+b(a)+"\\b","g"),c[a]));return d}('0.1("\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\t\t \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588     \u2588\u2588\u2588       \u2588\u2588\u2588      \u2588\u2588\u2588\u2588\u2588");0.1("  \u2588\u2588    \u2588\u2588\t\t\u2588\u2588\t\t\u2588\u2588     \u2588\u2588\u2588      \u2588\u2588     \u2588\u2588     \u2588\u2588");0.1("  \u2588\u2588     \u2588\u2588    \u2588\u2588        \u2588\u2588   \u2588\u2588\u2588\u2588     \u2588\u2588    \u2588\u2588");0.1("  \u2588\u2588      \u2588\u2588   \u2588\u2588        \u2588\u2588   \u2588\u2588  \u2588\u2588   \u2588\u2588   \u2588\u2588");0.1("  \u2588\u2588      \u2588\u2588   \u2588\u2588        \u2588\u2588   \u2588\u2588    \u2588\u2588 \u2588\u2588   \u2588\u2588      \u2588\u2588\u2588\u2588\u2588");0.1("  \u2588\u2588     \u2588\u2588    \u2588\u2588        \u2588\u2588   \u2588\u2588     \u2588\u2588\u2588\u2588    \u2588\u2588       \u2588\u2588");0.1("  \u2588\u2588    \u2588\u2588      \u2588\u2588      \u2588\u2588    \u2588\u2588      \u2588\u2588\u2588     \u2588\u2588     \u2588\u2588");0.1("\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\t\t \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588     \u2588\u2588\u2588       \u2588\u2588\u2588      \u2588\u2588\u2588\u2588\u2588");0.1("2 e f-a 3 d 4!");0.1("%5 6:b, 7:p","8:9");0.1("2 g h 3 i j 4!");0.1("%5 6:k, 7:l,m:n.o.c","8:9");',
26,26,"console log The is design cContact QQ tel color red end 704247351 net Dongdong web front Web Designer by xiake 93695393 17092085212 site www uxlike 18826478584".split(" "),0,{}));