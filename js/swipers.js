$(document).ready(function () {
	const servSlider = new Swiper(".services__slider", {
		speed: 900,
		pagination: {
			el: ".services__slider .swiper-pagination",
			type: "bullets",
			clickable: true,
		},
		navigation: {
			nextEl: ".services__slider-container .swiper-button-next",
			prevEl: ".services__slider-container .swiper-button-prev",
		},
	});

	// $(document).on("click",'.services__slider-container .swiper-button-next', function(){
	//     servSlider.slideNext()
	// });
	// $(document).on("click",'.services__slider-container .swiper-button-prev', function(){
	//     servSlider.slidePrev()
	// });
});
const promoTitleSlider = new Swiper(".promotion__title_slider", {
	slidesPerView: "auto",
	spaceBetween: 10,
	loop: true,
	allowTouchMove: false,
	preventClicks: false,
	autoplay: {
		delay: 0,
		disableOnInteraction: false,
		waitForTransition: true,
	},
	speed: 26000,
});

const prpmoSlider = new Swiper(".promotion__content_slider", {
	slidesPerView: 2,
	slidesPerGroup: 2,
	spaceBetween: 40,
	speed: 1000,
	pagination: {
		el: ".promotion__content_slider .swiper-pagination",
		type: "bullets",
		clickable: true,
	},
	navigation: {
		nextEl: ".promotion__content .swiper-button-next",
		prevEl: ".promotion__content .swiper-button-prev",
	},
});

const reviewsSlider = new Swiper(".reviews__slider", {
	slidesPerView: "auto",
	spaceBetween: 40,
	navigation: {
		nextEl: ".reviews__navigation .swiper-button-next",
			prevEl: ".reviews__navigation .swiper-button-prev",
	}
})

const teamSlider = new Swiper(".team__slider", {
	slidesPerView: "auto",
	spaceBetween: 40,
	navigation: {
		nextEl: ".team__navigation .swiper-button-next",
			prevEl: ".team__navigation .swiper-button-prev",
	}
})
