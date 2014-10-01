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
var $prodElemListItem = $('.productimages li');
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
    }, {duration: 1500, queue: false}, function(){
    });

    $prodBoth.animate({
        'opacity': '1',
    }, {duration: 2000, queue: false}, function(){
    });

});

$prodElemListItem.mouseenter(function(){

    $(this).animate({'opacity': '+=-0.5',}, 300, function(){});
});
$prodElemListItem.mouseleave(function(){
    $(this).animate({'opacity': '-=-0.5',}, 0, function(){});
});

$prodElemListItem.click(function(){
    var $bodyselect = $('body');
    $bodyselect.prepend('<div class="backgroundoverlay"></div>');
    var $backgroundoverlay = $('.backgroundoverlay');
    var $this = $(this);
    var $thisshirtimage = $this.find('img');
    console.log($thisshirtimage[0].outerHTML);
    $backgroundoverlay.css({
        'position': 'fixed',
        'width': '100%',
        'height': '100%',
        'z-index': '50',
        'background': 'black',
        'opacity': '0.6',
    });
    $bodyselect.prepend('<div class="productviewer">' + $thisshirtimage[0].outerHTML + '</div>');
    var $productviewer = $('.productviewer');
    var $shirtpviewerimage = $('.productviewer img');
    $productviewer.css({
        'position': 'fixed',
        'width': '50%',
        'padding-bottom': '35%',
        'background': 'white',
        'z-index': '60',
        'top': '20%',
        'left': '26%',
        // 'display': 'none'
    });
    $productviewer.css({
        'top': '-100%',
    });
    $productviewer.animate({
            'top': '20%',
        }, 800, function(){});

    $backgroundoverlay.click(function(){
        $backgroundoverlay.remove();
        $productviewer.animate({
            'top': '-100%',
        }, 300, function(){
            $productviewer.remove();   
        })
    });
});


