// sliderjavascript

var currIndex = 0; //keep track of current slide. default 0.
var slider = document.querySelector('.slider-viewer');
var slideGroup = document.querySelector('.slide-group');
var slides = document.getElementsByClassName('slide');
var slidebuttons = document.getElementById("slide-buttons");
var arrowbuttons = document.getElementById("arrow-buttons");
//var leftBtnArray = [];
//var rightBtnArray = [];
var botBtnArray =[];
var rightArrowArray = [];
var leftArrowArray = [];
var timeout;
var isAnimating = false;

//wait for 4000 ms then execute anonymous function.
function advance(){
	clearTimeout(timeout); //reset the timeout var
	timeout = setTimeout(function(){ 
	if(currIndex < (slides.length -1)){
			move(currIndex + 1); //move function
		}
		else{
			move(0);
		}
	}, 4500);
}

function move(newIndex){
	var animateLeft, slideLeft;

	advance();

	if(isAnimating === true || currIndex === newIndex){
		return;
	}

	botBtnArray[currIndex].className = "bottombutton" + currIndex;
	botBtnArray[currIndex].innerHTML = "<img src='images/btnbot.svg'></img>";
	botBtnArray[newIndex].className = botBtnArray[newIndex].className + " active";
	botBtnArray[newIndex].innerHTML = "<img src='images/btnbotactive.svg'></img>";

	leftArrowArray[currIndex].className = ".arrowBtnsLeft arrowBtnLeft" + currIndex; //reset to originally class name
	leftArrowArray[currIndex].innerHTML = "";
	leftArrowArray[newIndex].className = leftArrowArray[newIndex].className + " active"; //set to active class name.
	if(newIndex != 0){
		leftArrowArray[newIndex].innerHTML = "<img src = 'images/leftarrow.png' id = 'leftarrow'></img>";
	}

	rightArrowArray[currIndex].className = "arrowBtnsRight arrowBtnRight" + currIndex;
	rightArrowArray[currIndex].innerHTML = "";
	rightArrowArray[newIndex].className = rightArrowArray[newIndex].className + " active";
	if(newIndex != slides.length - 1){
		rightArrowArray[newIndex].innerHTML = "<img src = 'images/rightarrow.png' id = 'rightarrow'></img>";
	}
	// slides[newIndex].style.left = slideLeft;
	// slides[newIndex].style.display = 'block';
	slideAnimate(slideGroup, "left", "%", currIndex*-100, newIndex*-100, 350);
	// slides[currIndex].style.display = 'none';
	// slides[newIndex].style.left = '0';

	currIndex = newIndex;
	
}

function slideAnimate(elem,style,unit,from,to,time) {
	var isAnimating = true;
    if( !elem) {
    	advance();
    	return;
    }
    var start = new Date().getTime();
        var timer = setInterval(function() {
            var step = Math.min(1,(new Date().getTime()-start)/time);
            elem.style[style] = (from+step*(to-from))+unit;
            if( step == 1) {
            	clearInterval(timer);
            	isAnimating = false;
            }
        },1);
    elem.style[style] = from+unit;
}


for(index = 0; index < slides.length; index++){
	//create buttons for each slide. left and right.
	// all slides have bottom buttons.
	var tempIndex;

	var btnBot = document.createElement("buttonBot");
	var arrowBtnLeft = document.createElement("arrowBtnLeft");
	var arrowBtnRight = document.createElement("arrowBtnRight");

	arrowBtnLeft.className = ".arrowBtnsLeft arrowBtnLeft" + index;
	arrowBtnRight.className = "arrowBtnsRight arrowBtnRight" + index;
	btnBot.className = "bottombutton" + index;

	if(index === 0){
		btnBot.innerHTML = "<img src='images/btnbotactive.svg'></img>";
		//arrowBtnLeft.innerHTML = "<img src = 'images/leftarrow.png' id = 'leftarrow'></img>";
		arrowBtnRight.innerHTML = "<img src = 'images/rightarrow.png' id = 'rightarrow'></img>";

		//arrowBtnLeft.style.opacity= "0";

		var leftArrowEvent = document.createAttribute("onclick");
		leftArrowEvent.value = "move(" + (slides.length - 1) + ")";
		arrowBtnLeft.setAttributeNode(leftArrowEvent);
		var rightArrowEvent = document.createAttribute("onclick");
		rightArrowEvent.value = "move(" + (index + 1) + ")";
		arrowBtnRight.setAttributeNode(rightArrowEvent);
	}
	else if(index === (slides.length - 1)){
		btnBot.innerHTML = "<img src='images/btnbot.svg'></img>";

		var leftArrowEvent = document.createAttribute("onclick");
		leftArrowEvent.value = "move(" + (index - 1) + ")";
		arrowBtnLeft.setAttributeNode(leftArrowEvent);
		var rightArrowEvent = document.createAttribute("onclick");
		rightArrowEvent.value = "move(" + (0) + ")";
		arrowBtnRight.setAttributeNode(rightArrowEvent);
	}
	else{
		btnBot.innerHTML = "<img src='images/btnbot.svg'></img>";

		var leftArrowEvent = document.createAttribute("onclick");
		leftArrowEvent.value = "move(" + (index - 1) + ")";
		arrowBtnLeft.setAttributeNode(leftArrowEvent);
		var rightArrowEvent = document.createAttribute("onclick");
		rightArrowEvent.value = "move(" + (index + 1) + ")";
		arrowBtnRight.setAttributeNode(rightArrowEvent);
	}
	//create event for button
	var clickEvent = document.createAttribute("onclick");
	clickEvent.value = "move(" + index + ")";
	btnBot.setAttributeNode(clickEvent);

	//if index is currindex then make it active class.
	if (index === currIndex){
		btnBot.className = btnBot.className + " active";
		arrowBtnLeft.className = arrowBtnLeft.className + " active";
		arrowBtnRight.className = arrowBtnRight.className + " active";
	}

	slidebuttons.appendChild(btnBot);
	arrowbuttons.appendChild(arrowBtnLeft);
	arrowbuttons.appendChild(arrowBtnRight);

	botBtnArray[index] = btnBot;
	leftArrowArray[index] = arrowBtnLeft
	rightArrowArray[index] = arrowBtnRight;

}

advance();

var $buttons = $('buttonbot');
$buttons.mouseenter(function(){
	$(this).animate({'opacity': '+=0.5'}, 300, function(){
	});
});
$buttons.mouseleave(function(){
	$(this).animate({'opacity': '-=0.5'}, 0, function(){
	});
})
 

