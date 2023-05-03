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

    $('.questions__point_label input').on('change', function() {
        $('.questions__point_label input').each((_,input) => {
            const point = $(input).closest('.questions__point');
            $(point).removeClass('active')
            if (input.checked) {
                $(point).addClass('active');
            }
        })
    })

    loadScript(window.location.protocol + '//api-maps.yandex.ru/2.1/?lang=ru_RU', setMap);
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