
$(function(){
	var $contactimages = $('.custom #contactimages li img');
	var $contactimagebox = $('.custom #contactimages');
	var $headeroverlay = $('.backgroundfixed');

	$contactimages.css({
		'display': 'none',
	});

	$headeroverlay.css({'opacity': '0',});
	$headeroverlay.animate({'opacity': '1',}, 1250, function(){
		$contactimages.eq(0).fadeIn(400,function(){
			$contactimages.eq(1).fadeIn(400,function(){
				$contactimages.eq(2).fadeIn(400,function(){
					$contactimages.eq(3).fadeIn(400,function(){
					});
				});
			});
		});
	});
});
