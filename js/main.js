$(function(){
$('.slider__inner').slick({
    arrows:false,
    asNavFor: '.thumbs'
});
$('.thumbs').slick({
    arrows:false,
    slidesToShow:6,
    slidesToScroll:6,
    asNavFor: '.slider__inner', 
    focusOnSelect: true,
    responsive: [
        {
            breakpoint: 940,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 5,
            }
        },
        {
            breakpoint: 740,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
            }
        },
        {
            breakpoint: 620,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            }
        },
        {
            breakpoint: 450,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        },
    ]
});

$('.header__menu-btn').on('click', function(){
    $('.header__menu > ul').slideToggle();
})
});