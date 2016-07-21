
var CartCnt= CartCnt || "";
CartCnt= "0";
var ZzimCnt= ZzimCnt || "";
ZzimCnt= "0";

var LoginName= LoginName || "";
var GroupMember= GroupMember || "";
var MemberRate= MemberRate || "";
var nextGroupMember= nextGroupMember || "";
var SumOrder= SumOrder || "";
var nextSumOrder= nextSumOrder || "";

var sumCoupon= sumCoupon || "";
var Emoney= Emoney || "";
var Cash= Cash || "";


LoginName= "若飞";
GroupMember= "";
MemberRate= "";
nextGroupMember= "";
SumOrder= "0";
nextSumOrder= "";

sumCoupon= "0";
Emoney= "5";
Cash= "0";

$("#header_account,#header_logout,#account").show();
$("#header_login,#login").hide();
$("#zzim_btn,#header_zzim_btn").unbind("click").click(function(){gotoMyzzim()});
login_hide();

$("#header_account_pop").html('<span>' + LoginName + ' 会员 您的帐户有<a href="http://kr.shishangqiyi.com/my/myCoupon.asp">优惠券:' + sumCoupon + '张</a> / <a href="http://kr.shishangqiyi.com/my/myEmoney.asp">积分:' + Emoney + '元</a> / <a href="http://kr.shishangqiyi.com/my/myCash.asp">预付款:' + Cash + '元</a></span>');

$("#ad_wholesale").click(function(){alert("请先注册/登录，成功后可查看代理政策!");reg_show();$("#reg_select>li:eq(1)").click();});


$("#CartCnt,#header_CartCnt").text(CartCnt).removeClass("loading");
$("#ZzimCnt,#header_ZzimCnt").text(ZzimCnt).removeClass("loading");