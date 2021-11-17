$(document).ready(function(){
    $('.number-container').slick({
        arrows: true,
        dots: true,
        adaptiveWidth: true,
        autoplay: true,
        autoplaySpeed: 6500,
        pauseOnFocus: true,
        pauseOnHover: true,
        pauseOnDotsHover: true,
        adaptiveWidthp: false,
        adaptiveHeight: false,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  arrows: false,
                }
            },
        ]
    });
})


$(document).ready(function(){
    $('.review-container').slick({
        arrows: true,
        dots: true,
        adaptiveWidth: true,
        slidesToShow: 2,
        autoplay: true,
        autoplaySpeed: 6500,
        pauseOnFocus: true,
        pauseOnHover: true,
        pauseOnDotsHover: true,
        adaptiveWidthp: true,
        adaptiveHeight: true,
        responsive: [
            {
              breakpoint: 1000,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: false,
              }
            },
            {
                breakpoint: 700,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  arrows: false,
                }
              },
          ]
    });
})

