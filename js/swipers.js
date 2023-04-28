$(document).ready(function(){
    const servSlider = new Swiper(".services__slider",{
        // modules: [ Navigation, Pagination ],
        speed: 900,
        pagination: {
            el: '.services__slider .swiper-pagination',
            type: 'bullets',
            clickable: true
          },
          navigation: {
            nextEl: '.services__slider-container .swiper-button-next',
            prevEl: '.services__slider-container .swiper-button-prev',
          },
    });

    // $(document).on("click",'.services__slider-container .swiper-button-next', function(){
    //     servSlider.slideNext()
    // });
    // $(document).on("click",'.services__slider-container .swiper-button-prev', function(){
    //     servSlider.slidePrev()
    // });
})