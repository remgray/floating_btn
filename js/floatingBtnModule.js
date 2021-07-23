function ModuleInWindow(el) {
	this.scrollTop = $(window).scrollTop();
	this.windowHeight = $(window).height();
	this.result = [];
	this.currentElements = el;
	this.offset = 0;
	this.height = 0;
	this.center = 0;

	let thas = this

	this.updatePar = function () {
		thas.result = [];
		thas.scrollTop = $(window).scrollTop();
		thas.windowHeight = $(window).height();
	}
	this.elInWindowAll = function () {
		thas.updatePar();
		thas.currentElements.each((i, element) => {
			thas.offset = $(element).offset().top;
			thas.height = $(element).outerHeight();
			if (thas.scrollTop <= thas.offset && (thas.height + thas.offset) < (thas.scrollTop + thas.windowHeight)) {
				thas.result.push(element)
			}
		});
		return thas.result;
	}
	this.elInWindowCenter = function () {
		thas.updatePar();
		thas.currentElements.each((i, element) => {
			thas.offset = $(element).offset().top;
			thas.center = $(element).outerHeight() / 2;
			if (thas.scrollTop <= thas.offset && (thas.center + thas.offset) < (thas.scrollTop + thas.windowHeight)) {
				result.push(thas.element)
			}
		});
		return thas.result;
	}
	this.elInWindowTopBottom = function () {
		thas.updatePar();
		thas.currentElements.each((i, element) => {
			thas.offset = $(element).offset().top;
			thas.height = $(element).outerHeight();
			if (thas.scrollTop <= (thas.height + thas.offset) && thas.offset < (thas.scrollTop + thas.windowHeight)) {
				thas.result.push(element)
			}
		});
		return thas.result;
	}
	this.elInWindowTop = function () {
		thas.updatePar();
		thas.currentElements.each((i, element) => {
			thas.offset = $(element).offset().top;
			if (thas.scrollTop <= thas.offset && thas.offset < (thas.scrollTop + thas.windowHeight)) {
				thas.result.push(element);
			}
		});
		return thas.result;
	}
}

let visible_button,
	buttonInWindow = new ModuleInWindow($(".visible_button_js")); // кнопка при скролле до которой исчезает floating brn

function buttonActive(el) {
	visible_button = buttonInWindow.elInWindowTopBottom();
	if (visible_button.length == 0) {
		el.addClass('active');
	} else {
		el.removeClass('active');
	}
}

const floating_button = $('#floating_button_js'); // floating btn
buttonActive(floating_button);
$(window).on('scroll', (function () {
	buttonActive(floating_button);
}));