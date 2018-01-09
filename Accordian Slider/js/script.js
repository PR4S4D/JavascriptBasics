var action = "click mouseenter";
var speed = "1000";

$(document).ready(function(){
	$('li.q').on(action,function() {
		$(this).next()
			.slideToggle(speed)
			.siblings('li.a')
			.slideUp(speed);

		let img = $(this).children('img');
		$('img').not(img).removeClass('rotate');
		img.toggleClass('rotate');
	})
});