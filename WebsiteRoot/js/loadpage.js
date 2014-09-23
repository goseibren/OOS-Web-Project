//document ready. ->
//fade in slide show.. ->
//load header once document (HMTL) has loadded..(after slideshow fades in also...)

var isFading = true;
var isHeader = true;
var isNav = true;
var isSoc = true;
var isSoc2 = true;
var isLogos = true;

var sliderViewerElem = document.querySelector('.slider-viewer');
var headRect = document.querySelector('.headrectwrapper');
// var socMedRect = document.querySelector('.socmedrect');
var navBar = document.querySelector('.nav');
var headerLogo = document.querySelector('.OOSlogo');
var oldLogo = document.querySelector('.oldlogo');

function fadeAnimate(elem,style,unit,from,to,time) {
	isAnimating = true;
	isFading = true;
    if( !elem) {
    	advance();
    	return;
    }
    var start = new Date().getTime();
        fadeTimer = setInterval(function() {
            var step = Math.min(1,(new Date().getTime()-start)/time);
            elem.style[style] = (from+step*(to-from))+unit;
            if( step == 1) {
            	clearInterval(fadeTimer);
            	isFading = false;
            	isAnimating = false;
            }
        },25);
    elem.style[style] = from+unit;
    elem.style["display"] = "inline";
    if(isFading == false){
    	elem.style[style] = to+unit;
    }
}

function headAnimate(elem,style,unit,from,to,time) {
	isHeader = true
	isAnimating = true;
    if( !elem) {
    	advance();
    	return;
    }
    var start = new Date().getTime();
        headerTimer = setInterval(function() {
            var step = Math.min(1,(new Date().getTime()-start)/time);
            elem.style[style] = (from+step*(to-from))+unit;
            if( step == 1) {
            	clearInterval(headerTimer);
            	isHeader = false;
            	isAnimating = false;
            }
        },25);
    elem.style[style] = from+unit;
    elem.style["display"] = "inline";
    if(isHeader == false){
    	elem.style[style] = to+unit;
    }
}

function navAnimate(elem,style,unit,from,to,time) {
	isNav = true
	isAnimating = true;
    if( !elem) {
    	advance();
    	return;
    }
    var start = new Date().getTime();
        naverTimer = setInterval(function() {
            var step = Math.min(1,(new Date().getTime()-start)/time);
            elem.style[style] = (from+step*(to-from))+unit;
            if( step == 1) {
            	clearInterval(naverTimer);
            	isNav = false;
            	isAnimating = false;
            }
        },25);
    elem.style[style] = from+unit;
    elem.style["display"] = "inline";
    if(isNav == false){
    	elem.style[style] = to+unit;
    }
}

function socAnimate(elem,style,unit,from,to,time) {
	isAnimating = true;
	isSoc = true;
    if( !elem) {
    	advance();
    	return;
    }
    var start = new Date().getTime();
        naverTimer = setInterval(function() {
            var step = Math.min(1,(new Date().getTime()-start)/time);
            elem.style[style] = (from+step*(to-from))+unit;
            if( step == 1) {
            	clearInterval(naverTimer);
            	isSoc = false;
            	isAnimating = false;
            }
        },25);
    elem.style[style] = from+unit;
    if(isNav == false){
    	elem.style[style] = to+unit;
    }
}

function socAnimate2(elem,style,unit,from,to,time) {
	isAnimating = true;
	isSoc2 = true;
    if( !elem) {
    	advance();
    	return;
    }
    var start = new Date().getTime();
        naverTimer2 = setInterval(function() {
            var step = Math.min(1,(new Date().getTime()-start)/time);
            elem.style[style] = (from+step*(to-from))+unit;
            if( step == 1) {
            	clearInterval(naverTimer2);
            	isSoc2 = false;
            	isAnimating = false;
            }
        },25);
    elem.style[style] = from+unit;
    if(isNav == false){
    	elem.style[style] = to+unit;
    }
}

function logosAnimate(elem,style,unit,from,to,time) {
	isAnimating = true;
	isLogos = true;
    if( !elem) {
    	advance();
    	return;
    }
    var start = new Date().getTime();
        logosHeadTimer = setInterval(function() {
            var step = Math.min(1,(new Date().getTime()-start)/time);
            elem.style[style] = (from+step*(to-from))+unit;
            if( step == 1) {
            	clearInterval(logosHeadTimer);
            	isLogos = false;
            	isAnimating = false;
            }
        },25);
    elem.style[style] = from+unit;
    elem.style["display"] = "inline";
    if(isNav == false){
    	elem.style[style] = to+unit;
    }
}


fadeAnimate(sliderViewerElem, "opacity", "", 0, 1, 1000); //fade background in

var headTimer = setInterval(function(){ //header pull down
	if(isFading === false){
		headAnimate(headRect, "top", "%", -50, 0, 500);
		clearInterval(headTimer);
	}
}, 200);

var navTimer = setInterval(function(){ //nav pull down
	if(isHeader === false){
		navAnimate(navBar, "top", "%", -10, 0, 1000);
		clearInterval(navTimer);
	}
}, 25);

var logosTimer = setInterval(function(){ //logo fade in.
	if(isNav === false){
		logosAnimate(headerLogo, "opacity", "", 0, 1, 1000);
		logosAnimate(oldLogo, "opacity", "", 0, 1, 1000);
		clearInterval(logosTimer);
	}
}, 25);





