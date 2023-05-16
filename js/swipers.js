function initServSlider() {
	let servicesSlider;
	const service = document.querySelector(".services__slider");
	if (!service) return;
	const servSlider = new Swiper(service, {
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
}
function initPromoTitleSlider() {
	const promoTitle = document.querySelector(".promotion__title_slider");
	if (!promoTitle) return;
	const promoTitleSlider = new Swiper(promoTitle, {
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
}
function initPromoSlider() {
	const promoContent = document.querySelector(".promotion__content_slider");
	if (!promoContent) return;
	const promoSlider = new Swiper(promoContent, {
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
}
function initExamplesSlider() {

}
function initNewsSlider() {
	const news = document.querySelector(".news-detail__slider");
	if (!news) return;
	const newsSlider = new Swiper(news, {
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
				spaceBetween: 30,
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
			991: {
				spaceBetween: 40
			}
		},
	});
}
function initMoreNewsSlider() {
	const moreNews = document.querySelector(".more-news__slider");
	if (!moreNews) return;
	const moreNewsSlider = new Swiper(moreNews, {
		slidesPerView: 1.5,
		slidesPerGroup: 2,
		spaceBetween: 15,
		loop: true,
		touchRatio: 1,
		speed: 1000,
		breakpoints: {
			550: {
				slidesPerView: 2.2,
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
}
function initReviewsSlider() {
	const reviews = document.querySelector(".reviews__slider");
	if (!reviews) return;
	const reviewsSlider = new Swiper(reviews, {
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
}
function initTeamSlider() {
	const team = document.querySelector(".team__slider");
	if (!team) return;
	const teamSlider = new Swiper(team, {
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
}
function initWorksSlider() {
	const works = document.querySelector(".works__slider");
	if (!works) return;
	const worksSlider = new Swiper(".works__slider", {
		slidesPerView: 1.2,
		slidesPerGroup: 1,
		spaceBetween: 15,
		initialSlide: 1,
		breakpoints: {
			550: {
				slidesPerView: 1.5,
				spaceBetween: 20
			}, 
			768: {
				spaceBetween: 30,
				slidesPerView: 2
			},
			991: {
				spaceBetween: 40
			}
		}
	});
	
}

document.addEventListener("DOMContentLoaded", function () {

	
	
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
								spaceBetween: 30,
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
							991: {
								spaceBetween: 40,
							}
						},
					});
				}
			});
		});
	}

	

	

	

	

	
});
