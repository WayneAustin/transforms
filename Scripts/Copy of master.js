$(function () {
    setColumns();
    $(window).resize(function () { setColumns(); });
    $('nav a').click(function () {
        applyMargin($(this));
    });
});

var midFlow = false;

function setColumns() {
    $('nav ul').attr('class','columns-' + calculateColumns());
}

function calculateColumns() {
    var cols = Math.floor(screenSize() / 150);
    return cols;
}

function screenSize() {
    var size = $('body').width();
    return size;
}

function applyMargin(aLink) {
    if (!midFlow) {
        midFlow = true;
        resetGrid();
        $(aLink).addClass('selected');
        var cols = calculateColumns();
        var aListItem = $(aLink).parent('li');
        var listItems = $('nav ul li');
        var linkIndex = $(aListItem).index() + 2;
        var colsToMove = cols - articleSize();
        $(listItems).removeClass('push');
        if (cols > linkIndex) {
            pushColumns($('nav ul li:nth-child(' + colsToMove + 'n+' + linkIndex + ')'));
        } else {
            var val = linkIndex;
            var count = Math.ceil(linkIndex / cols);
            for (var i = 0; i < count; i++) {
                val = Math.round(val - cols);
                if (val < cols) {
                    pushColumns($('nav ul li:nth-child(' + colsToMove + 'n+' + linkIndex + ')'));
                }
            }
        }
    } else {
        return;
    }
}

function articleSize() {
    switch (calculateColumns()) {
        case 4:
            return 2;
            break;
        case 5, 6:
            return 3;
            break;
        default:
            return 4;
    }
}

function resetGrid() {
    pullColumns();
    $('nav ul li a').removeClass('selected');
    return;
}

function pushEnums() {
    switch (calculateColumns()) {
        case 4:
            return 40;
            break;
        case 5:
            return 3;
            break;
        case 6:
            return 3;
            break;
        case 7:
            return 3;
            break;
        case 8:
            return 3;
            break;
        case 9:
            return 3;
            break;
        case 10:
            return 40;
            break;
        case 11:
            return 36.364;
            break;
        case 12:
            return 33.32;
            break;
    }
}

function pushColumns(items) {
    $(items).animate({ 'margin-left': pushEnums() + '%' }, 1000, 'easeOutBounce', function () {
        $(items).addClass('push');
        midFlow = false;
    });
}

function pullColumns() {
    $('nav ul li.push').animate({ 'margin-left': '0' }, 1000, 'easeOutBounce', function () {
        $('nav ul li.push').removeClass('push');
    });
}