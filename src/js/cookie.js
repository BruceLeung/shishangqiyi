<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>购物车页面</title>
<style>
		/*ul{list-style: none;padding:0;margin:0;}
		#cartList li{position:relative;padding-bottom:15px;margin-bottom:15px;border-bottom:1px solid #ddd;}
		#cartList li .btn-close{position:absolute;top:0;right:0;padding:0 5px;cursor:default;}
		#cartList li .btn-close:hover{background-color:#f00;color:#fff;}
		#cartList img{display:block;width:100px;}
		.price{color:#f00;}
		.price::before{
			content:'￥';
		}
		.subPrice{padding:5px 20px;color:#f00;font-weight:bold;text-align:right;}*/
</style>
<script src="jquery-1.12.0.js"></script>
<script>
jQuery(function($){
	//获取cookie，把商品信息写入#cartList

	render();

	// 点击删除cookie
	$('#cartList').on('click','.btn-close',function(){
		var $li = $(this).closest('li');
		var goodsname = $li.attr('data-goodsname');

		// 把过期时间设置成昨天
		var now = new Date();
		now.setDate(now.getDate()-1);

		// 删除cookie
		document.cookie = goodsname + '=null;expires=' + now;

		// 移除html
		$li.remove();

		// location.reload();
		render();
	});


	function render(){
		var _cookie = document.cookie.split('; ');
		// 遍历cookie
		var $ul = $('<ul/>');
		var subPrice = 0;
		if(_cookie != ''){
			$.each(_cookie,function(idx,val){
				var info = JSON.parse(val.split('=')[1]);
				console(info);
				var $li = $('<li/>').attr('data-goodsname',val.split('=')[0]);
				var $img = $('<img/>').attr('src',info.imgurl);
				var $title = $('<p/>').addClass('title').text(info.name);
				var $price = $('<p/>').addClass('price').html(info.price + '&times;' + info.qty);
				var $btnClose = $('<span/>').addClass('btn-close').html('&times;');
				$li.append([$img,$title,$price,$btnClose]).appendTo($ul);

				// 计算总价
				subPrice += info.price * info.qty;
			});
		}
		
		$('#cartList').empty();
		$ul.appendTo('#cartList');

		// toFixed(n): 保持小数点后n位，自动四舍五入，返回一个字符串
		$('.subPrice').html('&yen;' + subPrice.toFixed(2));
	}
});
	</script>
</head>
<body>
	<div id="cartList"></div>
	<div class="subPrice"></div>
	<button>提交订单</button>
</body>
</html>