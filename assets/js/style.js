// 设置高度
$(function(){
	// tab切换事件
	$('.tab').children('a').click(function(e){
		e.preventDefault();
		$(this).addClass('active').siblings().removeClass('active');
		$($(this).attr('href')).addClass('active').siblings().removeClass('active');
		return false;
	});

	// 聊天对话框窗口高度
	var windowHeight = $(window).height();
	$('.msgBox').css('height', (windowHeight-70-40-170)+'px');	
	$('#layout_right').css('height', (windowHeight-70)+'px');
	//跑马灯宽度
	$('#notice-scrollbox').css('width', ($('.title_bar2').width()-$('.horn').width()-$('.mc_t').width()-15) + 'px');

	//滚动事件
	$('.gd').click(function(){
		$(this).toggleClass('active');
		if($(this).hasClass('active')){
			$('#notice-scrollbox marquee')[0].start(); 
		}else{
			$('#notice-scrollbox marquee')[0].stop();
		}
	});

	//清屏事件
	$('.qp').click(function(){
		$('#MsgBox1').empty();
	});

	//滚动条
	$("#layout_right").niceScroll({
		ccursorwidth: "0",
		cursoropacitymax: 0
	});

	$("#MsgBox1").niceScroll({
		cursorcolor: "#bbb",
		cursorwidth: "5px",
		cursorborderradius: "0"
	});
})
