$(function(){
	var $headeroverlay = $('.backgroundfixed');
	$headeroverlay.css({'opacity': '0',});
	$headeroverlay.animate({'opacity': '1',}, {duration: 1250, queue: false}, function(){});
});