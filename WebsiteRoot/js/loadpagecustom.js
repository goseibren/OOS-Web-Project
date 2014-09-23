$(function(){

	var $headeroverlay = $('#headercoloroverlay');
	var $customimages = $('#customimages div');

	$headeroverlay.animate({opacity: 0.3}, 1800, function(){
		$customimages.eq(0).animate({opacity: 1}, 700, function(){
			$customimages.eq(1).animate({opacity: 1}, 700, function(){
				$customimages.eq(2).animate({opacity: 1}, 700, function(){
				});
			});
		});
	});

	// $customimages.mouseover(function(){
	// 	var $this = $(this);
	// 	$this.animate({opacity: 0}, 500, function(){
	// 	});
	// });

});