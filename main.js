$(document).ready(function () {
    //Hamburger Menu Functions
    //Open Hamburger
    $('.menu-toggler').on('click', function () {
        document.getElementById("menu-toggler").style.transition = "transform 650ms ease-out";
        document.getElementById("menu-nav").style.top = "-100px";
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
    });

    //Hamburger Menu Nav Options
    $('.top-nav .nav-link').on('click', function () {
        $('.menu-toggler').removeClass('open');
        $('.top-nav').removeClass('open');
    });

    //Hamburger Menu Nav Scroll
    $('nav a[href*="#"]').on('click', function () {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 100
        }, 1000);
    });
    //End Hamburger Menu Functions

    //Scroll Button
    $('#up').on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    });
    //End Scroll Button

    //Mobile Hamburger Menu Scroll
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos || prevScrollpos < 0) {
            document.getElementById("menu-toggler").style.top = "5rem";
            document.getElementById("menu-toggler").style.transition = "top 0.3s";
            document.getElementById("menu-nav").style.top = "0rem";
            document.getElementById("menu-nav").style.transition = "top 0.3s";
        } else {
            document.getElementById("menu-toggler").style.top = "-50px";
            document.getElementById("menu-toggler").style.transition = "top 0.3s";
            document.getElementById("menu-nav").style.top = "-100px";
            document.getElementById("menu-nav").style.transition = "top 0.3s";
        }
        prevScrollpos = currentScrollPos;
    }
    //End Mobile Hamburger Menu Scroll

    //Animation Control
    AOS.init({
        easing: 'ease',
        duration: 1800,
        once: true
    });
    //End Animation Control
});
//End