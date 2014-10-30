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
				$this.prepend('<p class="middletext">Since everything is done in house at OurOwnStyle, we are happy to offer custom screen printing. Do you have your own design that you want printed on a t-shirt? Do you have a family reunion coming up and want t-shirts printed for everyone? For whatever the situation, we would be more than happy to help accommodate your needs. It iss not just limited to t-shirts; we also print on sweatshirts and sweatpants to name a few. Please check with us regarding other types of printables.</p>');
				break;
			case 1:
				$this.prepend('<p class="middletext">Heat transfer plays a big role when it comes to customization. Whether it is adding numbers on a jersey or different colors/designs to an assortment of shirts, heat transfer may be the economical alternative to screen printing.</p>');	
				break;
			case 2:
				$this.prepend('<p class="middletext">We offer fully custom vinyl decals for whatever your needs are. There is no minimum so whether you need one for your car or hundreds for your business, we will be able to take care of you. All that is needed for a quote is a snapshot of the design, quantity, color of vinyl and size.</p>');
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
			'width': '70%',
			'margin': 'auto',
			'text-color': 'white', 
			'text-align': 'center',
			'left': '0',
			'right': '0',
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
			'margin': 'auto',
			'left': '0',
			'right': '0',
			'opacity': '0.3',
		});



		$overlayservicebox.animate({'opacity': '0.85'}, 700, function(){
			$overlayboxtext.fadeIn(500, function(){
			});
			$contactbutton.fadeIn(500, function(){});
		});
		doBounce($customlogo, 3, '-1%', 150);

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
		// $contactbutton.click(function(){
		// 	var $formselect = $('body form');
		// 	$('body').prepend('<div class="background-overlay"></div><div class="form-viewer" ><img src="images/exit.svg"></img><div class="form-viewer-inside"><p>OOS Contact Form</p>' + $formselect[0].outerHTML + '</div></div>');
		// 	var $formviewer = $('.form-viewer');
		// 	var $backgroundoverlay = $('body .background-overlay');
		// 	var $formselectviewer = $formviewer.find('form');
		// 	var $formviewerinside = $('.form-viewer-inside');

		// 	$backgroundoverlay.css({
		//         'position': 'fixed',
		//         'width': '100%',
		//         'height': '100%',
		//         'z-index': '30',
		//         'background': 'black',
		//         'opacity': '0.6', 
  //  			});
  //  			$formviewer.css({
  //  				'position': 'fixed',
		//         'width': '25%',
		//         'background': 'white',
		//         'z-index': '60',
		//         'top': '20%',
		//         'left': '40%',
		//         'opacity': '1',
		//         'padding-bottom': '30%',
		//         'display': 'none',
		//     });
		//     $formviewerinside.css({
		//     	'position': 'absolute',
		//     	'width': '100%',
		//     	'height': '100%',
		//     	'overflow': 'scroll',
		//     	'z-index': '60',
		//     });
  //  			$formselectviewer.css({
  //  				'position': 'relative',
  //  				'display': 'block',
  //  				'margin': 'auto',
  //  				'margin': 'auto',
  //  				'width': '70%',
  //  				'padding-bottom': '5%',
  //  			});
  //  			$formviewerinside.find('p').css({
  //  				'text-align': 'center',
  //  				'font-size': '27px',
  //  				'margin-top': '5%',
  //  				'margin-bottom': '20px',
  //  			});
  //  			$formviewer.find('form input').css({
  //  				'width': '100%',
  //  				'padding': '5px',
  //  				'font-size': '15px',
  //  			});
  //  			$formviewer.find('form select').css({

  //  				'width': '100%',
  //  				'font-size': '15px',
  //  			});
  //  			$formviewer.find('form textarea').css({
  //  				'width': '100%',
  //  				'height': '30%',
  //  				'padding': '6px',
  //  				'font-size': '13px',
  //  			});
  //  			$formviewer.find('form button').css({
  //  				'width': '50%',
  //  				'height': '9%',
  //  				'padding': '5px',
  //  				'font-size': '13px',
  //  				'display': 'block',
  //  				'margin': 'auto',
  //  			});
  //  			$formviewer.find('img').css({
  //  				'position':'absolute',
  //  				'top': '0',
  //  				'left': '0',
  //  				'width': '5%',
  //  				'z-index': '65',
  //  			});

  //  			//to make the default selection to the one the user clicks on.
  //  			$formviewer.find('select option').eq(currentIndex).attr("selected", "selected"); //wow jquery is amazing..


  //  			//when mouse hovers and leaves exit symbol
  //  			$formviewer.find('img').mouseenter(function(){
  //  				$formviewer.find('img').attr("src","images/exithover.svg" );
  //  			});
  //  			$formviewer.find('img').mouseleave(function(){
  //  				$formviewer.find('img').attr("src","images/exit.svg" );
  //  			});


  //  			//exit the viewer
  //  			$backgroundoverlay.click(function(){
  //  				deleteformviewer();
  //  			});
  //  			$formviewer.find('img').click(function(){
  //  				deleteformviewer();
   				
  //  			});
  //  			function deleteformviewer(){
  //  				$formviewer.fadeOut(500,function(){
  //  					$backgroundoverlay.remove();
  //  					$formviewer.remove();
  //  				});

  //  			}

  //  			//ANIMATIONS
  //  			$formviewer.fadeIn(1000, function(){});
		// });
		$contactbutton.click(function(){
		window.location.href = "contact.html";
	});
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
	});

});

function doBounce(element, times, distance, speed) {
    for(var i = 0; i < times; i++) {
        element.animate({marginTop: '-='+distance}, speed)
            .animate({marginTop: '+='+distance}, speed);
    }        
}