//--extend--//
/*! Lazy Load 1.9.3 - MIT license - Copyright 2010-2013 Mika Tuupola */
!function(a,b,c,d){var e=a(b);a.fn.lazyload=function(f){function g(){var b=0;i.each(function(){var c=a(this);if(!j.skip_invisible||c.is(":visible"))if(a.abovethetop(this,j)||a.leftofbegin(this,j));else if(a.belowthefold(this,j)||a.rightoffold(this,j)){if(++b>j.failure_limit)return!1}else c.trigger("appear"),b=0})}var h,i=this,j={threshold:0,failure_limit:0,event:"scroll",effect:"show",container:b,data_attribute:"original",skip_invisible:!0,appear:null,load:null,placeholder:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"};return f&&(d!==f.failurelimit&&(f.failure_limit=f.failurelimit,delete f.failurelimit),d!==f.effectspeed&&(f.effect_speed=f.effectspeed,delete f.effectspeed),a.extend(j,f)),h=j.container===d||j.container===b?e:a(j.container),0===j.event.indexOf("scroll")&&h.bind(j.event,function(){return g()}),this.each(function(){var b=this,c=a(b);b.loaded=!1,(c.attr("src")===d||c.attr("src")===!1)&&c.is("img")&&c.attr("src",j.placeholder),c.one("appear",function(){if(!this.loaded){if(j.appear){var d=i.length;j.appear.call(b,d,j)}a("<img />").bind("load",function(){var d=c.attr("data-"+j.data_attribute);c.hide(),c.is("img")?c.attr("src",d):c.css("background-image","url('"+d+"')"),c[j.effect](j.effect_speed),b.loaded=!0;var e=a.grep(i,function(a){return!a.loaded});if(i=a(e),j.load){var f=i.length;j.load.call(b,f,j)}}).attr("src",c.attr("data-"+j.data_attribute))}}),0!==j.event.indexOf("scroll")&&c.bind(j.event,function(){b.loaded||c.trigger("appear")})}),e.bind("resize",function(){g()}),/(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion)&&e.bind("pageshow",function(b){b.originalEvent&&b.originalEvent.persisted&&i.each(function(){a(this).trigger("appear")})}),a(c).ready(function(){g()}),this},a.belowthefold=function(c,f){var g;return g=f.container===d||f.container===b?(b.innerHeight?b.innerHeight:e.height())+e.scrollTop():a(f.container).offset().top+a(f.container).height(),g<=a(c).offset().top-f.threshold},a.rightoffold=function(c,f){var g;return g=f.container===d||f.container===b?e.width()+e.scrollLeft():a(f.container).offset().left+a(f.container).width(),g<=a(c).offset().left-f.threshold},a.abovethetop=function(c,f){var g;return g=f.container===d||f.container===b?e.scrollTop():a(f.container).offset().top,g>=a(c).offset().top+f.threshold+a(c).height()},a.leftofbegin=function(c,f){var g;return g=f.container===d||f.container===b?e.scrollLeft():a(f.container).offset().left,g>=a(c).offset().left+f.threshold+a(c).width()},a.inviewport=function(b,c){return!(a.rightoffold(b,c)||a.leftofbegin(b,c)||a.belowthefold(b,c)||a.abovethetop(b,c))},a.extend(a.expr[":"],{"below-the-fold":function(b){return a.belowthefold(b,{threshold:0})},"above-the-top":function(b){return!a.belowthefold(b,{threshold:0})},"right-of-screen":function(b){return a.rightoffold(b,{threshold:0})},"left-of-screen":function(b){return!a.rightoffold(b,{threshold:0})},"in-viewport":function(b){return a.inviewport(b,{threshold:0})},"above-the-fold":function(b){return!a.belowthefold(b,{threshold:0})},"right-of-fold":function(b){return a.rightoffold(b,{threshold:0})},"left-of-fold":function(b){return!a.rightoffold(b,{threshold:0})}})}(jQuery,window,document);

(function($){
	$.extend({
		goTop : function (options){
			options.item = options.item || 'toTop';
			options.time = options.time || 500;
			options.scroll = options.scroll || false;
			if(options.scroll == true){
				$(window).bind("scroll", function(){
					var scrollTopNum = $(document).scrollTop();
					(scrollTopNum > 0) ? $(options.item).addClass("up"): $(options.item).removeClass("up");
				});
			}
			$(options.item).click(function(){
				$("html,body").animate({scrollTop:0}, options.time);
			});
		}
	});
})(jQuery)

//--common--//
document.domain='shishangqiyi.com';
window.curEvent =window.curEvent || 14;

function setcookie(cookieName, cookieValue, seconds, path, domain, secure){
	var expires = new Date();
	expires.setTime(expires.getTime() + seconds);
	document.cookie = escape(cookieName) + '=' + escape(cookieValue)
		+ (seconds ? '; expires=' + expires.toGMTString() : '')
		+ (path ? '; path=' + path : '')
		+ (domain ? '; domain=' + domain : '')
		+ (secure ? '; secure' : '');
}
// 쿠키값 가져오기
function getCookie(key)
{
  var cook = document.cookie + ";";
  var idx =  cook.indexOf(key, 0);
  var val = "";
 
  if(idx != -1)
  {
    cook = cook.substring(idx, cook.length);
    begin = cook.indexOf("=", 0) + 1;
    end = cook.indexOf(";", begin);
    val = unescape( cook.substring(begin, end) );
  }
  return val;
}
 
// 쿠키값 설정
function setCookie(name, value, expiredays)
{
  var today = new Date();
  today.setDate( today.getDate() + expiredays );
  document.cookie = name + "=" + escape( value ) + "; path=/;domain=.shishangqiyi.com; expires=" + today.toGMTString() + ";"
}
function popup(popupName){
	var _scrollHeight = $(document).scrollTop(),
		_windowHeight = $(window).height(),
		_windowWidth = $(window).width(),
		_popupHeight = popupName.height(),
		_popupWeight = popupName.width();
	_posiTop = (_windowHeight - _popupHeight) / 2 + _scrollHeight;
	_posiLeft = (_windowWidth - _popupWeight) / 2;
	popupName.css({
		"left": _posiLeft + "px",
		"top": _posiTop + "px",
		"display": "block"
	})
}

<!--
function isValidFormat(input,format){
    if (input.value.search(format) != -1){
        return true; //올바른 포맷 형식
    }
    return false;
}

/**
 * 입력값이 이메일 형식인지 체크
 */
function isValidEmail(input){
    var format = /^((\w|[\-\.])+)@((\w|[\-\.])+)\.([A-Za-z]+)$/;
    return isValidFormat(input,format);
}

function push(){
	var e = window.event || arguments.callee.caller.arguments[0];
	if (e.keyCode == 13){LoginOk();}
}

function next()
{
	var e = window.event || arguments.callee.caller.arguments[0];
	if (e.keyCode == 13){ document.login.pass_login.focus();}
}
function trim(str){	
	strNewName = str
	if(strNewName != null){			
		for(intLoop = 0; intLoop < strNewName.length; intLoop++){
			if(strNewName.charAt(intLoop) != " ") break				
		}
		startIndex = intLoop;
		strNewName = strNewName.substr(startIndex);
			
		for(intLoop = strNewName.length - 1; intLoop >= 0; intLoop--){
			if(strNewName.charAt(intLoop) != " ") break							
		}
		endIndex = intLoop;
		strNewName = strNewName.substr(0, endIndex + 1);
		
		if(strNewName.length <= 0) strNewName = null
	}		
	return strNewName
}

function onlyNumber(){                          
	var e = window.event || arguments.callee.caller.arguments[0];
	if((e.keyCode<48)||(e.keyCode>57) ) e.returnValue=false; 
}   

function onlyPhoneNumber(){                          
	var e = window.event || arguments.callee.caller.arguments[0];
	if(((e.keyCode<48)||(e.keyCode>57))&&(e.keyCode!=45) ) e.returnValue=false; 
} 
 
function isValidFormat(input,format){
    if (input.value.search(format) != -1){
        return true; //올바른 포맷 형식
    }
    return false;
}

/**
 * 입력값이 전화번호 형식(숫자-숫자-숫자)인지 체크
 */
function isValidPhone(input){
    var format = /^(\d+)-(\d+)-(\d+)$/;
    return isValidFormat(input,format);
}
/**
 * 입력값이 이메일 형식인지 체크
 */
function isValidEmail(input){
    var format = /^((\w|[\-\.])+)@((\w|[\-\.])+)\.([A-Za-z]+)$/;
    return isValidFormat(input,format);
}

//--goto page--//
function gotoHome(){location = "http://www.shishangqiyi.com/";}
function gotoInfoModify(){location = "http://kr.shishangqiyi.com/my/modifyForm.asp";}
function gotoLoginForm()
{
	url ="http://kr.shishangqiyi.com/member/LoginForm.asp";		
	try{
		var obj=parent.document;
	}catch(err){
 	window.open('/member/LoginForm_tianya.asp?from=tianya','mypop','width=460,height=255,scrollbars=no');
	var a;
	a=1;
	}
	if (a!=1){
	window.open(url,'_blank');	
	}
}
function gotoLogOut(){location = "http://kr.shishangqiyi.com/member/LogOut.asp";}
function gotoAgreement(){location = "http://kr.shishangqiyi.com/member/Agreement.asp";}
function gotoMyPage(){location = "http://kr.shishangqiyi.com/my/myOrder.asp";}
function gotoService(){location = "http://kr.shishangqiyi.com/customer/FaqList.asp?Select=1";}
function gotoMyCart(kind){
	if(kind==2){location = "http://kr.shishangqiyi.com/cart/mycart.asp?kind="+kind;}
	else{location = "http://kr.shishangqiyi.com/cart/mycart.asp";}
}
function gotoMyCartDelay(){location = "http://kr.shishangqiyi.com/cart/mycart.asp";}
function gotoTracking(){location = "http://kr.shishangqiyi.com/customer/Tracking.asp";}
function gotoCommunity(){location = "http://kr.shishangqiyi.com/community/comm_qna_list.asp";}
function gotoBBS(){location = "http://kr.shishangqiyi.com/qiyibbs/bbsshouye.asp";}
function gotoMyzzim(){location = "http://kr.shishangqiyi.com/my/myzzim.asp";}
function gotoWholesale(){location = "http://kr.shishangqiyi.com/help/wholesale.asp";}
function mypass(){location = "http://kr.shishangqiyi.com/help/help_14.asp";}

//--login--//
/*safecode*/
function safecode(arg){
	var safepic;
	if(arg==1){
		safepic="safepic1";
	}
	else if(arg==2){
		safepic="safepic2";
	}
	else if(arg==3){
		safepic="safepic3";
	}
	else{
		return;
	}
	document.getElementById(safepic).innerHTML="";
	var codeImg=document.createElement('img');
	codeImg.width=66;
	codeImg.height=29;
	codeImg.title="看不清？点击刷新验证码！";
	codeImg.src="http://kr.shishangqiyi.com/apps/member/safecode.asp?_=" + Math.random();
	codeImg.onclick=function(){safecode(arg)};
	document.getElementById(safepic).appendChild(codeImg);	
}
function LoginOk(){		
 	 if(document.login.saveid.checked) 
		saveLogin(document.login.userid.value);
	 else  
	 	saveLogin("");


	if ( document.login.userid.value.length == 0 ){
		alert("请输入您的邮件地址."); 
		document.login.userid.focus();
		return;		
	}
	
	if (!isValidEmail(document.login.userid)){
        alert("您输入有误.");
		document.login.userid.focus();
		return;		 
     }	
	
	if ( document.login.pass_login.value.length == 0 ){
		alert("请输入密码."); 
		document.login.pass_login.focus();
		return;		
	}
	document.login.action="http://kr.shishangqiyi.com/apps/member/login_pop.asp";
	document.domain='shishangqiyi.com';
	document.login.submit();

}
// 쿠키에서 로그인 정보 가져오기
function getLogin()
{
	var frm = document.login;
	
	// userid 쿠키에서 id 값을 가져온다.
	var id = getCookie("userid");
	
	// 가져온 쿠키값이 있으면
	if(id != "")
	{
		frm.userid.value = id;
		frm.saveid.checked = true;
	}
}
// 쿠키에 로그인 정보 저장
function saveLogin(id)
{
	if(id != "")
	{
		// userid 쿠키에 id 값을 7일간 저장
		setCookie("userid", id, 7);
	}else{
		// userid 쿠키 삭제
		setCookie("userid", id, -1);
	}
}
function login_show(callback){
	var login_frm=document.login;
	login_frm.reset();

	search_hide();
	getLogin();
	$("#popAlpha").show();
	$("#popAlpha").animate({opacity:"0.5"},"fast");
	$("#pop_login").css("margin-top","-195px").show();
	$("#pop_login_box li").first().show().siblings().hide();
	if(callback && callback != ""){
		$("#login_callback").val(callback);
	}
	
	//userid
	if($(login_frm.userid).val()!=""){
		$(login_frm.userid).removeClass("textgb");
	}
	else{
		$(login_frm.userid).addClass("textgb");
	}
	$(login_frm.userid).unbind("focus").focus(
		function(){$(this).removeClass("textgb");}
	);
	$(login_frm.userid).unbind("blur").blur(
		function(){
			var _this=$(this);
			if($(this).val()==''){
				$(this).addClass("textgb");
			}
		}
	);
	$(login_frm.userid).unbind("keydown").keydown(function(){next()});
	//pass
	$(login_frm.pass_login).unbind("focus").focus(
		function(){$(this).removeClass("pwdbg");}
	);
	$(login_frm.pass_login).unbind("blur").blur(
		function(){
			var _this=$(this);
			if($(this).val()==''){
				$(this).addClass("pwdbg");
			}
		}
	);
	$(login_frm.pass_login).unbind("keydown").keydown(function(){push()});
	//save
	$("#saveid").unbind("change").change(function(){if($(this).is(":checked")){confirm("在这台计算机上要保存电子邮件地址吗？\n\n您的信息可能会被泄漏，敬请留意！")};});
	//submit
	$("#pop_login_submit").unbind("click").click(function(){LoginOk();});
	//regpop
	$("#pop_reg_btn").unbind("click").click(function(){reg_show();});
	//mypass
	$("#mypass_btn").unbind("click").click(function(){mypass();});
}
function reg_show(){
	var reg_frm=document.regFrm;
	var regFrm_wholesale=document.regFrm_wholesale;
	
	$("#reg_select>li:eq(0)").click();
	regFrm.reset();

	search_hide();
	$("#popAlpha").show();
	$("#popAlpha").animate({opacity:"0.5"},"fast");
	$("#pop_login").css("display","block");
	$("#pop_login").css("margin-top","-188px").show();
	$("#pop_login_box li").first().hide().siblings().show();

	//email
	if($(reg_frm.email).val()!=""){
		$(reg_frm.email).removeClass("textgb");
	}
	else{
		$(reg_frm.email).addClass("textgb");
	}
	$(reg_frm.email).unbind("focus").focus(
		function(){$(this).removeClass("textgb");}
	);
	$(reg_frm.email).unbind("blur").blur(
		function(){
			var _this=$(this);
			if($(this).val()==''){
				$(this).addClass("textgb");
			}
			else{
				$(this).removeClass("textgb");
			}
			duplEmailCheck();
		}
	);
	//pass
	$(reg_frm.pass).unbind("focus").focus(
		function(){$(this).removeClass("pwdbg");}
	);
	$(reg_frm.pass).unbind("blur").blur(
		function(){
			var _this=$(this);
			if($(this).val()==''){
				$(this).addClass("pwdbg");
			}
		}
	);
	//re_pass
	$(reg_frm.re_pass).unbind("focus").focus(
		function(){$(this).removeClass("comfirmpwdbg");}
	);
	$(reg_frm.re_pass).unbind("blur").blur(
		function(){
			var _this=$(this);
			if($(this).val()==''){
				$(this).addClass("comfirmpwdbg");
			}
		}
	);
	//name
	if($(reg_frm.name).val()!=""){
		$(reg_frm.name).removeClass("namebg");
	}
	else{
		$(reg_frm.name).addClass("namebg");
	}
	$(reg_frm.name).unbind("focus").focus(
		function(){$(this).removeClass("namebg");}
	);
	$(reg_frm.name).unbind("blur").blur(
		function(){
			var _this=$(this);
			if($(this).val()==''){
				$(this).addClass("namebg");
			}
			else{
				$(this).removeClass("namebg");
			}
			duplEmailCheck();
		}
	);
	$(reg_frm.name).unbind("keyup").keyup(function(){
		var _this=$(this);
		_this.val(_this.val().replace(/[\d]/g,''));
	});

	//cphone
	if($(reg_frm.cphone).val()!=""){
		$(reg_frm.cphone).removeClass("cphonebg");
	}
	else{
		$(reg_frm.cphone).addClass("cphonebg");
	}
	$(reg_frm.cphone).unbind("focus").focus(
		function(){$(this).removeClass("cphonebg");}
	);
	$(reg_frm.cphone).unbind("blur").blur(
		function(){
			var _this=$(this);
			if($(this).val()==''){
				$(this).addClass("cphonebg");
			}
			else{
				$(this).removeClass("cphonebg");
			}
			duplEmailCheck();
		}
	);
	$(reg_frm.cphone).unbind("keyup").keyup(function(){
		var _this=$(this);
		_this.val(_this.val().replace(/[^\d]/g,''));
	});

	//code
	if($(reg_frm.code).val()!=""){
		$(reg_frm.code).removeClass("codebg");
	}
	else{
		$(reg_frm.code).addClass("codebg");
	}
	$(reg_frm.code).unbind("focus").focus(
		function(){$(this).removeClass("codebg");}
	);
	$(reg_frm.code).unbind("blur").blur(
		function(){
			var _this=$(this);
			if($(this).val()==''){
				$(this).addClass("codebg");
			}
			else{
				$(this).removeClass("codebg");
			}
			duplEmailCheck();
		}
	);
	$(reg_frm.code).unbind("keyup").keyup(function(){
		var _this=$(this);
		_this.val(_this.val().replace(/[^\d]/g,''));
	});	
	if($("#safepic1").children().length==0){
		safecode(1);
	}

	//批发会员注册
	//email
	if($(regFrm_wholesale.email).val()!=""){
		$(regFrm_wholesale.email).removeClass("textgb");
	}
	else{
		$(regFrm_wholesale.email).addClass("textgb");
	}
	$(regFrm_wholesale.email).unbind("focus").focus(
		function(){$(this).removeClass("textgb");}
	);
	$(regFrm_wholesale.email).unbind("blur").blur(
		function(){
			var _this=$(this);
			if($(this).val()==''){
				$(this).addClass("textgb");
			}
			else{
				$(this).removeClass("textgb");
			}
			duplEmailCheck_wholesale();
		}
	);
	//pass
	$(regFrm_wholesale.pass).unbind("focus").focus(
		function(){$(this).removeClass("pwdbg");}
	);
	$(regFrm_wholesale.pass).unbind("blur").blur(
		function(){
			var _this=$(this);
			if($(this).val()==''){
				$(this).addClass("pwdbg");
			}
		}
	);
	//re_pass
	$(regFrm_wholesale.re_pass).unbind("focus").focus(
		function(){$(this).removeClass("comfirmpwdbg");}
	);
	$(regFrm_wholesale.re_pass).unbind("blur").blur(
		function(){
			var _this=$(this);
			if($(this).val()==''){
				$(this).addClass("comfirmpwdbg");
			}
		}
	);
	//name
	if($(regFrm_wholesale.name).val()!=""){
		$(regFrm_wholesale.name).removeClass("namebg");
	}
	else{
		$(regFrm_wholesale.name).addClass("namebg");
	}
	$(regFrm_wholesale.name).unbind("focus").focus(
		function(){$(this).removeClass("namebg");}
	);
	$(regFrm_wholesale.name).unbind("blur").blur(
		function(){
			var _this=$(this);
			if($(this).val()==''){
				$(this).addClass("namebg");
			}
			else{
				$(this).removeClass("namebg");
			}
			duplEmailCheck_wholesale();
		}
	);
	$(regFrm_wholesale.name).unbind("keyup").keyup(function(){
		var _this=$(this);
		_this.val(_this.val().replace(/[\d]/g,''));
	});

	//cphone
	if($(regFrm_wholesale.cphone).val()!=""){
		$(regFrm_wholesale.cphone).removeClass("cphonebg");
	}
	else{
		$(regFrm_wholesale.cphone).addClass("cphonebg");
	}
	$(regFrm_wholesale.cphone).unbind("focus").focus(
		function(){$(this).removeClass("cphonebg");}
	);
	$(regFrm_wholesale.cphone).unbind("blur").blur(
		function(){
			var _this=$(this);
			if($(this).val()==''){
				$(this).addClass("cphonebg");
			}
			else{
				$(this).removeClass("cphonebg");
			}
			duplEmailCheck_wholesale();
		}
	);
	$(regFrm_wholesale.cphone).unbind("keyup").keyup(function(){
		var _this=$(this);
		_this.val(_this.val().replace(/[^\d]/g,''));
	});

	//code
	if($(regFrm_wholesale.code).val()!=""){
		$(regFrm_wholesale.code).removeClass("codebg");
	}
	else{
		$(regFrm_wholesale.code).addClass("codebg");
	}
	$(regFrm_wholesale.code).unbind("focus").focus(
		function(){$(this).removeClass("codebg");}
	);
	$(regFrm_wholesale.code).unbind("blur").blur(
		function(){
			var _this=$(this);
			if($(this).val()==''){
				$(this).addClass("codebg");
			}
			else{
				$(this).removeClass("codebg");
			}
			duplEmailCheck_wholesale();
		}
	);
	$(regFrm_wholesale.code).unbind("keyup").keyup(function(){
		var _this=$(this);
		_this.val(_this.val().replace(/[^\d]/g,''));
	});	
	if($("#safepic2").children().length==0){
		safecode(2);
	}
	
	//detailaddr
	if($(regFrm_wholesale.detailaddr).val()!=""){
		$(regFrm_wholesale.detailaddr).removeClass("detailaddrbg");
	}
	else{
		$(regFrm_wholesale.detailaddr).addClass("detailaddrbg");
	}
	$(regFrm_wholesale.detailaddr).unbind("focus").focus(
		function(){$(this).removeClass("detailaddrbg");}
	);
	$(regFrm_wholesale.detailaddr).unbind("blur").blur(
		function(){
			var _this=$(this);
			if($(this).val()==''){
				$(this).addClass("detailaddrbg");
			}
			else{
				$(this).removeClass("detailaddrbg");
			}
			duplEmailCheck_wholesale();
		}
	);

	$("#AgreeFormOK_btn").unbind("click").click(function(){AgreeFormOK();});
	$("#AgreeFormOK_wholesale_btn").unbind("click").click(function(){AgreeFormOK_wholesale();});
	$("#pop_login_btn,#pop_login_wholesale_btn").unbind("click").click(function(){login_show();});	
}
function login_hide(){
	$("#popAlpha,#pop_login").fadeOut("fast");
}
function search_hide(){
	$("#blackAlpha").hide();
	$("#search_pop").hide();
}
function search_show(){
	login_hide();
	$("#blackAlpha").show();
	$("#search_pop").show();
	$(document.search.word).val("输入商品名即可搜索相关的商品").unbind("blur focus").bind( "blur focus", function(event){
		var _this = $(this);
    if( event.type == "focus" ){
        if($(this).val()=="输入商品名即可搜索相关的商品"){
			$(this).val("")
		}
    }else if( event.type == "blur" ){
        if($(this).val()==""){
			$(this).val("输入商品名即可搜索相关的商品")
		}
    }
});
}

//--search--//

function SearchOk(){
		if ( document.search.word.value == false || document.search.word.value == "输入商品名即可搜索相关的商品" ) 
		{
			alert("请输入商品名称！"); 
			document.search.word.focus();
			return;		
		}
		else
		{
			document.search.submit();	
		}     		
}

function isSerchEnter()
{
		var e = window.event || arguments.callee.caller.arguments[0];
		if (e.keyCode == 13) SearchOk()
}


function isEnter()
{
		var e = window.event || arguments.callee.caller.arguments[0];
		if (e.keyCode == 13) SearchOk()
}


/*nav*/
//function nav_specail(){
//	$('#nav_specail').bind({
//	  mouseenter: function(){
//		$("#nav_keywords_list").show();
//	  },
//	  mouseleave: function(){
//		$("#nav_keywords_list").hide();
//	  }
//	});
//}

/*check login*/
function checkLogin(){
	var script_checklogin = document.createElement('script');
	var callback=document.getElementById("login_callback").value;
	var checkUrl='kr.shishangqiyi.com/member/checklogin.asp';
	if(callback != ''){
		checkUrl +='?callback='+ callback + '&_=' + escape(new Date().getMilliseconds());
	}
	else{
		checkUrl += '?_=' + escape(new Date().getMilliseconds());
	}
	script_checklogin.type = 'text/javascript';
	script_checklogin.async = true;
	script_checklogin.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + checkUrl;
	var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(script_checklogin, s);
};

/*sso*/
function sso(){
var script_sso = document.createElement('script');
var checkUrl='kr.shishangqiyi.com/member/sso.asp?_='+ escape(new Date().getMilliseconds());
script_sso.type = 'text/javascript';
script_sso.async = true;
script_sso.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + checkUrl;
var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(script_sso, s);
};

function welcome(action,userid){
var script_welcome = document.createElement('script');
var welcomUrl='www.shishangqiyi.com/apps/member/welcome.asp?action=' + action +'&userid=' + userid +'&_='+ escape(new Date().getMilliseconds());
script_welcome.type = 'text/javascript';
script_welcome.async = true;
script_welcome.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + welcomUrl;
var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(script_welcome, s);
};


/*right bar*/
function barAdapt(){
	var _width=$(window).width();
	var default_width=1240;
	
	if(_width < default_width){
		$("#right_bar").addClass("bar_hide");
	}
	else{
		$("#right_bar").removeClass("bar_hide")
	}
	
	$(document).mousemove(function(e){
		var _width=$(window).width();
        var _point=e.clientX;
		
		if((_width < default_width) && (_width - _point)>=40){
			$("#right_bar").addClass("bar_hide");
		}
		else{
			$("#right_bar").removeClass("bar_hide")
		}
    });
	$(window).resize(function(e){
		var _width=$(window).width();

		if(_width < default_width){
			$("#right_bar").addClass("bar_hide");
		}
		else{
			$("#right_bar").removeClass("bar_hide")
		}
    });
}
function rightBar(){
	$("#bar_login").click(
		function(){
			login_show();
		}
	);
	$("#popAlpha,#pop_login_close").click(
		function(){
			login_hide();
		}
	);
	$("#blackAlpha").click(
		function(){
			search_hide();
		}
	);
	$("#search_btn").click(
		function(){
			search_show();
		}
	);

//	var bar_item=$("#right_bar").children("div[class!=bar_split][class!=bar_title][id!=bar_login][id!=bar_member][id!=bar_search]");
//	bar_item.mouseover(
//		function(){
//			$(this).children(".bar_pop").show();
//			search_hide();
//		}
//	);
//	bar_item.mouseout(
//		function(){
//			$(this).children(".bar_pop").hide();
//		}
//	);
	
	$.goTop({'item' : '#toTop','time':500,'scroll':true});
	
	$("#toTop_tip,#toTop_bottom").click(
		function(){
			$("#toTop").click();
		}
	);
	
//	$("#login_select>li").click(
//		function(){
//			var index = $("#login_select li").index(this);
//			if(index==0 && $(this).parent().hasClass("login_select_agree")){
//				$(this).parent().removeClass("login_select_agree")
//			}
//			else if(index==1 && ! $(this).parent().hasClass("login_select_agree")){
//				$(this).parent().addClass("login_select_agree")
//			}
//			
//			if(index == 1 && $("#safepic").children().length==0){
//				safecode(index+1);
//			}
//			
//			$("#pop_login_box>li").hide();
//			$("#pop_login_box>li:eq("+index+")").show();
//		}
//	);
	barAdapt();
}

/*check fun*/
function agreement()
{
	var url;
	url ="/member/AgreementText.asp"
	window.open(url,'mypop','width=752,height=500,scrollbars=yes');
	return;
}

function alertMsg(str)
{
    url="AlertWindow.asp?Status="+str;			
    alertWindow = window.open(url, 'alert',"status=no,resizable=no,menubar=no,scrollbars=no,width=300,height=200")			
	alertWindow.focus();
}

function duplEmailCheck()
{   

    objForm = document.regFrm;
	if($(objForm.email).is(":hidden")){
		return;
	}
	
    if (objForm.email.value == "" )
	{	
		document.getElementById("emailcheckstr").innerHTML="电子邮件不能为空!";
		objForm.email.focus();
	}
	else
	{
	    if (!isValidEmail(objForm.email)) 
	    {
			document.getElementById("emailcheckstr").innerHTML="请输入准确的电子邮件!";
			objForm.email.focus();
			objForm.email.value="";
		}
		else
		{
			if(trim(objForm.email.value).length > 30)
			{
				document.getElementById("emailcheckstr").innerHTML="请输入30位以内的电子邮件!";
				objForm.email.focus();
				objForm.email.value="";				
			}
			else
			{
				var Email = objForm.email.value; 				
				$.ajax({
					type: "POST",
					dataType:"jsonp",
					jsonp: "callback",
					url: "http://kr.shishangqiyi.com/apps/member/checkID.asp",
					data:"memberLevel=C&Email="+escape(Email),
					success: function(msg){
						//成功时执行函数
						if(msg.result == true){
							document.getElementById('emailcheckstr').innerHTML='可以使用的电子邮件';
							regFrm.emailcheck.value='N';
						}
						else{
							document.getElementById('emailcheckstr').innerHTML=msg.message;
							regFrm.emailcheck.value='Y';
						}
					},
					error: function(){
					}
				});
			}
		
		}
		
	}

}

function duplEmailCheck_wholesale()
{   
    objForm = document.regFrm_wholesale;
	if($(objForm.email).is(":hidden")){
		return;
	}
	
    if (objForm.email.value == "" )
	{	
		document.getElementById("emailcheckstr_wholesale").innerHTML="电子邮件不能为空!";
		objForm.email.focus();
	}
	else
	{
	    if (!isValidEmail(objForm.email)) 
	    {
			document.getElementById("emailcheckstr_wholesale").innerHTML="请输入准确的电子邮件!";
			objForm.email.focus();
			objForm.email.value="";
		}
		else
		{
			if(trim(objForm.email.value).length > 30)
			{
				document.getElementById("emailcheckstr_wholesale").innerHTML="请输入30位以内的电子邮件!";
				objForm.email.focus();
				objForm.email.value="";				
			}
			else
			{
				var Email = objForm.email.value; 				
				$.ajax({
					type: "POST",
					dataType:"jsonp",
					jsonp: "callback",
					url: "http://kr.shishangqiyi.com/apps/member/checkID.asp",
					data:"memberLevel=B&Email="+escape(Email),
					success: function(msg){
						//成功时执行函数
						if(msg.result == true){
							document.getElementById('emailcheckstr_wholesale').innerHTML='可以使用的电子邮件';
							objForm.emailcheck.value='N';
						}
						else{
							document.getElementById('emailcheckstr_wholesale').innerHTML=msg.message;
							objForm.emailcheck.value='Y';
						}
					},
					error: function(){
					}
				});
			}
		
		}
		
	}

}


function duplInviteCodeCheck()
{
    objForm = document.regFrm;
	
    if (objForm.invitecode.value != "" )
	{	
	 
	    var invitecode = objForm.invitecode.value;
  	
		var str = "Invite_Check.asp?invitecode="+invitecode;
		chkJob.location= str;	
	}	
}

function chkName(){	
	objForm = document.regFrm;
	var re = new RegExp(/^[\u4E00-\u9FFF]+$/);
	if(!re.test(objForm.name.value)){
	alert('姓名只能为中文!');
	objForm.name.value=objForm.name.value.replace(/[^\u4E00-\u9FA5]/g,'')
	return;
	}
}

function duplEmailCheck2(){		
	objForm = document.regFrm;

	chkJob.location="confirmEmailCheck.asp?Email="+objForm.email.value;
}

function AgreeFormOK(objForm){		
	objForm=document.regFrm;

	if(!objForm.agreement.checked){
		alert("请您仔细阅读《时尚起义用户使用条款》，必须同意此条款才能进行下一步");
		return;
	}		
	else if(trim(objForm.emailcheck.value) == "Y"){
		var alert_msg=$("#emailcheckstr").text();
		if(alert_msg==""){
			alert_msg = "电子邮件已存在!";
		}
		alert(alert_msg);
		objForm.email.focus();
		return;
	}	
	else if(trim(objForm.email.value) == null){
		alert("电子邮件不能为空!");
		objForm.email.focus();
		return;
	}	
	else if (!isValidEmail(objForm.email)){
         alert("请输入准确的电子邮件");
		objForm.email.focus();			
		return;		 
     }

	else if(trim(objForm.pass.value) == null){
		alert("请输入密码.");
		objForm.pass.focus();
		return;
	}			
	else if(trim(objForm.pass.value).length > 10){
		alert("请输入10位以内的密码.");
		objForm.pass.focus();
		return;
	}		
	
	else if(objForm.pass.value != objForm.re_pass.value){
		alert("您两次输入的密码不一致，请重新输入");
		objForm.pass.value=""
		objForm.re_pass.value=""
		objForm.pass.focus();
		return;
	}	

	else if(trim(objForm.name.value) == null){
		alert("请输入用户名");
		objForm.name.focus();
		return;
	}
	else if(trim(objForm.sex.value) == null){
		alert("请选择性别");
		objForm.sex.focus();
		return;
	}		
	else if(trim(objForm.cphone.value) == null){
		alert("请填写手机号码");
		objForm.cphone.focus();
		return;
	}		
	else if(objForm.cphone.value.length < 11){
		alert("请填写正确的手机号码");
		objForm.cphone.focus();
		return;
	}		
	else if(trim(objForm.code.value) == null){
		alert("请填写验证码");
		objForm.code.focus();
		return;
	}		
	else if(objForm.code.value.length < 4){
		alert("请填写合法的验证码");
		objForm.code.focus();
		return;
	}		
	else
	{	
	var tprm ="email="+document.regFrm.elements["email"].value+"&username="+document.regFrm.elements["name"].value;
	objForm.action="http://kr.shishangqiyi.com/member/EntryBasicMember_pop.asp";
	setTimeout(function(){objForm.submit();},200);
	}
	
}

function AgreeFormOK_wholesale(objForm){		
	objForm=document.regFrm_wholesale;

	if(!objForm.agreement.checked){
		alert("请您仔细阅读《时尚起义用户使用条款》，必须同意此条款才能进行下一步");
		return;
	}		
	else if(trim(objForm.emailcheck.value) == "Y"){
		var alert_msg=$("#emailcheckstr_wholesale").text();
		if(alert_msg==""){
			alert_msg = "电子邮件已存在!";
		}
		alert(alert_msg);
		objForm.email.focus();
		return;
	}	
	else if(trim(objForm.email.value) == null){
		alert("电子邮件不能为空!");
		objForm.email.focus();
		return;
	}	
	else if (!isValidEmail(objForm.email)){
         alert("请输入准确的电子邮件");
		objForm.email.focus();			
		return;		 
     }

	else if(trim(objForm.pass.value) == null){
		alert("请输入密码.");
		objForm.pass.focus();
		return;
	}			
	else if(trim(objForm.pass.value).length > 10){
		alert("请输入10位以内的密码.");
		objForm.pass.focus();
		return;
	}		
	
	else if(objForm.pass.value != objForm.re_pass.value){
		alert("您两次输入的密码不一致，请重新输入");
		objForm.pass.value=""
		objForm.re_pass.value=""
		objForm.pass.focus();
		return;
	}	

	else if(trim(objForm.name.value) == null){
		alert("请输入用户名");
		objForm.name.focus();
		return;
	}
	else if(trim(objForm.sex.value) == null){
		alert("请选择性别");
		objForm.sex.focus();
		return;
	}		
	else if(trim(objForm.cphone.value) == null){
		alert("请填写手机号码");
		objForm.cphone.focus();
		return;
	}		
	else if(objForm.cphone.value.length < 11){
		alert("请填写正确的手机号码");
		objForm.cphone.focus();
		return;
	}		
	else if(trim(objForm.code.value) == null){
		alert("请填写验证码");
		objForm.code.focus();
		return;
	}		
	else if(objForm.code.value.length < 4){
		alert("请填写合法的验证码");
		objForm.code.focus();
		return;
	}		
	else if(objForm.towncheck.value == "N"){
		alert("请选择完整的地区范围");
		objForm.selstate.focus();
		return;
	}		
	else if(trim(objForm.detailaddr.value) == null){
		alert("请填写详细地址");
		objForm.detailaddr.focus();
		return;
	}		
	else
	{	
	var tprm ="email="+document.regFrm.elements["email"].value+"&username="+document.regFrm.elements["name"].value;
	objForm.action="http://kr.shishangqiyi.com/member/EntryBasicMember_pop.asp";
	setTimeout(function(){objForm.submit();},200);
	}
	
}

function reg_select(){
	$("#reg_select>li").click(
		function(){
			if($(this).hasClass("cur")){return};
			$(this).addClass("cur").siblings().removeClass("cur");
			var index = $("#reg_select li").index(this);
			$("#reg_frm>li:eq("+index+")").show().siblings().hide();
			if(index==0){
				$("#pop_login").css("margin-top","-188px");
			}
			else if(index==1){
				$("#pop_login").css("margin-top","-325px");
				bindState();
			}
			safecode(index+1);
		}
	);
}
function login_select(){
	$("#login_select>li").click(
		function(){
			if($(this).hasClass("cur")){return};
			$(this).addClass("cur").siblings().removeClass("cur");
			var memberLevel = $(this).children("a").attr("val");
			document.login.memberLevel.value = memberLevel;
			$("#AlipayDakuaijie").toggle();
		}
	);
}

function bindState(){
	var selstate = $(document.regFrm_wholesale.selstate);
	var selcity = $(document.regFrm_wholesale.selcity);
	var seltown = $(document.regFrm_wholesale.seltown);
	var towncheck = $(document.regFrm_wholesale.towncheck);
	
	if(selstate.children("option").length==0){
			$.ajax({
				type: "POST",
				dataType:"jsonp",
				jsonp: "callback",
				url: "http://kr.shishangqiyi.com/apps/member/getaddr.asp",
				data:"type=state",
				success: function(msg){
					if(msg.result){
						selstate.empty();
						selstate.append("<option value=\"No\" selected >请选择</option>");
						selstate.append("<option value=\"No\" >------------</option>");
						options=msg.State;
						for(var i in options){
							var option=options[i];
							selstate.append("<option value=\"" + option.AddrName + "\" >" + option.AddrName + "</option>");
						}
						
						selcity.hide();
						seltown.hide();
						towncheck.val("N");
						selstate.change(function(e) {
                            bindCity()
                        });
					}
					else{
						alert('地区获取错误，请稍后再试或联系客服！');
					}
				},
				error: function(){
					alert('地区获取错误，请稍后再试或联系客服！');
				}
			});
			
	}
}
function bindCity(){
	var selstate = $(document.regFrm_wholesale.selstate);
	var selcity = $(document.regFrm_wholesale.selcity);
	var seltown = $(document.regFrm_wholesale.seltown);
	var towncheck = $(document.regFrm_wholesale.towncheck);
	if(selstate.val()!="No"){
			$.ajax({
				type: "POST",
				dataType:"jsonp",
				jsonp: "callback",
				url: "http://kr.shishangqiyi.com/apps/member/getaddr.asp",
				data:"type=city&state=" + escape(selstate.val()),
				success: function(msg){
					if(msg.result){
						selcity.empty();
						selcity.append("<option value=\"No\" selected >请选择</option>");
						selcity.append("<option value=\"No\" >------------</option>");
						options=msg.City;
						for(var i in options){
							var option=options[i];
							selcity.append("<option value=\"" + option.AddrName + "\" >" + option.AddrName + "</option>");
						}
						
						selcity.show();
						seltown.hide();
						towncheck.val("N");
						
						selcity.unbind("change").change(function(e) {
							bindTown();
                        });

					}
					else{
						alert('所属市获取错误，请稍后再试或联系客服！');
					}
				},
				error: function(){
					alert('所属市获取错误，请稍后再试或联系客服！');
				}
			});
			
	}
	else{
		alert("请选择所属省");
		towncheck.val("N");
		selcity.hide();
		seltown.hide();
	}
}
function bindTown(){
	var selstate = $(document.regFrm_wholesale.selstate);
	var selcity = $(document.regFrm_wholesale.selcity);
	var seltown = $(document.regFrm_wholesale.seltown);
	var detailaddr = $(document.regFrm_wholesale.detailaddr);
	var towncheck = $(document.regFrm_wholesale.towncheck);
	
	if(selcity.val()!="No"){
			$.ajax({
				type: "POST",
				dataType:"jsonp",
				jsonp: "callback",
				url: "http://kr.shishangqiyi.com/apps/member/getaddr.asp",
				data:"type=town&city=" + escape(selcity.val()),
				success: function(msg){
					if(msg.result){
						seltown.empty();
						seltown.append("<option value=\"No\" selected >请选择</option>");
						seltown.append("<option value=\"No\" >------------</option>");
						options=msg.Town;
						if(options.length==0){
							seltown.hide();
							towncheck.val("Y");
							detailaddr.focus();
						}
						else{
							for(var i in options){
								var option=options[i];
								seltown.append("<option value=\"" + option.AddrName + "\" >" + option.AddrName + "</option>");
							}
							seltown.append("<option value=\"No\" >------------</option>");
							seltown.append("<option value=\"etc\" >其他区域</option>");
							seltown.show();
							towncheck.val("N");
							seltown.unbind("change").change(function(e) {
								_this=$(this);
								if(_this.val()=="No"){
									alert("请选择所属区域");
									towncheck.val("N");
								}
								else{
									towncheck.val("Y");
									detailaddr.focus();
								}
							});
						}
						
					}
					else{
						alert('所属区县获取错误，请稍后再试或联系客服！');
					}
				},
				error: function(){
					alert('所属区县获取错误，请稍后再试或联系客服！');
				}
			});
			
	}
	else{
		alert("请选择所属市");
		towncheck.val("N");
		seltown.hide();
	}
}


function email_book(){
	if($("#bottom_email").val() == ''){
		$("#bottom_email").val("订阅我们的邮件");
	}
	else{
		$(this).css("color","#2b2b2b");
	}
	$("#bottom_email").blur(
		function(){
			if($(this).val()==''){
				$(this).val('订阅我们的邮件');
				$(this).css("color","#CCC");
			}
		}
	);
	$("#bottom_email").focus(
		function(){
			if($(this).val()=='订阅我们的邮件'){
				$(this).val('');
				$(this).css("color","#2b2b2b");
			}
		}
	);
	
	$("#bottom_email_btn").click(
		function(){
			var email=$("#bottom_email").val();
			var sex=$("#bottom_sex").val();
			if(sex==''){
				alert("请选择性别！");
				return;
			}
			if(!isValidEmail($("#bottom_email")[0])){
				alert("请输入准确的电子邮箱!");
				return;
			}
			$.ajax({
				type: "POST",
				dataType:"jsonp",
				jsonp: "callback",
				url: "http://kr.shishangqiyi.com/apps/email_book.asp",
				data:"email="+escape(email)+"&sex="+escape(sex),
				success: function(msg){
					//成功时执行函数
					alert(msg.message);
					if(msg.script != ""){
						setTimeout(msg.script,1000);
					}
				},
				error: function(){
					alert('订阅失败！');
				}
			});
		}
	);
	$("#email_f,#email_m").click(
		function(){
			var _this = $(this);
			$("#email_f,#email_m").removeClass("cur");
			_this.addClass("cur");
			$("#bottom_sex").val(_this.attr("val"));
		}
	);
}

function default_logo(sex){
	if (sex=="f"){
		$(".top_logo").attr("href","http://kr.shishangqiyi.com/");
	}
	if (sex=="m"){
		$(".top_logo").attr("href","http://kr.shishangqiyi.com/shopping_m/");
	}
	if (sex=="l"){
		$(".top_logo").attr("href","http://kr.shishangqiyi.com/shopping_l/");
	}
}

function analyses(userid,username){
	//return;
	if(window.location.host != "www.shishangqiyi.com" && window.location.host != "kr.shishangqiyi.com" ){return;}
	//shishangqiyi
	//var shishangqiyi_protocol = (("https:" == document.location.protocol) ? " https://" : " http://");document.write(unescape("%3Cscript src='" + shishangqiyi_protocol + "www.shishangqiyi.com/union/analyses/main.asp%3Frid%3D"+Math.random()+"' type='text/javascript'%3E%3C/script%3E"));
	
	//cnzz
	var cnzz_protocol = (("https:" == document.location.protocol) ? " https://" : " http://");document.write(unescape("%3Cspan id='cnzz_stat_icon_1254651837' style='display:none'%3E%3C/span%3E%3Cscript src='" + cnzz_protocol + "s95.cnzz.com/z_stat.php%3Fid%3D1254651837' type='text/javascript'%3E%3C/script%3E"));

	//ga
	(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
	
	ga('create', 'UA-63998158-1', 'auto');
	ga('send', 'pageview');
	
	//emar
	window._adwq = window._adwq || [];
	_adwq.push(['_setAccount', 'x551a']);
	_adwq.push(['_setDomainName', '.shishangqiyi.com']);
	_adwq.push(['_trackPageview']);
	
	(function() {
	var adw = document.createElement('script');
	adw.type = 'text/javascript';
	adw.async = true;
	adw.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://s') + '.emarbox.com/js/adw.js';
	var s = document.getElementsByTagName('script')[0];
	s.parentNode.insertBefore(adw, s);
	})();
	
	//品友 20150410
	window._py = window._py || [];
	_py.push(['a', '1N..Co855ye3quz8kTVhmWM31P']);
	_py.push(['domain','stats.ipinyou.com']);
	_py.push(['e','']);
	-function(d) {
		var s = d.createElement('script'),
		e = d.body.getElementsByTagName('script')[0]; e.parentNode.insertBefore(s, e),
		f = 'https:' == location.protocol;
		s.src = (f ? 'https' : 'http') + '://'+(f?'fm.ipinyou.com':'fm.p0y.cn')+'/j/adv.js';
	}(document);
	
	//baidu
	window._hmt =window._hmt || [];
	(function() {
	var hm = document.createElement("script");
	hm.src = "//hm.baidu.com/hm.js?feddf3e9daa230dad06ad2b2cc302f4c";
	var s = document.getElementsByTagName("script")[0]; 
	s.parentNode.insertBefore(hm, s);
	})();
	
	//baidu
	window._mvq = window._mvq || []; 
	//window._mvq = _mvq;
	_mvq.push(['$setAccount', 'm-146-0']);
	if(userid == '' || username == ''){
		_mvq.push(['$setGeneral', '', '', username , userid]);
	}
	_mvq.push(['$logConversion']);
	(function() {
		var mvl = document.createElement('script');
		mvl.type = 'text/javascript'; mvl.async = true;
		mvl.src = ('https:' == document.location.protocol ? 'https://cdn.dsp.com/static/js/loader.js' : 'http://cdn.dsp.com/static/js/loader.js');
		var s = document.getElementsByTagName('script')[0];
		s.parentNode.insertBefore(mvl, s); 
	})();
	
	//airects
	window._gtc = window._gtc || []; 
	_gtc.push(["fnSetAccount", "1206"]);
	_gtc.push(["v", "1"]);
	_gtc.push(["fnGeneral", "arrived"]);
	(function() {
		var nGtc = document.createElement("script");
		nGtc.type = "text/javascript"; nGtc.async = true;
		nGtc.src = ("https:" == document.location.protocol ? "https://sslcdn.istreamsche.com" : "http://ga.istreamsche.com") + "/stat/gtc.js";
		document.getElementsByTagName("head")[0].appendChild(nGtc);
	})();
}

function windowAdapt(){
	var window_width=$(window).width();
	var main_height=$("#wraper").height();
	var main_left = $("#wraper").offset().left;
	if(window_width<1420){
		var margin_left = 160;
		$("#wraper").css("margin-left",margin_left);
		main_height=main_height + 20;
	}
	else{
		$("#wraper").css("margin-left","auto");
		main_height=main_height + $("#guarantee").height() + 85;
	}
	if(main_left>260){
		$("#top_nav").css("margin-left",main_left-260)
	}
	else{
		$("#top_nav").css("margin-left",90)
	}
	$("#top_bar .logo").css("width",$("#wraper").offset().left);
	
	$("#left_bar").height(main_height-15);
}

//--load--//
$(function(){
	$(".saleList .Gpic").lazyload();
	windowAdapt();
	$(window).scroll(
			function(){
				var _scrollHeight = $(document).scrollTop();
				if(_scrollHeight>40){
					$("#top_bar").slideDown("fast");
					$("#right_bar").css("top","40px");
				}
				else{
					$("#top_bar").slideUp("fast");
					$("#right_bar").css("top","126px");
				}
			}
	);
	$(window).resize(function(){
        windowAdapt();
    });
	$("#menu_btn").click(function(){
		var _this = $(this);
		var status = _this.attr("status");
		if(status == "open"){
			status = "close"
			$("#right_bar").animate({"right":"-100px"},"fast",function(){_this.attr("status",status);});
			_this.text("＜");
			setCookie("right_bar", status , 1);
		}
		else{
			status = "open"
			$("#right_bar").animate({"right":"0"},"fast",function(){_this.attr("status",status)});
			_this.text("＞");
			setCookie("right_bar", status , 1);
			
		}
    });
	if(getCookie("right_bar")!="close"){$("#menu_btn").click()}
	
	$("#weichat").mouseenter(function(){
		$("#wechat_pop").show();
    });
	$("#weichat").mouseleave(function(){
		$("#wechat_pop").hide();
    });
	
	rightBar();
	$("#CartCnt,#ZzimCnt,#header_CartCnt,#header_ZzimCnt").addClass("loading");
	$("#cart_btn,#header_cart_btn").click(function(){gotoMyCart()});
	$("#account_btn,#header_account_btn").click(function(){gotoMyPage()});
	$("#login_btn,#header_login_btn").click(function(){login_show()});
	$("#header_logout_btn").click(function(){gotoLogOut()});
	$("#reg_btn,#header_reg_btn").click(function(){reg_show()});
	$("#header_account_btn").mouseenter(function(){$("#header_account_pop").slideDown("fast");});
	$("#header_account").mouseleave(function(){$("#header_account_pop").slideUp("fast");});
	login_select();
	
	checkLogin();
	$.goTop({'item' : '#top_btn','time':200,'scroll':true});	
}) 