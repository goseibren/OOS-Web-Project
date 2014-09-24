$(function(){

	var $headeroverlay = $('#headercoloroverlay');
	var $customdivs = $('#customimages div');
	var $customimages = $('#customimages div #custom1,#custom2,#custom3');

	$headeroverlay.animate({opacity: 0.3}, 1250, function(){
		$customdivs.eq(0).animate({opacity: 1}, 500, function(){
			$customdivs.eq(1).animate({opacity: 1}, 500, function(){
				$customdivs.eq(2).animate({opacity: 1}, 500, function(){
				});
			});
		});
	});

	$customdivs.mouseenter(function(){
		var $this = $(this);
		var currentIndex = $this.index();

		switch(currentIndex){
			case 0:
				$this.prepend('<p class="middletext">Text Will Go Here For Screen Printing<br>Text Will Go Here For Screen Printing<br>Text Will Go Here For Screen Printing</p>');
				break;
			case 1:
				$this.prepend('<p class="middletext">Text Will Go Here For Heat Transfer<br>Text Will Go Here For Heat Transfer<br>Text Will Go Here For Heat Transfer</p>');	
				break;
			case 2:
				$this.prepend('<p class="middletext">Text Will Go Here For Stickers/Decals<br>Text Will Go Here For Stickers/Decals<br>Text Will Go Here For Stickers/Decals</p>');
				break;
		}
		$this.prepend('<div id="overlayservicebox"></div>');

		var $overlayboxtext = $('#customimages .middletext');
		var $overlayservicebox = $('#overlayservicebox');

		$overlayservicebox.css({
			'background-color': '0868a5',
			'opacity': '0.85',
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