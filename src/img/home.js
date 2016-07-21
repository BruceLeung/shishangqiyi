function banner_slide(){
	var defaultOpts = {interval:5000,fadeInTime:300,fadeOutTime:200};
	var _titles = $("ul.slide-txt li");
	var _titles_bg = $("ul.op li");
	var _bodies = $("ul.slide-pic li");
	var _count = _titles.length;
	var _current = 0;
	var _intervalID = null;
	var stop = function(){ window.clearInterval(_intervalID); };
	var slide = function(opts) {
		if (opts) {
			_current = opts.current || 0;
		} else {
			_current = (_current >= (_count - 1)) ? 0 : (++_current);
		};
		_bodies.filter(":visible").fadeOut(defaultOpts.fadeOutTime, function() {
			_bodies.eq(_current).fadeIn(defaultOpts.fadeInTime);
			_bodies.removeClass("cur").eq(_current).addClass("cur");
		});
		$("#li1,#li2,#li3,#li4,#li5").attr("src","http://img3.essxd.com/kr_2016/images/home/btn1.png");
		$("#li"+(_current+1)).attr("src","http://img3.essxd.com/kr_2016/images/home/btn2.png");
		_titles.removeClass("cur").eq(_current).addClass("cur");
		_titles_bg.removeClass("cur").eq(_current).addClass("cur");
	}; //endof slide
	var go = function() {
		stop();
		_intervalID = window.setInterval(function(){slide();}, defaultOpts.interval);
	}; //endof go
	var itemMouseOver = function(target, items) {
		stop();
		var i = $.inArray(target, items);
		slide({ current: i });
	}; //endof itemMouseOver
	_titles.hover(function() { if($(this).attr('class')!='cur'){itemMouseOver(this, _titles); }else{stop();}}, go);
	//_titles_bg.hover(function() { itemMouseOver(this, _titles_bg); }, go);
	_bodies.hover(stop, go);
	//trigger the slidebox
	go();
}

$(function(){
	$(".best_list .Gpic").lazyload();
	$(".best_list li").mouseenter(
		function(){
			var _this = $(this);
			_this.find(".mask").show();
		}
	);
	$(".best_list li").mouseleave(
		function(){
			var _this = $(this);
			_this.find(".mask").hide();
		}
	);
	banner_slide();
})

function bannerShow(){
	$(".best_wrap").mouseover(function(event){
		$(this).children('.etc').show();
		$(this).css("position","relative");
	});
	$(".best_wrap").mouseout(function(event){
		$(this).children('.etc').hide();
		$(this).css("position","inherit");
	});
	$(".bigbest_wrap").mouseover(function(event){
		$(this).children('.bigetc').show();
	});
	$(".bigbest_wrap").mouseout(function(event){
		$(this).children(".bigetc").hide();
	});
}