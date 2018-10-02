

$(document).ready(function() {
    $('.fullbox').css({
        'width': $(window).width(),
        'height': $(window).height()
    });

    $(window).resize(function() {
        var $w = $(window);
        $('.fullbox').css({
            'width': $w.width(),
            'height': $w.height(),
        });
    });
});

var typed = new Typed('#typed',{
    stringsElement: '.caption_typed',
    loop: true,
    typeSpeed: 100,
    backSpeed: 0
});

window.onload = function() {
    Particles.init({
        selector: '.slider_mask',
        color: ['#333333', '#666666', '#aaaaaa'],
        connectParticles: true,
        responsive: [{
            breakpoint: 800,
            options: {
                color: '#00C9B1',
                maxParticles: 80,
                connectParticles: false
            }
        }]
    });
};

$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
        $('#gotop').fadeIn("fast");
    } else {
        $('#gotop').stop().fadeOut("fast");
    }
});

$(function() {

    //-Menu
    $('#toggle').click(function() {
        $(this).toggleClass('active');
        $('#overlay').toggleClass('open');
    });

    $('#menu li').children('a[href*=\\#]:not([href=\\#])').click(function() {
        var target = $(this.hash);
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000);
        return false;
    });

    //-go top
    $("#gotop").click(function() {
        jQuery("html,body").animate({
            scrollTop: 0
        }, 1000);
    });
});

(function($) {
	//-Slider
    $('.slider').slick({
        dots: true,
        infinite: true,
        speed: 3000,
        fade: true,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: false,
        cssEase: 'ease-in-out',
        responsive: [{
            breakpoint: 1199,
            settings: {
                dots: false,
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }]
    });
})(jQuery);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInpfbWFpbi5qcyIsInpfcGx1Z2luLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN0RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InN0eWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuICAgICQoJy5mdWxsYm94JykuY3NzKHtcclxuICAgICAgICAnd2lkdGgnOiAkKHdpbmRvdykud2lkdGgoKSxcclxuICAgICAgICAnaGVpZ2h0JzogJCh3aW5kb3cpLmhlaWdodCgpXHJcbiAgICB9KTtcclxuXHJcbiAgICAkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciAkdyA9ICQod2luZG93KTtcclxuICAgICAgICAkKCcuZnVsbGJveCcpLmNzcyh7XHJcbiAgICAgICAgICAgICd3aWR0aCc6ICR3LndpZHRoKCksXHJcbiAgICAgICAgICAgICdoZWlnaHQnOiAkdy5oZWlnaHQoKSxcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59KTtcclxuXHJcbnZhciB0eXBlZCA9IG5ldyBUeXBlZCgnI3R5cGVkJyx7XHJcbiAgICBzdHJpbmdzRWxlbWVudDogJy5jYXB0aW9uX3R5cGVkJyxcclxuICAgIGxvb3A6IHRydWUsXHJcbiAgICB0eXBlU3BlZWQ6IDEwMCxcclxuICAgIGJhY2tTcGVlZDogMFxyXG59KTtcclxuXHJcbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcclxuICAgIFBhcnRpY2xlcy5pbml0KHtcclxuICAgICAgICBzZWxlY3RvcjogJy5zbGlkZXJfbWFzaycsXHJcbiAgICAgICAgY29sb3I6IFsnIzMzMzMzMycsICcjNjY2NjY2JywgJyNhYWFhYWEnXSxcclxuICAgICAgICBjb25uZWN0UGFydGljbGVzOiB0cnVlLFxyXG4gICAgICAgIHJlc3BvbnNpdmU6IFt7XHJcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDgwMCxcclxuICAgICAgICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICcjMDBDOUIxJyxcclxuICAgICAgICAgICAgICAgIG1heFBhcnRpY2xlczogODAsXHJcbiAgICAgICAgICAgICAgICBjb25uZWN0UGFydGljbGVzOiBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfV1cclxuICAgIH0pO1xyXG59O1xyXG5cclxuJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpIHtcclxuICAgIGlmICgkKHRoaXMpLnNjcm9sbFRvcCgpID4gMTAwKSB7XHJcbiAgICAgICAgJCgnI2dvdG9wJykuZmFkZUluKFwiZmFzdFwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJCgnI2dvdG9wJykuc3RvcCgpLmZhZGVPdXQoXCJmYXN0XCIpO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbiQoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgLy8tTWVudVxyXG4gICAgJCgnI3RvZ2dsZScpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICQoJyNvdmVybGF5JykudG9nZ2xlQ2xhc3MoJ29wZW4nKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoJyNtZW51IGxpJykuY2hpbGRyZW4oJ2FbaHJlZio9XFxcXCNdOm5vdChbaHJlZj1cXFxcI10pJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIHRhcmdldCA9ICQodGhpcy5oYXNoKTtcclxuICAgICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgIHNjcm9sbFRvcDogdGFyZ2V0Lm9mZnNldCgpLnRvcFxyXG4gICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vLWdvIHRvcFxyXG4gICAgJChcIiNnb3RvcFwiKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgICBqUXVlcnkoXCJodG1sLGJvZHlcIikuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgIHNjcm9sbFRvcDogMFxyXG4gICAgICAgIH0sIDEwMDApO1xyXG4gICAgfSk7XHJcbn0pOyIsIlxyXG4oZnVuY3Rpb24oJCkge1xyXG5cdC8vLVNsaWRlclxyXG4gICAgJCgnLnNsaWRlcicpLnNsaWNrKHtcclxuICAgICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgICAgIHNwZWVkOiAzMDAwLFxyXG4gICAgICAgIGZhZGU6IHRydWUsXHJcbiAgICAgICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICAgICAgYXV0b3BsYXlTcGVlZDogMjAwMCxcclxuICAgICAgICBwYXVzZU9uSG92ZXI6IGZhbHNlLFxyXG4gICAgICAgIGNzc0Vhc2U6ICdlYXNlLWluLW91dCcsXHJcbiAgICAgICAgcmVzcG9uc2l2ZTogW3tcclxuICAgICAgICAgICAgYnJlYWtwb2ludDogMTE5OSxcclxuICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGNlbnRlck1vZGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiAnNDBweCcsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDFcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1dXHJcbiAgICB9KTtcclxufSkoalF1ZXJ5KTsiXX0=
