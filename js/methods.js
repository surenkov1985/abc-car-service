async function loadScript(src, func = false) {
	const script = document.createElement('script');
	script.src = src;
	document.body.append(script);
	if (func) script.onload = () => func();
}

function formatValueInput(elem, regexp) {
	let str = elem.value.replace(regexp, "");

	return str;
}

function phoneMask(e) {
    let key = e.key;
	let testReg = /[(\+\d\s\(\d\d\d\)\s\d\d\d-\d\d-\d\d)(\d\s\(\d\d\d\)\s\d\d\d-\d\d-\d\d)]/gi;
	let valRegRu = /\D/gi;
	let valRegEur = /\+\d{15}/;
	let testString = "Введите валидный номер";

	let cursorPosition = e.target.selectionStart;
	let str = formatValueInput(this, valRegRu);
	let formatStr = "";

	let rusTel = ["7", "8", "9"];

	if (cursorPosition !== this.value.length) {
		if (e.data && valRegRu.test(e.data)) {
			this.value = str;
		}

		return;
	}

	if (rusTel.indexOf(str[0]) > -1) {
		if (str[0] === "7") formatStr = "+" + str[0];

		if (str[0] === "8") formatStr = str[0];

		if (str[0] === "9") formatStr = "+7" + str[0];

		if (str.length > 1) {
			formatStr += " (" + str.slice(1, 4);
		}

		if (str.length >= 5) {
			formatStr += ") " + str.slice(4, 7);
		}

		if (str.length >= 8) {
			formatStr += "-" + str.slice(7, 9);
		}

		if (str.length >= 10) {
			formatStr += "-" + str.slice(9, 11);
		}
	} else {
		if (str.length >= 1) formatStr = "+" + str;
	}

	this.value = formatStr;
}

function on(event, element, callback = function(){}) {
    document.addEventListener(event, function(e){
        e.stopPropagation()
        const target = e.target.closest(element);
        if(!target) return;
        callback.call(target, e);
    });
}