document.addEventListener("DOMContentLoaded", function(){
    $(document).on("click", ".header__search_form .search-btn", function(e) {
        if (!$(".header__search_form").hasClass("active")) {
            e.preventDefault();
            $(".header__search_form").addClass("active");
        }
    });
    $(document).on("blur", ".header__search_form .search-input", function(e) {
        $(".header__search_form").removeClass("active");
    });
	$(document).on("click", function(e){
		if ($(".header__search_form").hasClass("active") && !e.target.closest(".header__search_form")) {
			$(".header__search_form").removeClass("active");
		}
	})
    $('.questions__point_label input').each((_,input) => {
        const point = $(input).closest('.questions__point');
        $(point).removeClass('active')
        if (input.checked) {
            $(point).addClass('active');
        }
    })

	$(document).on("click", ".intro__scroll_btn", function(e){
		window.scrollTo( {
			top : window.innerHeight,
			behavior: "smooth"
		})
	})

    $('.questions__point_label input').on('change', function() {
        $('.questions__point_label input').each((_,input) => {
            const point = $(input).closest('.questions__point');
            $(point).removeClass('active')
            if (input.checked) {
                $(point).addClass('active');
            }
        })
    })

	$(document).on("click", ".header__nav_item span", function(){
		$("body").addClass("hidden");
		$(".popup").addClass("show");
	})

	$(document).on("click", ".popup", function(e){
		if (e.target.classList.contains("popup") || e.target.classList.contains("popup_close")) {
			$("body").removeClass("hidden");
		$(".popup").removeClass("show");
		}

		if (e.target.classList.contains("popup__more-btn")) {
			const menuItem = e.target.closest(".popup__menu_item")

			$(".popup__menu_item").each((_, item) => {
				$(item).removeClass("active");

				
			})

			
				$(menuItem).addClass("active");
			

		}
		
	})

	$(document).on("click", ".burger-menu", function(){
		$("body").addClass("hidden");
		$(".mobile").addClass("show");
	})

	$(document).on("click", ".mobile", function(e){
		if (e.target.classList.contains("mobile") || e.target.classList.contains("mobile_close")) {
			$("body").removeClass("hidden");
			$(".mobile").removeClass("show");
			$(".mobile__menu_item").each((_, item) => {
				$(item).removeClass("active");
			})
		}

		if (e.target.classList.contains("mobile__more-btn")) {
			const menuItem = e.target.closest(".mobile__menu_item")

			$(".mobile__menu_item").each((_, item) => {
				$(item).removeClass("active");
			})
			$(menuItem).addClass("active");
		}

		if (e.target.classList.contains("mobile__menu_sublist-close")) {
			// const menuItem = e.target.closest(".mobile__menu_item")

			$(".mobile__menu_item").each((_, item) => {
				$(item).removeClass("active");
			})
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
	});

    loadScript(window.location.protocol + '//api-maps.yandex.ru/2.1/?lang=ru_RU', setMap);

	//  observer
	const scrollOptions = {
	    rootMargin: '0px',
	    threshold: 1
	}

    const scrollCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.boundingClientRect.y < 0) {
            document.querySelector('.header.fixed').classList.add('show');
		} else {
            document.querySelector('.header.fixed').classList.remove('show');
        }
      })
    }
    const scrollObserver = new IntersectionObserver(scrollCallback, scrollOptions);
    scrollObserver.observe(document.querySelector('.obs-target'));
});

function setMap() {
	try {
		ymaps.ready(() => {
			for (let mapContainer of document.querySelectorAll('.map')) {
				let id = mapContainer.getAttribute('id'),
					data = mapContainer.dataset,
					mapCenter = JSON.parse(data.center),
					mapCoord = data.coord ? JSON.parse(data.coord) : mapCenter,
					mapZoom = data.zoom,
					mapTitle = data.title,
					map = new ymaps.Map(id, {
						center: mapCenter,
						zoom: mapZoom,
						controls: ['smallMapDefaultSet']
					}),
					pin = new ymaps.Placemark(mapCoord, {
						hintContent: mapTitle
					}, {
						iconLayout: 'default#image',
                        iconImageHref: '../img/placemark.png'
					});
				map.behaviors.disable(['scrollZoom']);
				map.geoObjects.add(pin);
				setMapCenter();
				function setMapCenter() {
					(mapContainer.offsetWidth < 992) ? map.setCenter(mapCoord) : map.setCenter(mapCenter);
				}
				window.addEventListener('resize', setMapCenter);
			}
		});
	} catch (e) {
		console.log('Yandex Map is not initiated');
	}
}