//Adaptive functions
$(window).resize(function (event) {
	adaptive_function();
});
function adaptive_header(w, h) {
	var headerMenu = $('.menu__body');
	var headerList = $('.header__link');
	if (w < 1024) {
		if (!headerList.hasClass('done')) {
			headerList.addClass('done').appendTo(headerMenu);
		}
	} else {
		if (headerList.hasClass('done')) {
			headerList.removeClass('done').prependTo($('.header__list'));
		}
	}
}
function adaptive_function() {
	var w = $(window).outerWidth();
	var h = $(window).outerHeight();
	adaptive_header(w, h);
}
adaptive_function();