document.addEventListener("DOMContentLoaded", function () {
	let servicesSlider;
	const servSlider = new Swiper(".services__slider", {
		speed: 1000,
		slidesPerView: 1.1,
		slidesPerGroup: 1,
		spaceBetween: 15,
		allowTouchMove: true,
		breakpoints: {
			550: {
				slidesPerView: 1.5,
				spaceBetween: 20,
			},
			768: {
				slidesPerView: 1,
				spaceBetween: 0,
				pagination: {
					el: ".services__slider .swiper-pagination",
					type: "bullets",
					clickable: true,
				},
				navigation: {
					nextEl: ".services__slider-container .swiper-button-next",
					prevEl: ".services__slider-container .swiper-button-prev",
				},
			},
		},
	});

	if (window.innerWidth <= 768) {
		servicesSlider = new Swiper(".services__cards", {
			slidesPerView: 1.1,
			slidesPerGroup: 1,
			spaceBetween: 15,
			breakpoints: {
				550: {
					slidesPerView: 1.2,
					spaceBetween: 20,
				},
				650: {
					slidesPerView: 1.4,
					spaceBetween: 30,
				},
			},
			scrollbar: {
				container: ".swiper-scrollbar",
				hide: false,
				draggable: true,
				snapOnRelease: true,
			},
		});
	}

	window.addEventListener("resize", function () {
		if (window.innerWidth <= 768) {
			if (servicesSlider && !servicesSlider.destroyed) return;
			servicesSlider = new Swiper(".services__cards", {
				slidesPerView: 1.5,
				slidesPerGroup: 1,
				spaceBetween: 30,
			});
		} else {
			if (servicesSlider) {
				servicesSlider.destroy(true, true);
			}
		}
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

	const promoSlider = new Swiper(".promotion__content_slider", {
		slidesPerView: 1.1,
		slidesPerGroup: 2,
		spaceBetween: 15,
		speed: 1000,
		breakpoints: {
			550: {
				slidesPerView: 1.5,
				spaceBetween: 20,
			},
			768: {
				slidesPerView: 2,
				slidesPerGroup: 2,
				spaceBetween: 40,
				pagination: {
					el: ".promotion__content_slider .swiper-pagination",
					type: "bullets",
					clickable: true,
				},
				navigation: {
					nextEl: ".promotion__content .swiper-button-next",
					prevEl: ".promotion__content .swiper-button-prev",
				},
			},
		},
	});

	if (document.querySelectorAll(".examples__slider").length) {
		const exampleSliders = document.querySelectorAll(".examples__slider");
		let examplesSlider;
		for (slider of exampleSliders) {
			if (slider.classList.contains("active")) {
				examplesSlider = new Swiper(slider, {
					slidesPerView: 1.5,
					slidesPerGroup: 2,
					spaceBetween: 15,
					speed: 1000,
					breakpoints: {
						550: {
							slidesPerView: 2,
							spaceBetween: 20,
						},
						768: {
							slidesPerView: 3,
							slidesPerGroup: 1,
							spaceBetween: 40,
							pagination: {
								el: ".examples__slider .swiper-pagination",
								type: "bullets",
								clickable: true,
							},
							navigation: {
								nextEl: ".examples__sliders .swiper-button-next",
								prevEl: ".examples__sliders .swiper-button-prev",
							},
						},
					},
				});
			}
		}

		$(document).on("click", ".examples__tab", function () {
			const id = $(this).attr("data-target");
			$(".examples__tab").each((_, tab) => {
				$(tab).removeClass("selected");
			});

			$(this).addClass("selected");
			examplesSlider.destroy();
			$(".examples__slider").each((_, slider) => {
				$(slider).removeClass("active");
				if ($(slider).attr("id") === id) {
					$(slider).addClass("active");
					examplesSlider = new Swiper(slider, {
						slidesPerView: 1.5,
						slidesPerGroup: 2,
						spaceBetween: 15,
						speed: 1000,
						breakpoints: {
							550: {
								slidesPerView: 2,
								spaceBetween: 20,
							},
							768: {
								slidesPerView: 3,
								slidesPerGroup: 1,
								spaceBetween: 40,
								pagination: {
									el: ".examples__slider .swiper-pagination",
									type: "bullets",
									clickable: true,
								},
								navigation: {
									nextEl: ".examples__sliders .swiper-button-next",
									prevEl: ".examples__sliders .swiper-button-prev",
								},
							},
						},
					});
				}
			});
		});
	}
	// const examplesSlider = new Swiper(".examples__slider", {
	// 	slidesPerView: 1.5,
	// 	slidesPerGroup: 2,
	// 	spaceBetween: 15,
	// 	speed: 1000,
	// 	breakpoints: {
	// 		550: {
	// 			slidesPerView: 2,
	// 			spaceBetween: 20,
	// 		},
	// 		768: {
	// 			slidesPerView: 3,
	// 			slidesPerGroup: 1,
	// 			spaceBetween: 40,
	// 			pagination: {
	// 				el: ".examples__slider .swiper-pagination",
	// 				type: "bullets",
	// 				clickable: true,
	// 			},
	// 			navigation: {
	// 				nextEl: ".examples__sliders .swiper-button-next",
	// 				prevEl: ".examples__sliders .swiper-button-prev",
	// 			},
	// 		},
	// 	},
	// });

	const newsSlider = new Swiper(".news-detail__slider", {
		slidesPerView: 1.5,
		slidesPerGroup: 2,
		spaceBetween: 15,
		speed: 1000,
		breakpoints: {
			550: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			768: {
				slidesPerView: 3,
				slidesPerGroup: 1,
				spaceBetween: 40,
				pagination: {
					el: ".news-detail__slider .swiper-pagination",
					type: "bullets",
					clickable: true,
				},
				navigation: {
					nextEl: ".news-detail__slider-container .swiper-button-next",
					prevEl: ".news-detail__slider-container .swiper-button-prev",
				},
			},
		},
	});

	const moreNewsSlider = new Swiper(".more-news__slider", {
		slidesPerView: 1.5,
		slidesPerGroup: 2,
		spaceBetween: 15,
		loop: true,
		touchRatio: 1,
		speed: 1000,
		breakpoints: {
			550: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			768: {
				slidesPerView: 3,
				slidesPerGroup: 1,
				spaceBetween: 40,
				navigation: {
					nextEl: ".more-news__content .swiper-button-next",
					prevEl: ".more-news__content .swiper-button-prev",
				},
			},
		},
	});

	const reviewsSlider = new Swiper(".reviews__slider", {
		slidesPerView: 1.2,
		spaceBetween: 15,
		breakpoints: {
			550: {
				slidesPerView: 1.5,
				spaceBetween: 20,
			},
			768: {
				slidesPerView: "auto",
				spaceBetween: 40,
				navigation: {
					nextEl: ".reviews__navigation .swiper-button-next",
					prevEl: ".reviews__navigation .swiper-button-prev",
				},
			},
		},
	});

	const teamSlider = new Swiper(".team__slider", {
		slidesPerView: 1.2,
		spaceBetween: 15,
		breakpoints: {
			550: {
				slidesPerView: 1.5,
				spaceBetween: 20,
			},
			768: {
				slidesPerView: "auto",
				spaceBetween: 40,
				navigation: {
					nextEl: ".team__navigation .swiper-button-next",
					prevEl: ".team__navigation .swiper-button-prev",
				},
			},
		},
	});

	if (document.querySelector(".works__slider")) {
		const worksSlider = new Swiper(".works__slider", {
			slidesPerView: 2,
			slidesPerGroup: 1,
			spaceBetween: 40,
			initialSlide: 1,
		});
	}
});
