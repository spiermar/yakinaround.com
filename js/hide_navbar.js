$(document).ready(function() {
	/* fade in .navbar */
	$(function () {
		$(window).scroll(function () {
			/* set distance user needs to scroll before we fadeIn navbar */
			if ($(this).scrollTop() > 550) {
				$('.navbar').fadeIn();
			} else {
				$('.navbar').fadeOut();
			}
		});
	});
});
