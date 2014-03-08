$(document).ready(function(){
	$(".box").click(function(){
		$(this).addClass("blue_box");
		if($('.blue_box').length === $(".box").length) {
			setTimeout(function(){
				$(".box").removeClass("blue_box").addClass("red_box");
			}, 1000);
		}
	})
})