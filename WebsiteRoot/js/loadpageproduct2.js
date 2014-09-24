//*******************************//
//***JAVASCRIPT IMPLEMENTATION***//
//*******************************//

// var isProdHeader = true;
// var isProducts = true;

// var prodHeadElem = document.querySelector('.backgroundfixed');
// var prodElem = document.querySelectorAll('.productimages img');
// var prodElemText = document.querySelectorAll('.productimages p');

// function animateProdHeader(elem,style,unit,from,to,time) {
// 	isAnimating = true;
//     isProdHeader = true;
//     if( !elem) {
//     	advance();
//     	return;
//     }
//     var start = new Date().getTime();
//         var animProdHeaderTimer = setInterval(function() {
//             var step = Math.min(1,(new Date().getTime()-start)/time);
//             elem.style[style] = (from+step*(to-from))+unit;
//             if( step == 1) {
//             	clearInterval(animProdHeaderTimer);
//             	isAnimating = false;
//                 isProdHeader = false;
//             }
//         },25);
//     elem.style[style] = from+unit;
// }

// function animateProducts(elem,style,unit,from,to,time) {
//     isAnimating = true;
//     isProducts = true;
//     if( !elem) {
//         advance();
//         return;
//     }
//     var start = new Date().getTime();
//         var productTimer = setInterval(function() {
//             var step = Math.min(1,(new Date().getTime()-start)/time);
//             elem.style[style] = (from+step*(to-from))+unit;
//             if( step == 1) {
//                 clearInterval(productTimer);
//                 isAnimating = false;
//                 isProducts = false;
//             }
//         },25);
//     elem.style[style] = from+unit;
// }

// animateProdHeader(prodHeadElem, "opacity", "", 0, 1, 1250);

// var productWaitTimer = setInterval(function(){ //logo fade in.
//     console.log(isProdHeader);
//     if(isProdHeader === false){
//         console.log("hi");
//         for(var i=0; i < prodElem.length; i++){
//             animateProducts(prodElem[i], "opacity", "", 0, 1, 1500);
//             animateProducts(prodElemText[i], "opacity", "", 0, 1, 1500);
//             animateProducts(prodElem[i], "margin-top", "%", -8, 0, 1200);
//             animateProducts(prodElem[i], "top", "%", -8, 0, 1200);
//         }
//         for(var i=0; i < prodElemText.length; i++){
//             animateProducts(prodElemText[i], "opacity", "", 0, 1, 1500);
//         }
//         clearInterval(productWaitTimer);
//     }
// }, 25);


//***************************//
//***JQUERY IMPLEMENTATION***//
//***************************//

var $prodHeadElem = $('.backgroundfixed');
var $prodElem = $('.productimages img');
var $prodElemText = $('.productimages ul p');
var $prodBoth = $prodElem.add($prodElemText);

$prodHeadElem.css({'opacity': '0'}); //default to 0
$prodHeadElem.animate({opacity: 1}, 1250, function(){
    $prodElem.css({
        'margin-top': '-10%',
        'top': '-10%',
        'opacity': '0',
    });
    $prodElemText.css({
        'margin-top': '-4%',
        'top': '-4%',
        'opacity': '0',
    });


    $prodBoth.animate({
        'margin-top': '0%',
        'top': '0%',
    }, {duration: 2000, queue: false}, function(){
    });

    $prodBoth.animate({
        'opacity': '1',
    }, {duration: 3000, queue: false}, function(){
    });

});
