//mobilemenu for mobile view

var $toprightmobile = $('.top-right-mobile');
var $toprightmobileimg=$('.top-right-mobile img');
var $topmiddlemobile = $('.top-middle-mobile');
var $topmiddlemobileimg = $('.top-middle-mobile img');
var $topleftmobile = $('.top-left-mobile');
var $topleftmobileimg = $('.top-left-mobile img');

var dropdownbool = false;

//when user clicks on topmiddlemobile direct to index.html
$topmiddlemobileimg.click(function(){
	window.location.href = "index.html";
});

//Top Left Mobile Menu!
dropdownmenuhtml = "<div class='drop-down-menu'></div>";

//insert after nav when drop menu is clicked on
$('.top-left-mobile img').click(function(){
	if($('.drop-down-menu').length === 0){
		$('body .nav').after(dropdownmenuhtml);
		var $dropdownmenu = $('.drop-down-menu');
		$dropdownmenu.append("<ul class='drop-down-menu-buttons'></ul>");
		var $dropdownbuttons = $('.drop-down-menu-buttons');
		$dropdownbuttons.append('<a href="index.html"><li>Home</li></a>');
		$dropdownbuttons.append('<a href="http://www.ourownlifestyle.com" target="_blank"><li>Lifestyle</li></a>');
		$dropdownbuttons.append('<a href="products2.html"><li>Products</li></a>');
		$dropdownbuttons.append('<a href="custom.html"><li>Custom</li></a>');
		$dropdownbuttons.append('<a href="contact.html"><li>Contact</li></a>');
		$dropdownbuttons.append('<a href="https://www.paypal.com/cgi-bin/webscr?cmd=_cart&business=B9JGLU8BQFTBE&display=1&shopping_url=http://www.ourownstyle.com/products2.html"><li>Cart</li></a>');
	}
	else{
		$('.drop-down-menu').remove();
	}
});

