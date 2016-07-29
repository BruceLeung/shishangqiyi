;$(function(){
	//绑定右侧个人导航栏隐藏和显示点击事件
	$('.menu_btn').on('click',function(){
		var $right_bar=$('.right_bar');
		if($right_bar.is(':visible')){
			$right_bar.css('display','none');
			$('.menu_btn').css({position:'absolute',left:100}).html('<');
		}else{
			$right_bar.css({display:'block',float:'right'});
			$('.menu_btn').css({position:'absolute',left:0}).html('>')
			
		}
	})
	
	 
       /* $(window).scroll(function () {
			var offset = $(".back_top").offset();
            var scrollTop = $(window).scrollTop();
            //如果距离顶部的距离小于浏览器滚动的距离，则添加fixed属性。
            if (offset.top < scrollTop){ $(".back_top").addClass("fixed");
			}
            //否则清除fixed的css属性
            else{ $(".back_top").removeClass("fixed");}
        });*/
		//获取页面元素
		var $idx_conTop =$('.idx_conTop');
		var $conTop_left = $('.conTop_left');
		
		var $ctl_nav =$('.ctl_nav');
		var index = 0;
		
		//图片数量
		var len = $conTop_left.find('li').length;
		
		//初始化
		show();
		
		//设置定时器，3秒换一张图片
		var timer;
		
		//鼠标移入清除定时器，鼠标移出重启定时器
		$conTop_left.on('mouseenter',function(){
			clearInterval(timer);
		}).on('mouseleave',function(){
			timer = setInterval(carousel,3000);
		}).trigger('mouseleave')
		
		//轮播函数
		function carousel(){
			index++;
			show();
		}
		
		//显示图片的函数
		function show(){
			//处理index值，使其实现循环轮播
			if(index<0){
				index = len - 1;
			}else if(index > len - 1){
				index = 0;
			}
			//图片轮播
			$conTop_left.find('li').eq(index).fadeIn('fast').siblings().fadeOut('fast')//animate({opacity:0})
			
			//切换图片显示导航高亮
			$ctl_nav.find('li').css('background','').eq(index).css('background','#fff');
		}
		
		//悬停到导航时显示更换图片
		$ctl_nav.on('mouseenter click','li',function(){
			index =$(this).index();
			show();
			clearInterval(timer);
		}).on('mouseleave','li',function(){
			timer=setInterval(function(){
				index++;
				if(index>len - 1){
					index=0;
				}
				show();
			},3000);
		});
		
		//右侧边栏“关注微信”悬停显示二维码事件
		$('.wechat').on('mouseenter',function(){
			$('.wechat_box').show();
		}).on('mouseleave',function(){
			$('.wechat_box').hide();
		})
		
		

		


		
		
		//登录框事件
		$register_link =$('.register_link');//获取头部登录链接
		$index_register =$('.index_register')//获取登录框元素
		$register_close =$('.register_close');//获取登录框关闭按钮元素
		$register_btn =$('.register_btn');//获取登录框登录按钮元素
		$shade =$('.shade');//获取遮罩层元素
		
		
		
		//绑定头部登录链接点击事件
		$register_link.on('click',function(){
			$shade.css('display','block')
			$index_register.css('display','block')
			$('.prompt').remove();
		})
		
		//绑定关闭按钮点击事件
		$register_close.on('click',function(){
			$shade.css('display','none')
			$index_register.css('display','none')
			$('.user_email,.user_password').val("")
		})
		
		//绑定登录按钮事件
		$register_btn.on('click',function(){
			$shade.css('display','none')
			$index_register.css('display','none')
			$('.user_email,.user_password').val("")//点击登录按钮后清除文本框的内容
		})
		
		
		//登录框验证事件
		$('.user_email').on('blur',function(){
			var $email_check=$('.user_email').val();
			$('.prompt').remove();
			if(!/^\w[\w\-\.]*@[0-9a-zA-Z\-]{2,}\.[a-zA-Z]{2,}$/.test($email_check)){
				$('<div style="color:red;" class="prompt">你输入的邮箱不合法!</div>').insertAfter('.user_email');
			}
		})
		
		//密码框验证事件
		$('.user_password').on('blur',function(){
			var $password_check=$('.user_password').val();
			$('.prompt').remove();
			if(!/^\S{1,20}$/.test($password_check)){
					$('<div style="color:red;" class="prompt">密码不能包含空格</div>').insertAfter('.user_password');
				}else if(!/^\w{5,19}$/.test($password_check)){
					$('<div style="color:red;" class="prompt">密码长度在6~20位之间</div>').insertAfter('.user_password');
				}
		})
		
		
		$zhuce_link =$('.zhuce_link');
		$index_zhuce =$('.index_zhuce');
		$zhuce_close =$('.zhuce_close');
		$zhuce_btn =$('.zhuce_btn');
		
		//绑定注册链接点击事件
		$zhuce_link.on('click',function(){
			$shade.css('display','block')
			$index_zhuce.css('display','block')
			$('.prompt').remove();
		})
		
		//绑定关闭按钮点击事件
		$zhuce_close.on('click',function(){
			$shade.css('display','none')
			$index_zhuce.css('display','none')
			$('.zhuce_email,.zhucede_password').val("")
			
			$('.second_password,.zhuce_username').val("")
			$('.zhuce_phoneNum,.zhuce_yanzhengma').val("")
		})
		
		//绑定注册按钮事件
		$zhuce_btn.on('click',function(){
			$shade.css('display','none')
			//$index_zhuce.css('display','none')
			$('.zhuce_email,.zhucede_password').val("")
			
			$('.second_password,.zhuce_username').val("")
			$('.zhuce_phoneNum,.zhuce_yanzhengma').val("")
			//点击登录按钮后清除文本框的内容
		})
		
		//绑定注册页面内登录链接的跳转事件
		$('.oldUser_register').on('click',function(){
			$index_zhuce.css('display','none')
			$index_register.css('display','block')
			$('.prompt').remove();
		})
		
		//绑定登录页面内注册链接的跳转事件
		$('.new_userzhuce').on('click',function(){
			$index_zhuce.css('display','block')
			$index_register.css('display','none')
			$('.prompt').remove();
		})
		
		
		
		
		
		//注册框电子邮件验证事件
		$('.zhuce_email').on('blur',function(){
			var $email_check=$('.zhuce_email').val();
			$('.prompt').remove();
			if(!/^\w[\w\-\.]*@[0-9a-zA-Z\-]{2,}\.[a-zA-Z]{2,}$/.test($email_check)){
				$('<div style="color:red;" class="prompt">你输入的邮箱不合法!</div>').insertAfter('.zhuce_email');
			}
		})
		
		
		//注册页面密码框验证事件
		$('.zhucede_password').on('blur',function(){
			var $password_check=$('.zhucede_password').val();
			$('.prompt').remove();
			if(!/^\S{1,20}$/.test($password_check)){
					$('<div style="color:red;" class="prompt">密码不能包含空格</div>').insertAfter('.zhuce_password');
				}else if(!/^\w{5,19}$/.test($password_check)){
					$('<div style="color:red;" class="prompt">密码长度在6~20位之间</div>').insertAfter('.zhuce_password');
				}
		})
		
		
		
		//注册页面的确认密码验证
		$('.second_password').on('blur',function(){
					var $second_password = $('.second_password').val();
					var $zhucede_password = $('.zhucede_password').val();
					$('.prompt').remove();
					if($second_password != $zhucede_password){
						$('<div style="color:red;" class="prompt">两次输入密码不一致</div>').insertAfter('.zhuce_password');
					}
		})
		
		
		

		//注册页面的用户名验证
		$('.zhuce_username').on('blur',function(){
			var $zhuce_username = $('.zhuce_username').val();
			$('.prompt').remove();
			if(/^\s*$/.test($zhuce_username)){
				$('<div style="color:red;" class="prompt">用户名不能为空！</div>').insertAfter('.user_infomation');
			}else if(!/^\w{6,20}$/.test($zhuce_username)){
				$('<div style="color:red;" class="prompt">用户名不能包含特殊字符并且长度在6~20位！</div>').insertAfter('.user_infomation');
			}
		})
		
		
		//注册页面手机号码验证事件
		$('.zhuce_phoneNum').on('blur',function(){
				var $zhuce_phoneNum = $('.zhuce_phoneNum').val();
				$('.prompt').remove();
				if(!/^1[34578]\d{9}$/.test($zhuce_phoneNum)){
					$('<div style="color:red;" class="prompt">你输入的手机号码不合法!</div>').insertAfter('.phone_yanzhengma');
				}
		})
		
		//注册页面验证码验证事件
		$('.zhuce_yanzhengma').on('blur',function(){
			var $zhuce_yanzhengma =$('.zhuce_yanzhengma').val();
			$('.prompt').remove();
			if(/^\s*$/.test($zhuce_yanzhengma)){
				$('<div style="color:red;" class="prompt">验证码不能为空！</div>').insertAfter('.phone_yanzhengma');
			}
		})
		
		//绑定头部滚动出现导航栏事件
		var $head_topNav =$('.head_topNav');
		
		$(window).on('scroll',function(){
			var scrollTop =$(window).scrollTop();
			
			if(scrollTop==0){
				$head_topNav.slideUp();//滚动距离窗口顶部时导航栏收起来
			}else{
				$head_topNav.slideDown();//滚动滚轮时导航栏拉下来
			};
		});
		
		
		
		//获得input的值
		//console.log($num);
		//加法事件
		/*$('.cart_numJia').on('click',function(){
			var $cart_xiaojiNum=$('.cart_xiaojiNum').text();
			
			
			if($cart_goodsNum<5){//数量不能多于5件
			 $cart_goodsNum++;
			 $cart_xiaojiNum+=parseInt($cart_xiaojiNum)*$cart_goodsNum;
			 
			$('.cart_goodsnumtext').val($cart_goodsNum)
			$('.cart_xiaojiNum').text($cart_xiaojiNum)
			}else{
				alert('亲，每人限购5件哦')
				$('.cart_goodsnumtext').val(5);
			};
			console.log($('.cart_goodsnumtext').val());
		})
		$('.cart_numJian').on('click',function(){
			$cart_goodsNum--;
			if($cart_goodsNum>0){//数量不能等于或少于0，则减法要大于0才能生效
			
			$('.cart_goodsnumtext').val($cart_goodsNum)
			}else{
				alert('数量不能为0')
				$('.cart_goodsnumtext').val(1)
			};
			console.log($('.cart_goodsnumtext').val());
		})*/
		
		
		$('.zhuce_btn').on('click',function(){
			//console.log($('.zhuce_btn'));
			console.log(1);
			var youjian = $('.zhuce_email').val();
			console.log(youjian);
			var $userpassword =$('.zhucede_password').val();
			//console.log($dianyou);
			console.log(2);
			//console.log($userpassword);
			var ordd ={};
			ordd.email1 = youjian;
			ordd.password = $userpassword;
			var _cookie ='ordd='+JSON.stringify(ordd);
			
			document.cookie = _cookie +';path=/';
			alert('注册成功');
			//window.open("../html/shangpinxiangqingye.html");
		})
		
		
		
		
		
});

