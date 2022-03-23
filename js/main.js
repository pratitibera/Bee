// for animation of bar and cross in mobile view
const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
});

$(".left_card_options").click(function(){
  $(".left_card_options").removeClass('active');
  $(this).addClass('active');

  $(".left_card_section").addClass('d-none');
  var idd = $(this).attr('id');
  $("#left_card_section_" + idd).removeClass('d-none');
});

$("#left_card_section_vehicletype .left_card_image_div > img").click(function(){
    $("#vehicle1_img").attr('src', 'img/vehicle1.png');
    $("#vehicle2_img").attr('src', 'img/vehicle2.png');
    $("#vehicle3_img").attr('src', 'img/vehicle3.png');
    $("#vehicle4_img").attr('src', 'img/vehicle4.png');
    var srcc = $(this).attr('src');
    $(this).attr('src', srcc + '_red.png');
});


$('#serviceslist').owlCarousel({
    loop: true,
    autoplay: false,
    autoPlaySpeed: 1000,
    autoplayHoverPause: true,
    dots: false,
    nav: true,
    navText: [$('.owl-navigation-serviceslist .owl-nav-prev'), $('.owl-navigation-serviceslist .owl-nav-next')],
    responsive: {
        0: {
            items: 2.5
        },
        960: {
            items: 4.5
        }
    }
});

$('#garagesNearby').owlCarousel({
    loop: true,
    autoplay: true,
    autoPlaySpeed: 1000,
    autoplayHoverPause: true,
    dots: false,
    nav: true,
    navText: [$('.owl-navigation-garages .owl-nav-prev'), $('.owl-navigation-garages .owl-nav-next')],
    responsive: {
        0: {
            items: 1
        },
        960: {
            items: 3
        }
    }
});


$('#reviews').owlCarousel({
    loop: true,
    autoplay: true,
    autoPlaySpeed: 1000,
    autoplayHoverPause: true,
    dots: false,
    nav: true,
    navText: [$('.owl-navigation-reviews .owl-nav-prev'), $('.owl-navigation-reviews .owl-nav-next')],
    responsive: {
        0: {
            items: 1
        },
        960: {
            items: 1
        }
    }
});