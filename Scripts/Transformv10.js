$(function () {
    $('.pixel').live('click', function () {
        turn($(this));
    });
});
var angle = 90;
var xAngle, yAngle;

function turn(pixel) {
    var dir = $(pixel).data('dir');
    var isRotateX = dir == "up" || dir == "down" ? true : false;
    var cRotateX = $('.scene').data('rotatex');
    var cRotateY = $('.scene').data('rotatey');
    if (isRotateX) {
        if (dir == "up")
            cRotateX = cRotateX + angle;
        else
            cRotateX = cRotateX - angle;
    } else {
        if (dir == "left")
            cRotateY = cRotateY + angle;
        else
            cRotateY = cRotateY - angle;
    }

    $('.scene').css({ '-webkit-transform': 'rotateX(' + cRotateX + 'deg) rotateY(' + cRotateY + 'deg) rotateZ(0deg)', '-webkit-transition': 'all 0.5s ease-in-out' })
    $('.scene').attr('data-rotatex', cRotateX).attr('data-rotatey', cRotateY);
}