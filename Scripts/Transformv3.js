$(function () {
    $('#Stage').kinetic();
    $('#Stage').scroll(function () {
        spinScene();
    });
});

var onloadLeftPos = $('html').width()/2;
var onloadTopPos = $('html').height()/2;
function spinScene() {
    var sT = parseInt($('#Stage').scrollTop());
    var sL = parseInt($('#Stage').scrollLeft());
    $('.scene').css("-webkit-transform", "rotateX(" + sT + "deg) rotateY(-" + sL + "deg) rotateZ(0deg)");
    $('.fixed').css({
        "top": Math.ceil(onloadTopPos + (sT *2))+"px",
        "left": Math.ceil(onloadLeftPos + (sL*2))+"px",
        "margin": "-"+Math.ceil(200+sT)+"px 0 0 -"+Math.ceil(500+sL)+"px"
    });
}