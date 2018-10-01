
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