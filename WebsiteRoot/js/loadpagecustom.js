$(function(){

	var $headeroverlay = $('#headercoloroverlay');
	var $customdivs = $('#customimages div');
	var $customimages = $('#customimages div #custom1,#custom2,#custom3');

	$headeroverlay.animate({opacity: 0.3}, 1800, function(){
		$customdivs.eq(0).animate({opacity: 1}, 700, function(){
			$customdivs.eq(1).animate({opacity: 1}, 700, function(){
				$customdivs.eq(2).animate({opacity: 1}, 700, function(){
				});
			});
		});
	});

	$customdivs.mouseenter(function(){
		var $this = $(this);
		$this.prepend('<div id="overlayservicebox"><p>Hi my name is bren</p></div>');
		var $overlayservicebox = $('#overlayservicebox');
		var $overlayboxtext = $('#overlayservicebox p');
		$overlayservicebox.css({
			'background-color': 'black',
			'opacity': '0.7',
			'width': '100%',
			'position': 'absolute',
			'margin-left': '0',
			'margin-top': '0',
			'z-index': '5',
			'height': '9.5%',
			'text-align': 'center',
			'text-color': 'white' 
		});
		$overlayserviceboxtext.css({
			'width': '100%',
			'border': '2px solid red'

		});
	});

	$customdivs.mouseleave(function(){
		var $this = $(this);
		var $elemToRemove = $('#overlayservicebox');
		$elemToRemove.remove();
	});

});