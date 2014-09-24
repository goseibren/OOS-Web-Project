$(function (){

	var $headeroverlay = $('.backgroundfixed');
	var $customdivs = $('#customimages div');
	var $customimages = $('#customimages div #custom1,#custom2,#custom3');

	$headeroverlay.css({'opacity': '0',});
	$headeroverlay.animate({'opacity': '1'}, 1250, function(){
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
		var $customlogo = $this.children('.customlogo');
		var $customlogoring = $this.children('.customlogoring');

		$overlayservicebox.css({
			'background-color': '0868a5',
			// 'opacity': '0.85',
			'width': '100%',
			'height': '100%',
			'position': 'absolute',
			'margin-left': '0',
			'margin-top': '0',
			'z-index': '5',
		});
		$overlayboxtext.css({
			'display': 'none',
			'position': 'absolute;',
			'width': '100%',
			'text-color': 'white', 
			'text-align': 'center',
			'left': '0',
			'top': '25%',
			'font-size': '22px',
			'z-index': '100',

		});
		$overlayservicebox.animate({'opacity': '0.85'}, 400, function(){
			$overlayboxtext.fadeIn(1000, function(){});
		});
		doBounce($customlogo, 3, '-1%', 150);
		// $overlayboxtext.fadeIn(1200, function(){});


	});

	$customdivs.mouseleave(function(){
		var $this = $(this);
		var $elemToRemove = $('#overlayservicebox');
		var $elemToRemove2 = $('.middletext');
		$elemToRemove.remove();
		$elemToRemove2.remove();
		// $overlayservicebox.animate({'opacity': '0'}, 350, function(){
		// 	$elemToRemove.remove();
		// });
		// $overlayboxtext.fadeOut(350, function(){
		// 	$elemToRemove2.remove();
		// });
	});

});

function doBounce(element, times, distance, speed) {
    for(var i = 0; i < times; i++) {
        element.animate({marginTop: '-='+distance}, speed)
            .animate({marginTop: '+='+distance}, speed);
    }        
}