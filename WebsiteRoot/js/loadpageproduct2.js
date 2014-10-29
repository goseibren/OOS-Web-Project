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
var $prodElemListItem = $('.main-content li');
var $prodElem = $('.main-content ul img');
var $prodElemText = $('.main-content ul p');
var $prodBoth = $prodElem.add($prodElemText);

$prodHeadElem.css({'opacity': '0'}); //default to 0
$prodHeadElem.animate({opacity: 1}, 1250, function(){
    $prodElem.css({
        'margin-top': '-10%',
        'top': '-10%',
        'opacity': '0',
    });
    $prodElemText.css({
        'opacity': '0',
    });


    $prodElem.animate({
        'margin-top': '0%',
        'top': '0%',
        'opacity': '1',
    }, 1300, function(){
        $prodElemText.animate({
            'opacity': '1',
        }, 1000, function(){});
    });
});

$prodElemListItem.mouseenter(function(){

    $(this).animate({'opacity': '+=-0.5',}, 300, function(){});
});
$prodElemListItem.mouseleave(function(){
    $(this).animate({'opacity': '-=-0.5',}, 0, function(){});
});

$prodElemListItem.click(function(){
    //global variables

    var PVwidth = 1000;
    var PVheight = 700;

    //variables
    var $bodyselect = $('body');
    $bodyselect.prepend('<div class="backgroundoverlay"></div>');
    var $backgroundoverlay = $('.backgroundoverlay');
    var $this = $(this);
    var $thisshirtimage = $this.find('img');
    var $thisshirtimagesrc =  $thisshirtimage.attr("src");
    var $productname = $this.find('.product-name');
    var $productprice = $this.find('.product-cost');

    $backgroundoverlay.css({
        'position': 'fixed',
        'width': '100%',
        'height': '100%',
        'z-index': '50',
        'background': 'black',
        'opacity': '0.6',
    });

    $bodyselect.prepend('<div class="productviewerwrapper"><img src="images/exit.svg" class="exitimg"></img><div class="productviewer"><img src="' + $thisshirtimagesrc + '"></img></div><div class=productviewerdesc><p class="product-name-pv">' + $productname.text() + '</p><p class="product-cost-pv"></div></div>');

    var $productviewer = $('.productviewer');
    var $productviewerwrapper = $('.productviewerwrapper');
    var $exitimage = $productviewerwrapper.find('.exitimg');
    var $shirtpviewerimage = $('.productviewer img');
    var $productviewerdesc = $('.productviewerdesc');
    var $productnamepv = $('.product-name-pv');
    var $productcostpv = $('.product-cost-pv');

    //add product viewer image selector

    $productviewer.append('<div class="image-selector"></div>');
    var $imageselector = $('.image-selector');

    //paypal html insert.
    var $paypalform = $this.find('form');
    $productviewerdesc.append($paypalform[0].outerHTML);
    console.log($paypalform[0].outerHTML);
    
    var $addtocart = $productviewerdesc.find('input[name=submit]');
    var $productsizespv = $productviewerdesc.find('.item-sizes');
    var $productcolorspv = $productviewerdesc.find('.item-colors');
    var $paypalformpv = $productviewerdesc.find('form');
    var $forminputs = $productviewerdesc.find('table');
    var $formselects = $productviewerdesc.find('select');

    //css for product viewer
    $paypalformpv.css({
        'margin-top': '10%',
        'width': '95%',
    });
    $shirtpviewerimage.css({
        'position': 'relative',
        'width': '100%',
        'height': '85%',
        'z-index': '5',
        'border-bottom': '1px solid black',
    });
    $imageselector.css({
        'width': '100%',
        'height': '15%',
        // 'border': '3px solid red',
    });
    $exitimage.css({
        'position': 'absolute',
        'z-index': '100',
        'width': '4%',
    });
    // $productviewerwrapper.css({
    //     'position': 'fixed',
    //     'width': PVwidth + 'px',
    //     'height': PVheight +'px',
    //     'background': 'white',
    //     'z-index': '200',
    //     'margin': 'auto',
    //     'display': 'block',
    //     'top': '0',
    //     'bottom': '0',
    //     'left': '0',
    //     'right': '0', 
    //     // 'border': '2px solid red',
    //          // 'display': 'none'
    // });
    // $productviewerwrapper.css({
    //     'top': '-100%',
    // });
    $productviewer.css({
        'position': 'absolute',
        'width': '60%',
        'height': '100%',
        // 'border': '2px solid red',
        'z-index': '10',
        'border-right': '1px solid black',
    });
    $productviewerdesc.css({
        'position': 'absolute',
        'width': '40%',
        'height': '100%',
        // 'border': '2px solid blue',
        'z-index': '5',
        // 'left': '100%', //end of animation
        'background': 'white',
        'overflow': 'scroll',
        'right': '0',
    });
    $productnamepv.css({
        'position': 'relative',
        'width': '100%',
        'text-align': 'center',
        'font-size':'25px',
        'margin-top': '15%'
    });
    $productcostpv.css({
        'width': '100%',
        'text-align': 'center',
        'font-size': '20px',
    });
    $productsizespv.css({
        'width': '30%',
        'margin-left': '20%',
        'margin-top': '15%',
    });
    $productcolorspv.css({
        'width': '30%',
    });
    $addtocart.css({
        'width': '40%',
        'margin-left': '32%',
        'margin-top': '10%',
    });
    //form input and select css
    $forminputs.css({
        // 'border': '2px solid red',
        'margin-left': '5%',
    });

    //on exitimage addto cart hover
    $exitimage.mouseenter(function(){
        $exitimage.attr("src", "images/exithover.svg");
    });
    $exitimage.mouseleave(function(){
        $exitimage.attr("src", "images/exit.svg");
    });
    $addtocart.mouseenter(function(){
        $addtocart.attr("src", "images/addtocarthover.png");
    });
    $addtocart.mouseleave(function(){
        $addtocart.attr("src", "images/addtocart.png");
    });

    //animation for product viewer
    // $productviewerwrapper.animate({
    //         'top': '20%',
    //     }, 800, function(){
    //         $productviewerdesc.animate({
    //             'left': '100%',
    //         }, 800, function(){});
    //     });

    //when user clicks away from product viewer delete everything!
    function deleteprodviewer(){
        $productviewerdesc.animate({
            'left': '0%',
        }, 300, function(){ 
            $backgroundoverlay.remove();
            $productviewerwrapper.remove();   
        });
    }

    $backgroundoverlay.click(function(){
        deleteprodviewer();
    });
    $exitimage.click(function(){
        deleteprodviewer();
    });
});






