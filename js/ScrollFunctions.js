$(document).ready(function(){ // force refresh from top
    $(this).scrollTop(0);
});

$(function() { //remove Joran floor of page if scrolled past 250px
    var header = $(".centered");
    $(window).scroll(function() {
        
        var scroll = $(window).scrollTop();

        if (scroll >= 250) {
            header.removeClass('centered').addClass("invisible");
        } else {
            header.removeClass("invisible").addClass('centered');
        }
    });
});

// add navbar background color when scrolled
$(function() { 
    var header = $("#navbar");
    $(window).scroll(function() {
        
        var scroll = $(window).scrollTop();

        if (scroll >= 700) {
            header.addClass("navbar-bar");
        } else {
            header.removeClass("navbar-bar");
        }
    });
});

$(function() { 
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 150) {
            $('#cSlide').addClass('cardsliding')
        }
        if (scroll >= 300) {
            $('#cSlide1').addClass('cardsliding')
        }
        if (scroll >= 150) {
            $('#icon1').addClass('icons-container')
        }
        if (scroll >= 200) {
            $('#icon2').addClass('icons-container')
        }
        if (scroll >= 250) {
            $('#icon3').addClass('icons-container')
        }
        if (scroll >= 300) {
            $('#icon4').addClass('icons-container')
        }

    });
});

$(".nav-link").click(function(e) { // scroll to clicked section
    e.preventDefault();
    var aid = $(this).attr("href");
    $('html,body').animate({scrollTop: $(aid).offset().top},'fast');
});


  