
$(document).ready(function () {
    console.log("hello khanh");

    $('.kc0').click(function (e) { 
        e.preventDefault();
        $('html').animate({scrollTop: 0}, 1500, "easeOutBounce");
    });
    
    $('.kc1').click(function (e) { 
        e.preventDefault();
        var kc1 = $('.servicebanner').offset().top;
        $('html').animate({scrollTop: kc1}, 1500, "easeOutBounce");
    });
    $('.kc2').click(function (e) { 
        e.preventDefault();
        var kc2 = $('.dautu').offset().top;
        $('html').animate({scrollTop: kc2}, 1500, "easeOutBounce");
    });

    $('.kc3').click(function (e) { 
        e.preventDefault();
        var kc3 = $('.aboutus').offset().top;
        $('html').animate({scrollTop: kc3}, 1500, "easeOutBounce");
    });

    $('.kc4').click(function (e) { 
        e.preventDefault();
        var kc4 = $('.feedback').offset().top;
        $('html').animate({scrollTop: kc4}, 1500, "easeOutBounce");
    });

    TweenMax.staggerFrom($('.noidungservice'), 0.5, {left:100, opacity: 0}, 0.1);

    // TweenMax.staggerFrom($('.eachabout'), 0.5, {top:200, opacity: 0}, 0.1);

    TweenMax.staggerFrom($('.pink, .blue, .orange, .green, .infomember'), 0.5, {top:100, opacity: 0}, 0.1);
    TweenMax.staggerFrom($('.kc0, .kc1, .kc2, .kc3, .kc4'), 2, {top:100, opacity: 0}, 0.2);

});