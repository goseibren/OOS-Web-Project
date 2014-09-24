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
		$this.prepend('<div id="overlayservicebox"></div><p class="middletext">Text Will Go Here For Screen Printing</p>');
		var $overlayservicebox = $('#overlayservicebox');
		var $overlayboxtext = $('#customimages .middletext');
		$overlayservicebox.css({
			'background-color': 'black',
			'opacity': '0.7',
			'width': '100%',
			'height': '100%',
			'position': 'absolute',
			'margin-left': '0',
			'margin-top': '0',
			'z-index': '5',
		});
		$overlayboxtext.css({
			'position': 'absolute;',
			'width': '100%',
			'text-color': 'white', 
			'text-align': 'center',
			'left': '0',
			'top': '25%',
			'font-size': '22px',
			'z-index': '100',
		});
	});

	$customdivs.mouseleave(function(){
		var $this = $(this);
		var $elemToRemove = $('#overlayservicebox');
		var $elemToRemove2 = $('.middletext');
		$elemToRemove.remove();
		$elemToRemove2.remove();
	});

});