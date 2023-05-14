document.addEventListener("DOMContentLoaded", function () {
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
	$(".questions__point_label input").each((_, input) => {
		const point = $(input).closest(".questions__point");
		$(point).removeClass("active");
		if (input.checked) {
			$(point).addClass("active");
		}
	});

	$(document).on("click", ".intro__scroll_btn", function (e) {
		window.scrollTo({
			top: window.innerHeight,
			behavior: "smooth",
		});
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

	$(document).on("click", ".header__nav_item span", function () {
		$("body").addClass("hidden");
		// $(".popup").addClass("show");
		$(".popup").css({ opacity: 1, visibility: "visible" });
		setTimeout(() => {
			$(".popup__menu").css({ transform: "translateX(0)" });
		}, 300);
	});

	if (document.querySelector(".team")) {
		let padding = parseInt(window.getComputedStyle(document.querySelector(".team")).paddingLeft);
		let innerWidth = $(".team .container").width() * 0.75 + $(".team .container").offset().left - padding;
		if (window.innerWidth > 768) {
			$(".team__content").css("width", innerWidth + "px");
		}

		window.addEventListener("resize", function (e) {
			if (window.innerWidth > 768) {
				padding = parseInt(window.getComputedStyle(document.querySelector(".team")).paddingLeft);
				innerWidth = $(".team .container").width() * 0.75 + $(".team .container").offset().left - padding;
				$(".team__content").css("width", innerWidth + "px");
			} else {
				$(".team__content").css("width", "100%");
			}
		});
	}

	if (document.querySelector(".reviews")) {
		let padding = parseInt(window.getComputedStyle(document.querySelector(".reviews")).paddingLeft);
		let innerWidth = $(".reviews .container").width() * 0.75 + $(".reviews .container").offset().left - padding;
		if (window.innerWidth > 768) {
			$(".reviews__content").css("width", innerWidth + "px");
		}

		window.addEventListener("resize", function (e) {
			if (window.innerWidth > 768) {
				padding = parseInt(window.getComputedStyle(document.querySelector(".reviews")).paddingLeft);
				innerWidth = $(".reviews .container").width() * 0.75 + $(".reviews .container").offset().left - padding;
				$(".reviews__content").css("width", innerWidth + "px");
			} else {
				$(".reviews__content").css("width", "100%");
			}
		});
	}

	$(document).on("click", ".popup", function (e) {
		if (e.target.classList.contains("popup") || e.target.classList.contains("popup_close")) {
			$("body").removeClass("hidden");
			// $(".popup").removeClass("show");
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

	$(document).on("click", ".burger-menu", function () {
		$("body").addClass("hidden");
		// $(".mobile").addClass("show");
		$(".mobile").css({ opacity: 1, visibility: "visible" });
		setTimeout(() => {
			$(".mobile__menu").css({ transform: "translateX(0)" });
		}, 300);
	});

	$(document).on("click", ".mobile", function (e) {
		if (e.target.classList.contains("mobile") || e.target.classList.contains("mobile_close")) {
			$("body").removeClass("hidden");
			// $(".mobile").removeClass("show");
			$(".mobile__menu").css({ transform: "translateX(-100%)" });
			setTimeout(() => {
				$(".mobile").css({ opacity: 0, visibility: "hidden" });
			}, 500);
			$(".mobile__menu_item").each((_, item) => {
				$(item).removeClass("active");
			});
		}

		if (e.target.classList.contains("mobile__more-btn")) {
			const menuItem = e.target.closest(".mobile__menu_item");

			$(".mobile__menu_item").each((_, item) => {
				$(item).removeClass("active");
			});
			$(menuItem).addClass("active");
		}

		if (e.target.classList.contains("mobile__menu_sublist-close")) {
			// const menuItem = e.target.closest(".mobile__menu_item")

			$(".mobile__menu_item").each((_, item) => {
				$(item).removeClass("active");
			});
			// $(menuItem).addClass("active");
		}

		if (e.target.classList.contains("mobile__subitem_more-btn")) {
			const menuItem = e.target.closest(".mobile__menu_subitem");

			$(".mobile__menu_subitem").each((_, item) => {
				$(item).removeClass("active");
			});
			$(menuItem).addClass("active");
		}

		if (e.target.classList.contains("mobile__submenu-close")) {
			// const menuItem = e.target.closest(".mobile__menu_item")

			$(".mobile__menu_subitem").each((_, item) => {
				$(item).removeClass("active");
			});
			// $(menuItem).addClass("active");
		}

		if (e.target.classList.contains("mobile__recall")) {
			$("body").removeClass("hidden");
			// $(".mobile").removeClass("show");
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

	$(document).on("click", ".intro__filter_select", function (e) {
		e.preventDefault();
		$(".intro__filter_list").toggleClass("show");
	});

	$(document).on("click", ".intro__filter_item", function (e) {
		console.log(e);
		$(".intro__filter_select span").text(e.target.value);
		$(".intro__filter_list").removeClass("show");
	});

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

	// if (document.querySelector(".contacts")) {
	// 	const header = document.querySelectorAll(".header")[0];
	// 	const contacts = document.querySelector(".map__contacts");
	// 	const map = document.querySelector(".map");
	// 	let mapHeight = contacts.offsetHeight;
	// 	let mapWidth = window.innerWidth - document.querySelector(".map__contacts").offsetLeft - document.querySelector(".map__contacts").offsetWidth;
	// 	map.style.width = mapWidth + "px";
	// 	map.style.height = mapHeight + "px";
	// 	console.log(mapHeight);
	// 	if (window.innerWidth > 768) {
	// 		window.addEventListener("resize", function(){
	// 			mapHeight = contacts.offsetHeight;
	// 			mapWidth =
	// 				window.innerWidth - document.querySelector(".map__contacts").offsetLeft - document.querySelector(".map__contacts").offsetWidth;
	// 			map.style.width = mapWidth + "px";
	// 			map.style.height = mapHeight + "px";
	// 		})
	// 	} else {
	// 		map.style.width = "100%";
	// 		map.style.height = mapHeight + "px";
	// 	}
		
		
	// }
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
				}
				window.addEventListener("resize", setMapCenter);
			}
		});
	} catch (e) {
		console.log("Yandex Map is not initiated");
	}
}
