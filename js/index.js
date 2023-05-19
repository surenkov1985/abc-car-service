document.addEventListener("DOMContentLoaded", function () {

	// Init Swipers

	initServSlider();
	initPromoTitleSlider();
	initPromoSlider();
	initNewsSlider();
	initMoreNewsSlider();
	initReviewsSlider();
	initTeamSlider();
	initWorksSlider();
	initExamplesSliders();

	// Open/Close Header Search Form

	$(document).on("click", ".header__search_form .search-btn", function (e) {
		if (!$(".header__search_form").hasClass("active")) {
			e.preventDefault();
			$(".header__search_form").addClass("active");
		}
	});
	$(document).on("blur", ".header__search_form .search-input", function (e) {
		$(".header__search_form").removeClass("active");
	});
	$(document).on("click", function (e) {
		if ($(".header__search_form").hasClass("active") && !e.target.closest(".header__search_form")) {
			$(".header__search_form").removeClass("active");
		}
		if (!e.target.closest(".intro__filter_item") && !e.target.closest(".intro__filter_select")) {
			$(".intro__filter_list").removeClass("show");
		}
	});

	// Toggle Questions 

	$(".questions__point_label input").each((_, input) => {
		const point = $(input).closest(".questions__point");
		$(point).removeClass("active");
		if (input.checked) {
			$(point).addClass("active");
		}
	});

	$(".questions__point_label input").on("change", function () {
		$(".questions__point_label input").each((_, input) => {
			const point = $(input).closest(".questions__point");
			$(point).removeClass("active");
			if (input.checked) {
				$(point).addClass("active");
			}
		});
	});

	// Index page scroll

	$(document).on("click", ".intro__scroll_btn", function (e) {
		window.scrollTo({
			top: window.innerHeight,
			behavior: "smooth",
		});
	});

	// Open Popup 

	$(document).on("click", ".popup-open", function (e) {
			e.preventDefault();
			$("body").addClass("hidden");
			$(".popup").css({ opacity: 1, visibility: "visible" });
			setTimeout(() => {
				$(".popup__menu").css({ transform: "translateX(0)" });
			}, 300);
	});

	// Close Popup 

	$(document).on("click", ".popup", function (e) {
		if (e.target.classList.contains("popup") || e.target.classList.contains("popup_close")) {
			$("body").removeClass("hidden");
			$(".popup__menu").css({ transform: "translateX(-100%)" });
			setTimeout(() => {
				$(".popup").css({ opacity: 0, visibility: "hidden" });
			}, 500);
		}

		if (e.target.classList.contains("popup__more-btn")) {
			const menuItem = e.target.closest(".popup__menu_item");

			$(".popup__menu_item").each((_, item) => {
				$(item).removeClass("active");
			});

			$(menuItem).addClass("active");
		}
	});

	// Resize Team slider 

	if (document.querySelector(".team")) {
		let padding = parseInt(window.getComputedStyle(document.querySelector(".team")).paddingLeft);
		let innerWidth = $(".team .container").width() * 0.75 + $(".team .container").offset().left - padding;
		if (window.innerWidth > 768) {
			$(".team__content").css("width",  `calc(75% + ${$(".team .container").offset().left}px)`);
		}

		window.addEventListener("resize", function (e) {
			if (window.innerWidth > 768) {
				padding = parseInt(window.getComputedStyle(document.querySelector(".team")).paddingLeft);
				innerWidth = $(".team .container").width() * 0.75 + $(".team .container").offset().left - padding;
				$(".team__content").css("width", `calc(75% + ${$(".team .container").offset().left}px)`);
			} else {
				$(".team__content").css("width", "100%");
			}
		});
	}

	// Links Listeners

	on("click", ".link", function(e){
	    if (this.href == window.location.href) e.preventDefault();
    });

	// Resize Reviews slider 

	if (document.querySelector(".reviews")) {
		let padding = parseInt(window.getComputedStyle(document.querySelector(".reviews")).paddingLeft);
		let innerWidth = window.innerWidth * 0.75 + $(".reviews .container").offset().left - padding ;
		if (window.innerWidth > 768) {
			$(".reviews__content").css("width", `calc(75% + ${$(".reviews .container").offset().left}px)`);
		}

		window.addEventListener("resize", function (e) {
			if (window.innerWidth > 768) {
				padding = parseInt(window.getComputedStyle(document.querySelector(".reviews")).paddingLeft);
				innerWidth = window.innerWidth * 0.75 - padding;
				$(".reviews__content").css("width", `calc(75% + ${$(".reviews .container").offset().left}px)`);
			} else {
				$(".reviews__content").css("width", "100%");
			}
		});
	}

	// Open Mobile menu 

	$(document).on("click", ".burger-menu", function () {
		$("body").addClass("hidden");
		$(".mobile").css({ opacity: 1, visibility: "visible" });
		setTimeout(() => {
			$(".mobile__menu").css({ transform: "translateX(0)" });
		}, 300);
	});

	// Listeners events on Mobile menu

	$(document).on("click", ".mobile", function (e) {

		// Close Mobile menu
		if (e.target.classList.contains("mobile") || e.target.classList.contains("mobile_close")) {
			$("body").removeClass("hidden");
			$(".mobile__menu").css({ transform: "translateX(-100%)" });
			setTimeout(() => {
				$(".mobile").css({ opacity: 0, visibility: "hidden" });
			}, 500);
			$(".mobile__menu_item").each((_, item) => {
				$(item).removeClass("active");
			});
		}

		// Toggle Mobile Submenu

		if (e.target.classList.contains("mobile__more-btn")) {
			const menuItem = e.target.closest(".mobile__menu_item");

			$(".mobile__menu").css("overflow", "inherit");

			$(".mobile__menu_item").each((_, item) => {
				$(item).removeClass("active");
			});
			$(menuItem).addClass("active");
		}

		// Close Mobile Submenu

		if (e.target.classList.contains("mobile__menu_sublist-close")) {

			$(".mobile__menu_item").each((_, item) => {
				$(item).removeClass("active");
			});
			$(".mobile__menu").css("overflow", "auto");
		}

		// Toggle Mobile Subsubmenu

		if (e.target.classList.contains("mobile__subitem_more-btn")) {
			const menuItem = e.target.closest(".mobile__menu_subitem");

			$(".mobile__menu_subitem").each((_, item) => {
				$(item).removeClass("active");
			});
			$(menuItem).addClass("active");
		}

		// close Mobile Subsubmenu

		if (e.target.classList.contains("mobile__submenu-close")) {

			$(".mobile__menu_subitem").each((_, item) => {
				$(item).removeClass("active");
			});
		}

		// Close mobile menu if opened modal

		if (e.target.classList.contains("mobile__recall")) {
			$("body").removeClass("hidden");
			$(".mobile__menu").css({ transform: "translateX(-100%)" });
			setTimeout(() => {
				$(".mobile").css({ opacity: 0, visibility: "hidden" });
			}, 500);
			$(".mobile__menu_item").each((_, item) => {
				$(item).removeClass("active");
			});
			$(".mobile__menu_subitem").each((_, item) => {
				$(item).removeClass("active");
			});
		}
	});

	// Toggle adverions tabs

	$(document).on("click", ".advs__models_tab", function() {
		if ($(this).hasClass("active")) return;
		$(".advs__models_tab").each((_,tab) => {
			$(tab).removeClass("active");
		})
		$(this).addClass("active");
		$(".advs__models_price").each((_,price) => {
			$(price).removeClass("active");
			if ($(price).attr("id") === $(this).attr("data-target")) $(price).addClass("active")
		})
		$(this).addClass("active");
	});

	// Scroll links

	on("click", ".intro__link", function(e) {
		e.preventDefault();
		const fixedHeader = document.querySelector(".header.fixed")
		const target = document.querySelector(e.target.hash);
		const obsTarget = document.querySelector(".obs-target")
		const targetPosition = target.offsetTop >= obsTarget.offsetTop ? target.offsetTop - fixedHeader.offsetHeight : target.offsetTop;

		window.scrollTo({
			top: targetPosition,
			behavior: "smooth"
		})
		console.log(fixedHeader.classList.contains("show"));
	});

	// Toggle/Selected Intro Brand Select

	$(document).on("click", ".intro__filter_select", function (e) {
		e.preventDefault();
		$(".intro__filter_list").toggleClass("show");
	});

	$(document).on("click", ".intro__filter_item", function (e) {
		$(".intro__filter_select span").text(e.target.value);
		$(".intro__filter_list").removeClass("show");
	});

	// Masked Phone inputs

	["input", "keydown", "blur"].forEach((event) => {
		on(event, "input[type=tel]", function (e) {
		    phoneMask.call(this, e);
		});
	});

	// Clear Inputs

	$(document).on("click", ".carousel__button", function(e){
		$(".modal__form input[type=tel]").each((_, input) => {
			$(input).val("")
		});
		$(".modal__form input[type=text]").each((_, input) => {
			$(input).val("")
		});
		$(".modal__form textarea").each((_, input) => {
			$(input).val("")
		});
		$(".modal__form input[type=file]").each((_, input) => {
			$(input).val("")
		});
	});

	// Toggle Questions Points 

	$(document).on("click", ".questions__point", function (e) {
		if ($(this).hasClass("active")) {
			$(this).removeClass("active");
		} else {
			$(".questions__point").each((_, point) => {
				$(point).removeClass("active");
			});
			if (e.target.classList.contains("questions__point_open")) {
				$(this).addClass("active");
			}
		}
	});

	// Submit News filter

	$(document).on("change", ".news__filter_form input", function (e) {
		$(".news__filter_label").each((_, label) => {
			$(label).removeClass("selected");
		});

		if (e.target.checked) {
			$(this).closest(".news__filter_label").addClass("selected");
		}
		$(".news__filter_form").submit();
	});

	if (this.location.search) {
		const params = new URLSearchParams(this.location.search);

		$(".news__filter_label").each((_, label) => {
			$(label).removeClass("selected");

			if ($(label).children("input").attr("value") === params.get("category")) {
				$(label).children("input").attr("checked", true);
				$(label).addClass("selected");
			}
		});
	} else {
		$(".news__filter_label").each((_, label) => {
			$(label).removeClass("selected");

			if ($(label).children("input").attr("value") === "") {
				$(label).children("input").attr("checked", true);
				$(label).addClass("selected");
			}
		});
	}

	// Run Yandex Script

	loadScript(window.location.protocol + "//api-maps.yandex.ru/2.1/?lang=ru_RU", setMap);

	//  observer
	const scrollOptions = {
		rootMargin: "0px",
		threshold: 1,
	};

	const scrollCallback = (entries, observer) => {
		entries.forEach((entry) => {
			if (entry.boundingClientRect.y < 0) {
				document.querySelector(".header.fixed").classList.add("show");
			} else {
				document.querySelector(".header.fixed").classList.remove("show");
			}
		});
	};
	const scrollObserver = new IntersectionObserver(scrollCallback, scrollOptions);
	scrollObserver.observe(document.querySelector(".obs-target"));

	if (document.querySelector(".reviews-inner__cards") && document.querySelector(".reviews__card")){

		const masonryOptions = {
			itemSelector: ".reviews__card",
			gutter: 40,
		};

		if (window.innerWidth < 991) {
			masonryOptions.gutter = 20;
		} else if (window.innerWidth < 768) {
			masonryOptions.gutter = 10;
		} else {
			masonryOptions.gutter = 40;
		}
        if ($(".reviews-inner__container").height() < $(".reviews-inner__cards").height()) {
			$(".reviews__more_btn").css("display", "none");
			$(".reviews-inner__cards-bottom").css("display", "none");
		};
		$(".grid").masonry(masonryOptions);

		window.addEventListener("resize", function (e) {
			if (window.innerWidth < 991) {
				masonryOptions.gutter = 20;
			} else if (window.innerWidth < 768) {
				masonryOptions.gutter = 20;
			} else {
				masonryOptions.gutter = 40;
			}
		});
		
		$(document).on("click", ".reviews__more_btn", function() {
			$(".reviews-inner__container").css("height", "auto");
			$(this).css("display", "none");
			$(".reviews-inner__cards-bottom").css("display", "none");
		});
	}

	// Show Elements
	const sections = document.querySelectorAll(".animate");
	const sectionsRight = document.querySelectorAll(".animate-right");
	const sectionObserverOptions = {
		rootMargin: "-20px",
		threshold: 0
	};

	function sectionsObserve(entries, observer) {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add("show");
			}
		});
	}

	const sectionObserver = new IntersectionObserver(sectionsObserve, sectionObserverOptions);

	for (let section of sections) {
		sectionObserver.observe(section);
	}
	for (let section of sectionsRight) {
		sectionObserver.observe(section);
	}
});

