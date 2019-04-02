document.addEventListener("DOMContentLoaded", onFormLoaded);

function onFormLoaded(){
    // lazy loading   optimizar el performance del 1 segundo
    var images = document.querySelectorAll("img[data-src]");
    var imagesLoaded= 0;
    for (var i=0 ; i < images.length; i++){
        images[i].addEventListener("load", function(e){
            imagesLoaded++;
            if ( imagesLoaded == images.length){
                sliderInitilize(images);
            }
        });
        images[i].src=images[i].dataset.src;
    }
}

var direction = 1;
var currentSlide = 0;
var slides = 0;
var timelaps = 2000;
var timeLapsRef = null;
var slideTrack = null;
function sliderInitilize(images){
    slides = images.length + 1;
    slideTrack = document.getElementsByClassName("sliderTrack")[0];
    slideTrack.style.width=(100 * slides) + "vw";
    timeLapsRef = setTimeout(tick, timelaps);
}

function tick() {
    if( direction == 1) {
        if (currentSlide  === slides - 1){
            direction = -1;
        }
    }
    if( direction == -1) {
        if (currentSlide  === 0){
            direction = 1;
        }
    }
    currentSlide += direction;
    moveTo(currentSlide);
    timeLapsRef = setTimeout(tick, timelaps);
}

function moveTo(currentSlide){
    slideTrack.style.left= (-100 * currentSlide) + "vw";
}
