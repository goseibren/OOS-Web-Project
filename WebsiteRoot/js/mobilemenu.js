//mobilemenu for mobile view
$(function (){
var $toprightmobile = $('.top-right-mobile');
var $toprightmobileimg=$('.top-right-mobile img');
var $topmiddlemobile = $('.top-middle-mobile');
var $topmiddlemobileimg = $('.top-middle-mobile img');
var $topleftmobile = $('.top-left-mobile');
var $topleftmobileimg = $('.top-left-mobile img');
var $toplefttabletimg = $('.top-left-tablet img');

$toplefttabletimg.click(function(){
		window.location.href = "index.html";
});
console.log($toplefttabletimg[0].outerHTML);

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
		$dropdownbuttons.append('<a href="lifestyle.html"><li>Lifestyle</li></a>');
		$dropdownbuttons.append('<a href="products2.html"><li>Products</li></a>');
		$dropdownbuttons.append('<a href="custom.html"><li>Custom</li></a>');
		$dropdownbuttons.append('<a href="contact.html"><li>Contact</li></a>');
		$dropdownbuttons.append('<a href="https://www.paypal.com/cgi-bin/webscr?cmd=_cart&business=B9JGLU8BQFTBE&display=1&shopping_url=http://www.ourownstyle.com/products2.html"><li>Cart</li></a>');
		$dropdownbuttons.append('<li><div class="socmedrecttablet"><a href="http://www.instagram.com/ooslifestyle" target="_blank"><img src="images/instagramwhite.png" class="instagram" onmouseover="this.src = "images/instagramhover.png""; onmouseout="this.src="images/instagramwhite.png";"></img></a><a href="http://www.facebook.com/ourownstyle" target="_blank"><img src="images/facebookwhite.png" class="facebook" onmouseover="this.src = "images/facebookwhitehover.png";" onmouseout="this.src="images/facebookwhite.png";"></img></a><a href="http://www.twitter.com/ourownstyle" target="_blank"><img src="images/twitterwhite.png" class="twitter" onmouseover="this.src = "images/twitterhover.png";" onmouseout="this.src="images/twitterwhite.png";"></img></a><a href="http://vimeo.com/user7614489"target="_blank"><img src="images/youtube.png" class="youtube" onmouseover="this.src = "images/youtubehover.png";" onmouseout="this.src="images/youtubew.png";"></img></a></div></li>');

		$('.top-left-mobile img').attr("src", "images/dropdownhover.png");
	}
	else{
		$('.drop-down-menu').remove();
		$('.top-left-mobile img').attr("src", "images/dropdown.png");
	}
});
});
//hover effect for menu items


