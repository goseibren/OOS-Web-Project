
$(function(){
	var $contactimages = $('.custom #contactimages li img');
	var $contactimagebox = $('.custom #contactimages');
	var $headeroverlay = $('.backgroundfixed');

	// $contactimages.css({
	// 	'display': 'none',
	// });

	// $headeroverlay.css({'opacity': '0',});
	// $headeroverlay.animate({'opacity': '1',}, 1250, function(){
	// 	$contactimages.eq(0).fadeIn(400,function(){
	// 		$contactimages.eq(1).fadeIn(400,function(){
	// 			$contactimages.eq(2).fadeIn(400,function(){
	// 				$contactimages.eq(3).fadeIn(400,function(){
	// 					$contactimagebox.css({
	// 						'background': 'black',
	// 					});
	// 				});
	// 			});
	// 		});
	// 	});
	// });

	$contactimages.mouseenter(function(){
		$(this).animate({
			// 'width': '+=70%',
			// 'margin-top': '+=-15%',
			// 'margin-left': '+=-40%',
			'opacity': '+=-0.6',
		}, 500, function(){});
	});
	$contactimages.mouseleave(function(){
		$(this).animate({
			// 'width': '-=70%',
			// 'margin-top': '-=-15%',
			// 'margin-left': '-=-40%',
			'opacity': '-=-0.6',
		}, 500, function(){});
	})
});
