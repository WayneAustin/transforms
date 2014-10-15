$(function () {
    $('#Stage').kinetic();
    $('#Stage').scroll(function () {
        spinScene();
    });
    $('#ImageCollection img').draggable({
        revert: "invalid",
        containment: "document",
        helper: "clone",
        cursor: "move"
    });
    $('.side').droppable({
        hoverClass: "ui-state-active",
        accept: "#ImageCollection > img",
        hoverClass: "ui-state-active",
        drop: function (event, ui) {
            applyImage($(this),ui.draggable);
        }
    });
});

var onloadLeftPos = $('#Stage').width()/2;
var onloadTopPos = $('#Stage').height() / 2;
function spinScene() {
    var sT = parseInt($('#Stage').scrollTop());
    var sL = parseInt($('#Stage').scrollLeft());
    $('.scene').css("-webkit-transform", "rotateX(" + sT + "deg) rotateY(-" + sL + "deg) rotateZ(0deg)");
    $('.fixed').css({
        "top": Math.ceil(onloadTopPos + (sT *2))+"px",
        "left": Math.ceil(onloadLeftPos + (sL*2))+"px",
        "margin": "-"+Math.ceil(225+sT)+"px 0 0 -"+Math.ceil(225+sL)+"px"
    });
}

function applyImage(side, img) {
    var src = $(img).attr("src");
    $(side).css('background', 'url(' + src + ')');
}