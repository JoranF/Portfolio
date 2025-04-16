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

        // About section animations
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
        // New skills animations
        if (scroll >= 350) {
            $('#icon5').addClass('icons-container')
        }
        if (scroll >= 400) {
            $('#icon6').addClass('icons-container')
        }
        if (scroll >= 450) {
            $('#icon7').addClass('icons-container')
        }
        if (scroll >= 500) {
            $('#icon8').addClass('icons-container')
        }

        // Project section animations
        var projectsOffset = $('#gotoProjects').offset().top;
        if (scroll >= projectsOffset - 600) {
            setTimeout(function() {
                $('#project1').addClass('project-sliding');
            }, 100);
            setTimeout(function() {
                $('#project2').addClass('project-sliding');
            }, 200);
            setTimeout(function() {
                $('#project3').addClass('project-sliding');
            }, 300);
        }

        // Contact section animations
        var contactOffset = $('#gotoContact').offset().top;
        if (scroll >= contactOffset - 600) {
            $('.contact-card').addClass('contact-sliding');
        }
    });
});

$(".nav-link").click(function(e) { // scroll to clicked section
    e.preventDefault();
    var aid = $(this).attr("href");
    $('html,body').animate({scrollTop: $(aid).offset().top},'fast');
});

// Add active class to nav links
$(function() {
    $(window).scroll(function() {
        var scrollDistance = $(window).scrollTop();
        
        // For each section, check if it's in view
        $('div[id^="goto"]').each(function(i) {
            if ($(this).position().top <= scrollDistance + 300) {
                $('.nav-link.activel').removeClass('activel');
                $('.nav-link').eq(i).addClass('activel');
            }
        });
    }).scroll();
});