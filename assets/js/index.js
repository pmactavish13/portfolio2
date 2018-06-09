var j = 0;
var txt2 = 'Full Stack Web Developer';
var speed = 80;

$(document).ready(function () {

    function typeWriter() {
        if (j < txt2.length) {
            document.getElementById("typewriter2").innerHTML += txt2.charAt(j);
            j++;
            setTimeout(typeWriter, speed);
        }
    }
    window.onload = typeWriter

    $('a[href^="#"]').on('click', function (event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top + (-80)
            }, 500);
        }
    });

    (function ($) {
        "use strict"; // Start of use strict
        // Closes responsive menu when a scroll trigger link is clicked
        $('.js-scroll-trigger').click(function () {
            $('.navbar-collapse').collapse('hide');
        });
    })(jQuery); // End of use strict

    // show #logo- name- on nav bar after scrolling to content pages
    var logo = $("#logoToShowHide");
    var pos = logo.position();
    $(window).scroll(function () {
        var windowpos = $(window).scrollTop();
        if (windowpos >= (pos.top + 100)) {
            logo.addClass("AfterScroll");
        }
        else {
            logo.removeClass("AfterScroll");
        }
    });

    // show #home- name- on nav bar after scrolling to content pages
    var home = $("#homeToShowHide");
    var pos = home.position();
    $(window).scroll(function () {
        var windowpos = $(window).scrollTop();
        if (windowpos >= (pos.top + 100)) {
            home.addClass("AfterScroll");
        }
        else {
            home.removeClass("AfterScroll");
        }
    });
});

