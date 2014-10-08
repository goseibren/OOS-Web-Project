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
				$this.prepend('<p class="middletext">Text Will Go Here For Screen Printing<br>Text Will Go Here For Screen Printing<br>Text Will Go Here For Screen Printing<br></p>');
				break;
			case 1:
				$this.prepend('<p class="middletext">Text Will Go Here For Heat Transfer<br>Text Will Go Here For Heat Transfer<br>Text Will Go Here For Heat Transfer</p>');	
				break;
			case 2:
				$this.prepend('<p class="middletext">Text Will Go Here For Stickers/Decals<br>Text Will Go Here For Stickers/Decals<br>Text Will Go Here For Stickers/Decals</p>');
				break;
		}
		$this.prepend('<div id="overlayservicebox"></div>');
		$this.prepend('<img src="images/rectangular.svg" id="contactbutton"></img>');

		var $overlayboxtext = $('#customimages .middletext');
		var $overlayservicebox = $('#overlayservicebox');
		var $customlogo = $this.children('.customlogo');
		var $customlogoring = $this.children('.customlogoring');
		var $contactbutton = $this.children('#contactbutton');

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
			'top': '35%',
			'font-size': '18px',
			'z-index': '100',
		});

		$contactbutton.css({
			'display': 'none',
			'position': 'absolute',
			'z-index': '10',
			'width': '12%',
			'top': '20%',
			'left': '44%',
			'opacity': '0.3',
		});



		$overlayservicebox.animate({'opacity': '0.85'}, 700, function(){
			$overlayboxtext.fadeIn(500, function(){
			});
			$contactbutton.fadeIn(500, function(){});
			// $contactbutton.animate({'opacity': '1'}, 500, function(){
			// 	doBounce($(this), 2, '-1%', 100);
			// 	$contactbutton.animate({'opacity': '0.3'}, 700, function(){});
			// });
		});
		doBounce($customlogo, 3, '-1%', 150);
		// $overlayboxtext.fadeIn(1200, function(){});
		//on hover and on click cases for the contact button
		$contactbutton.mouseenter(function(){
			$(this).css({
				'opacity': '1',
			});
		});
		$contactbutton.mouseleave(function(){
			$(this).css({
				'opacity': '0.5',
				'background': 'none',
			});
		});
		$contactbutton.click(function(){
			//window.location.replace("contact.html");
			//instead of opening new window. popup window.
			var $formselect = $('body form');
			$('body').append('<div class="background-overlay"></div><div class="form-viewer" ><img src="images/exit.svg"></img><div class="form-viewer-inside"><p>Contact Form</p>' + $formselect[0].outerHTML + '</div></div>');
			var $formviewer = $('.form-viewer');
			var $backgroundoverlay = $('body .background-overlay');
			var $formselectviewer = $formviewer.find('form');
			var $formviewerinside = $('.form-viewer-inside');

			$backgroundoverlay.css({
		        'position': 'fixed',
		        'width': '100%',
		        'height': '100%',
		        'z-index': '50',
		        'background': 'black',
		        'opacity': '0.6',
   			});
   			$formviewer.css({
   				'position': 'fixed',
		        'width': '25%',
		        'background': 'white',
		        'z-index': '60',
		        'top': '20%',
		        'left': '40%',
		        'opacity': '1',
		        'padding-bottom': '30%',
		    });
		    $formviewerinside.css({
		    	'position': 'absolute',
		    	'width': '100%',
		    	'height': '100%',
		    	'overflow': 'scroll',
		    	'z-index': '60',
		    });
        // 'display': 'n
   			$formselectviewer.css({
   				'position': 'relative',
   				'display': 'block',
   				'margin': 'auto',
   				'margin': 'auto',
   				'width': '70%',
   				'padding-bottom': '5%',
   			});
   			$formviewerinside.find('p').css({
   				'text-align': 'center',
   				'font-size': '27px',
   				'margin-top': '5%',
   				'margin-bottom': '20px',
   			});
   			$formviewer.find('form input').css({
   				'width': '100%',
   				'padding': '5px',
   				'font-size': '15px',
   			});
   			$formviewer.find('form select').css({

   				'width': '100%',
   				'font-size': '15px',
   			});
   			$formviewer.find('form textarea').css({
   				'width': '100%',
   				'height': '30%',
   				'padding': '6px',
   				'font-size': '13px',
   			});
   			$formviewer.find('form button').css({
   				'width': '50%',
   				'height': '9%',
   				'padding': '5px',
   				'font-size': '13px',
   				'display': 'block',
   				'margin': 'auto',
   			});
   			$formviewer.find('img').css({
   				'position':'absolute',
   				'top': '0',
   				'left': '0',
   				'width': '5%',
   				'z-index': '65',
   			});



   			//when mouse hovers and leaves exit symbol
   			$formviewer.find('img').mouseenter(function(){
   				$formviewer.find('img').attr("src","images/exithover.svg" );
   			});
   			$formviewer.find('img').mouseleave(function(){
   				$formviewer.find('img').attr("src","images/exit.svg" );
   			});


   			//exit the viewer
   			$backgroundoverlay.click(function(){
   				deleteformviewer();
   			});
   			$formviewer.find('img').click(function(){
   				deleteformviewer();
   				
   			});
   			function deleteformviewer(){
   				$backgroundoverlay.remove();
   				$formviewer.remove();
   			}
		});

		// $customimages.eq(currentIndex).animate({
		// 		'width': '+=20%',
		// 		'margin-top': '+=-4%',
		// 		'margin-left': '+=-10%',
		// 	}, 500, function(){
		// });
	});

	$customdivs.mouseleave(function(){
		var $this = $(this);
		var currentIndex = $this.index();
		var $elemToRemove = $('#overlayservicebox');
		var $elemToRemove2 = $('.middletext');
		var $elemToRemove3 = $('#contactbutton');
		$elemToRemove.remove();
		$elemToRemove2.remove();
		$elemToRemove3.remove();
		// $overlayservicebox.animate({'opacity': '0'}, 350, function(){
		// 	$elemToRemove.remove();
		// });
		// $overlayboxtext.fadeOut(350, function(){
		// 	$elemToRemove2.remove();
		// });
	
		// $customimages.eq(currentIndex).animate({
		// 		'width': '-=20%',
		// 		'margin-top': '-=-4%',
		// 		'margin-left': '-=-10%',
		// 	}, 100, function(){				
		// });
	});


});

function doBounce(element, times, distance, speed) {
    for(var i = 0; i < times; i++) {
        element.animate({marginTop: '-='+distance}, speed)
            .animate({marginTop: '+='+distance}, speed);
    }        
}