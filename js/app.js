(function(d, undefined) {

    var v = ['0','1','2','4','8','16','32','64','question']; //values
    var i = v.length; //items
    var c = 4; //columns
    var r = i % c === 0 ? i / c : Math.floor(i / c) + 1;
    var m = 10; //margin
    var g = 10; //gutter
    var w = $(window).width(); //window width
    var h = $(window).height(); //window height
    // Item dimensions
    var iw = Math.floor((w - (m * 2) - ((c - 1) * g)) / c);
    var iw2 = Math.floor((w - ((c * 2) * m)) / c);
    var ih = Math.floor((h - (m * 2) - ((r - 1) * g)) / r);
    var ih2 = Math.floor((h - ((r * 2) * m)) / r);

    
    $(document).ready(function() {
        loadDeck();
    });

    function loadDeck() {
        if (window.screen.height==568) { // iPhone 4"
document.querySelector("meta[name=viewport]").content="width=320.1";
}
        $('#container').css('height', h).css('width', w);
        $('#container').empty();    
        for (z = 0; z < i; z++)
        {
          $('#container').append('<div class="card" data-target="' + v[z] + '" style="width: ' + iw2 + 'px; height: ' + ih2 + 'px; margin: ' + m + 'px; cursor: pointer;"><span style="line-height: ' + (ih2 - (m * 2)) + 'px; font-size: ' + ((ih2 - (m * 2)) / 2) + 'px;">' + v[z].replace('question','?') + '</span></div>');
        }
    }

    $('.card').live('click', function(event){
        var target = $(this).data('target');
        var th = $('#container').height() * 0.9;
        var tw = $('#container').width() * 0.8;
        var card = '<div class="card-large" id="card-large-' + target + '"><div class="front"></div><div class="back" style="line-height: ' + (th - (m*2)) + 'px; font-size: ' + ((th - (m*2)) / 2) + 'px">' + target.toString().replace('question','?') + '</div></div>';
        $('#container').empty();
        $('#container').append($(card));
        $('.card-large').css('width',tw + 'px').css('height',th + 'px').css('margin-left', '-'+tw/2+'px').css('margin-top','-'+th/2+'px').css('cursor','pointer');
    });

    $('.card-large div').live('click', function(event) {
        var flipped = $(this).parent().hasClass('flipped') ? true : false;
        if (flipped) {
            loadDeck();
        } else {
            $(this).parent().addClass('flipped');
        }
    });

})(this.document);

