$(function () {
    $('.pixel').click(function () {
        if (!$(this).is('.off'))
            $(this).css('opacity', '0').addClass('off');
        else
            $(this).css('opacity', '1').removeClass('off');
    });
});
