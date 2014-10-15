$(function () {
    $('#Stage').kinetic();
    $('#Stage').scroll(function () {
        spinScene();
    });
    $('.pixel').click(function () {
        if (!$(this).is('.off'))
            $(this).css('display', 'none').addClass('off');
        else
            $(this).css('opacity', '1').removeClass('off');
    });
});

var onloadLeftPos = $('html').width() / 2;
var onloadTopPos = $('html').height() / 2;
function spinScene() {
    var sT = parseInt($('#Stage').scrollTop());
    var sL = parseInt($('#Stage').scrollLeft());
    $('.scene').css({
        "-webkit-transform": "rotateX(" + sT + "deg) rotateY(-" + sL + "deg) rotateZ(0deg)",
        "transform": "rotateX(" + sT + "deg) rotateY(-" + sL + "deg) rotateZ(0deg)"
    });
    $('.fixed').css({
        "top": Math.ceil(onloadTopPos + (sT)) + "px",
        "left": Math.ceil(onloadLeftPos + (sL)) + "px"
    });
}