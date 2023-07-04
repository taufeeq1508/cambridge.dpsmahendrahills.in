$(document).ready(function () {
    var url = document.location.pathname;
    if (url == "/") {
        // $("#requestinfo").modal("show");
    }
    // $('#blogCarousel').carousel({
    //     interval: 5000
    // });
    // $('#bottomCarousel').carousel({
    //     interval: 5000
    // });
    // $('#events').carousel({
    //     interval: 5000
    // });

    $("#datepicker").datepicker();
    //     // toggle mobile menu
    //     $('[data-toggle="toggle-nav"]').on('click', function () {
    //         $(this).closest('nav').find($(this).attr('data-target')).toggleClass('hidden');
    //         return false;
    //     });

    //     // feather icons
    //     // feather.replace();

    //     // smooth scroll
    //     // var scroll = new SmoothScroll('a[href*="#"]');

    //     // tiny slider
    //     $('#slider-1').slick({
    //         infinite: true,
    //         prevArrow: $('.prev'),
    //         nextArrow: $('.next'),
    //     });
    $('.centerGrid')
        .on('afterChange init', function (event, slick, direction) {
            // remove all prev/next
            slick.$slides.removeClass('prevSlideAbout').removeClass('nextSlideAbout');

            // find current slide
            for (var i = 0; i < slick.$slides.length; i++) {
                var $slide = $(slick.$slides[i]);
                if ($slide.hasClass('slick-current')) {
                    // update DOM siblings
                    $slide.prev().addClass('prevSlideAbout');
                    $slide.next().addClass('nextSlideAbout');
                    break;
                }
            }
        })
        .on('beforeChange', function (event, slick) {
            // optional, but cleaner maybe
            // remove all prev/next
            slick.$slides.removeClass('prevSlideAbout').removeClass('nextSlideAbout');
        })
        .slick({
            // dots: true,    
            autoplay: true,
            autoplaySpeed: 2000,
            centerMode: true,
            centerPadding: '60px',
            slidesToShow: 1,
            prevArrow: "<button type='button' class='prevslide text-left'></button>",
            nextArrow: "<button type='button' class='nextslide text-right'></button>",

            customPaging: function (slider, i) {
                return '<div class="bg-white br-round w-1 h-1 opacity-30 mt-5" id=' + i + '> </div>'
            },
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '10px',
                        slidesToShow: 1
                    }
                }
            ]
        });
    $('#slider4').slick({
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 4.5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode: true,
        customPaging: function (slider, i) {
            return '<div class="bg-white br-round w-1 h-1 opacity-50 mt-5" id=' + i + '> </div>'
        },
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 2.5,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 568,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 440,
            settings: {
                slidesToShow: 1.47,
                slidesToScroll: 1,
            }
        },]

    });
    $('.slider-for').slick({

        // arrows: false,
        // infinite: true,
        slidesToShow: 3,
        slidesToScroll: 0,
        autoplay: false,
        slickPause: true,
        // autoplaySpeed: 2000,
        centerMode: true,
        // asNavFor: '.slider-nav',
        customPaging: function (slider1, i) {
            return '<div class="bg-white br-round w-1 h-1 opacity-50 mt-5" id=' + i + '> </div>'
        },
        responsive: [{
            breakpoint: 1068,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 568,
            settings: {
                slidesToShow: 1
            }
        },]

    });
    $('.slider-nav').slick({
        dots: true,
        slidesToShow: 6.4,
        slidesToScroll: 1,
        // asNavFor: '.slider-for',        
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode: true,
        arrows: false,
        focusOnSelect: true,
        customPaging: function (slider, i) {
            return '<div class="bg-white br-round w-1 h-1 opacity-50 mt-5" id=' + i + '> </div>'
        },
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 3
            }
        },]

    });



    $('.collaboration-container').slick({
        arrows: false,
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        // centerMode: true,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 2000,

        customPaging: function (slider, i) {
            return '<div class="bg-white mt-2 br-round w-1 h-1 opacity-50 mt-5" id=' + i + '> </div>'
        },
    });

    $('.branches-options').slick({
        arrows: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        // autoplay: true,
        // autoplaySpeed: 2000,
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                width: "100%"
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true,
                centerPadding: '20px',
                width: "100%"
            }
        },]
    });

    $('.successfull-container').slick({
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        // autoplay: true,
        // autoplaySpeed: 2000,
    });
    $('#whynacharam-slider-prevbtn').on('click', function () {
        $(".successfull-container").slick('slickPrev');
    });
    $('#whynacharam-slider-nextbtn').on('click', function () {
        $(".successfull-container").slick('slickNext');
    });

    $('#slider3').slick({
        dots: true,
        arrows: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        // autoplay: true,
        autoplaySpeed: 2000,
        // centerMode: true,
        customPaging: function (slider, i) {
            return '<div class="bg-white br-round w-1 h-1 opacity-50 mt-5" id=' + i + '> </div>'
        },
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 568,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },]
    });

    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    }



    $('#next1').click(function () {
        $('#sports-curricular').addClass('active show');
        $('#sports-curricular-tab').addClass('active show');
        $('#student-details').removeClass('active show');
        $('#student-details-tab').removeClass('active show');
        $('.progress-bar').css("width", '30%');
        $('.progressvalue').text('30%')
    });
    $('#next2').click(function () {
        $('#parent-details').addClass('active show');
        $('#parent-details-tab').addClass('active show');
        $('#sports-curricular').removeClass('active show');
        $('#sports-curricular-tab').removeClass('active show');
        $('.progress-bar').css('width', '42%');
        $('.progressvalue').text('45%')
    });
    $('#prev2').click(function () {
        $('#student-details').addClass('active show');
        $('#student-details-tab').addClass('active show');
        $('#sports-curricular').removeClass('active show');
        $('#sports-curricular-tab').removeClass('active show');
        $('.progress-bar').css('width', '15%');
        $('.progressvalue').text('0%')
    });
    $('#next3').click(function () {
        $('#communi-details').addClass('active show');
        $('#communi-details-tab').addClass('active show');
        $('#parent-details').removeClass('active show');
        $('#parent-details-tab').removeClass('active show');
        $('.progress-bar').css('width', '55%');
        $('.progressvalue').text('60%')
    });
    $('#prev3').click(function () {
        $('#sports-curricular').addClass('active show');
        $('#sports-curricular-tab').addClass('active show');
        $('#parent-details').removeClass('active show');
        $('#parent-details-tab').removeClass('active show');
        $('.progress-bar').css('width', '30%');
        $('.progressvalue').text('30%')
    });
    $('#next4').click(function () {
        $('#upload-documents').addClass('active show');
        $('#upload-documents-tab').addClass('active show');
        $('#communi-details').removeClass('active show');
        $('#communi-details-tab').removeClass('active show');
        $('.progress-bar').css('width', '70%');
        $('.progressvalue').text('70%')
    });
    $('#prev4').click(function () {
        $('#parent-details').addClass('active show');
        $('#parent-details-tab').addClass('active show');
        $('#communi-details').removeClass('active show');
        $('#communi-details-tab').removeClass('active show');
        $('.progress-bar').css('width', '55%');
        $('.progressvalue').text('45%')
    });
    $('#next5').click(function () {
        $('#upload-photos').addClass('active show');
        $('#upload-photos-tab').addClass('active show');
        $('#upload-documents').removeClass('active show');
        $('#upload-documents-tab').removeClass('active show');
        $('.progress-bar').css('width', '82%');
        $('.progressvalue').text('80%')
    });
    $('#prev5').click(function () {
        $('#communi-details').addClass('active show');
        $('#communi-details-tab').addClass('active show');
        $('#upload-documents').removeClass('active show');
        $('#upload-documents-tab').removeClass('active show');
        $('.progress-bar').css('width', '70%');
        $('.progressvalue').text('60%')
    });
    $('#next6').click(function () {
        $('#submit-details').addClass('active show');
        $('#submit-details-tab').addClass('active show');
        $('#upload-photos').removeClass('active show');
        $('#upload-photos-tab').removeClass('active show');
        $('.progress-bar').css('width', '90%');
        $('.progressvalue').text('90%')
    });
    $('#prev6').click(function () {
        $('#upload-documents').addClass('active show');
        $('#upload-documents-tab').addClass('active show');
        $('#upload-photos').removeClass('active show');
        $('#upload-photos-tab').removeClass('active show');
        $('.progress-bar').css('width', '82%');
        $('.progressvalue').text('70%')
    });
    $('#prev7').click(function () {
        $('#upload-photos').addClass('active show');
        $('#upload-photos-tab').addClass('active show');
        $('#submit-details').removeClass('active show');
        $('#submit-details-tab').removeClass('active show');
        $('.progress-bar').css('width', '82%');
        $('.progressvalue').text('80%')
    });



});
