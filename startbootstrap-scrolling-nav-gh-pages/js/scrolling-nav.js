//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 500) {
        $(".navbar-fixed-top").addClass("top-nav-collapse customNav");
        $(".navbar-fixed-top").removeClass("customTransparent");
    } else {
        $(".navbar-fixed-top").addClass("customTransparent");
        $(".navbar-fixed-top").removeClass("top-nav-collapse customNav");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 55
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

$("a.page-scroll").click(function(){
    $(this).blur();
    $(this).addClass("clickedColor");
    setTimeout(function() {
         $(".clickedColor").removeClass("clickedColor");
    }, 1500);
})
