;$(function(){
	//绑定购物车页数量加减事件
		//var $cart_goodsNum=$('.cart_goodsnumtext').val();
		//var $cart_xiaojiNum=$('.cart_xiaojiNum').text();
		//增加数量增加总价事件
		$('.cart_numJia').on('click',function(){
			var num1=$('.cart_goodsnumtext').val();
			
			num1 =parseInt(num1);
			if(num1<5){
			num1 =num1+1;
			$('.cart_goodsnumtext').val(num1);
			num1 = num1*118.00;
			
			$('.cart_xiaojiNum').text(num1);
			$('.cart_shangpinjine').text(num1);
			$('.cart_payjine').text(num1);
			}else{
				$('.cart_goodsnumtext').val(5);
				$('.cart_xiaojiNum').text(590);
				alert('亲，每人限购五件哦')
			}
		});
		
		//减去数量减去总价事件
		$('.cart_numJian').on('click',function(){
			var num1=$('.cart_goodsnumtext').val();
			
			num1 =parseInt(num1);
			if(num1>1){
			num1 =num1-1;
			$('.cart_goodsnumtext').val(num1);
			num1 = num1*118.00;
			
			$('.cart_xiaojiNum').text(num1);
			$('.cart_shangpinjine').text(num1);
			$('.cart_payjine').text(num1);
			}else{
				$('.cart_goodsnumtext').val(1);
				$('.cart_xiaojiNum').text(118);
				alert('数量不能为0')
			}
		});
		
		//给购物车删除按钮绑定弹窗确认事件
		$('.cart_delete').on('click',function(){
			if(window.confirm("确定要删除吗")){
				$('.cart_item').remove();
			}
		
		});
});