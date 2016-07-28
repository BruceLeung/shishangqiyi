;$(function(){
	//绑定详情页数量加减事件
		var $num=$('.goods_numtxt').val();//获得input的值
		//console.log($num);
		//加法事件
		$('.numjia').on('click',function(){
			if($num<5){//数量不能多于5件
			 $num++;
			$('.goods_numtxt').val($num)
			}else{
				alert('亲，每人限购5件哦')
				$('.goods_numtxt').val(5);
			};
			console.log($('.goods_numtxt').val());
		})
		$('.numjian').on('click',function(){
			$num--;
			if($num>0){//数量不能等于或少于0，则减法要大于0才能生效
			
			$('.goods_numtxt').val($num)
			}else{
				alert('数量不能为0')
				$('.goods_numtxt').val(1)
			};
			console.log($('.goods_numtxt').val());
		})
		
		
		//放大镜事件
		//获取图片
		var $goods_img =$('.goods_img');
		var $goods_pic =$('.goods_pic');
		var $goods_imgBigson =$('.goods_imgBigson')
		var $pic_Bigb = $('.goods_imgBigson > img');
		
		//依据要放大的倍数算出跟随鼠标移动的取图框的大小
		var $pWidth = ($goods_img.outerWidth()/$pic_Bigb.outerWidth())*$goods_imgBigson.outerWidth();
		
		var $pHeight = ($goods_img.outerHeight()/$pic_Bigb.outerHeight())*$goods_imgBigson.outerHeight();
		
		//把算出的宽高赋值到小的图框里
		$goods_pic.css({
			width:$pWidth,
			height:$pHeight
		})
		
		var $witchW = $goods_pic.outerWidth();
		var $witchH = $goods_pic.outerHeight();
		
		//给左边正常显示的图片绑定mousemove事件
		$goods_img.on('mousemove',function(e){
			//开始让跟随鼠标移动的小框和右边要放大的图显示出来
			$goods_pic.show();
			$goods_imgBigson.show();
			$goods_img.css('cursor','crosshair');//把鼠标箭头换成十字的
			
			
			//鼠标移动时让小的取图框跟随移动，记下鼠标移动的坐标减去左图距离文档的偏移量后再减去一半的小框的宽高，同时让鼠标显示在小框的中间
			var $disX =e.pageX -$goods_img.offset().left -$witchW/2;
			var $disY =e.pageY -$goods_img.offset().top - $witchH/2;
			
			//
			var $ord = $goods_imgBigson.outerWidth()/$witchW;
			if($disX <= 0){//防止小的取图框跑出左边界
				$disX = 0;
			}else if($disX >= $goods_img.outerWidth()-$witchW){//防止小框跑出右边界
				$disX = $goods_img.outerWidth()-$witchW;
			}
			if($disY <= 0){
				$disY= 0;
			}else if($disY >=$goods_img.outerHeight()-$witchH){
				$disY = $goods_img.outerHeight()-$witchH;
			}
			
			$goods_pic.css({
				left:$disX,
				top:$disY
			})
			$pic_Bigb.css({
				left:-$disX*$ord,
				top:-$disY*$ord
			})
			
		})
		//如果鼠标移出左图则让小的取图框和右边的放大图隐藏
		$goods_img.on('mouseout',function(){
			$goods_pic.hide()
			$goods_imgBigson.hide()
		});
		
});