function setMap() {
	try {
		ymaps.ready(() => {
			for (let mapContainer of document.querySelectorAll(".map")) {
				let id = mapContainer.getAttribute("id"),
					data = mapContainer.dataset,
					mapCenter = JSON.parse(data.center),
					mapCoord = data.coord ? JSON.parse(data.coord) : mapCenter,
					mapZoom = data.zoom,
					mapTitle = data.title,
					map = new ymaps.Map(id, {
						center: mapCenter,
						zoom: mapZoom,
						controls: ["smallMapDefaultSet"],
					}),
					pin = new ymaps.Placemark(
						mapCoord,
						{
							hintContent: mapTitle,
						},
						{
							iconLayout: "default#image",
							iconImageHref: "../img/placemark.png",
						}
					);
					
				map.behaviors.disable(["scrollZoom"]);
				map.geoObjects.add(pin);
				setMapCenter();
				function setMapCenter() {
					mapContainer.offsetWidth < 992 ? map.setCenter(mapCoord) : map.setCenter(mapCenter);

					if( !mapContainer.closest(".contacts")) {
						const centerCoord = map.getGlobalPixelCenter();

					// смещаем центр карты

					if (window.innerWidth > 1200) {
						centerCoord[0] -= 350;
						centerCoord[1] += 0;
					} else if (window.innerWidth > 991) {
						centerCoord[0] -=250;
						centerCoord[1] += 0;
					} else {
						centerCoord[0] -= 0;
						centerCoord[1] += 0;
					}
					map.setGlobalPixelCenter(centerCoord);
					}
					
				}

				
				window.addEventListener("resize", setMapCenter);
			}
		});
	} catch (e) {
		console.log("Yandex Map is not initiated");
	}
}
