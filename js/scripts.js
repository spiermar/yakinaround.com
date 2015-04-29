
$(document).ready(function(){
	/* smooth scrolling for scroll to top */
	$('.scroll-top').click(function(){
		$('body,html').animate({scrollTop:0},1000);
	})

	/* smooth scrolling for scroll down */
	$('.scroll-down').click(function(){
		$('body,html').animate({scrollTop:$(window).scrollTop()+800},1000);
	});

	/* highlight the top nav as scrolling occurs */
	$('body').scrollspy({ target: '#navbar' });

	$(window).scroll(function() {
		if($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
			$("#scroll-down-button").hide();
		} else {
			$("#scroll-down-button").show();
		}
	});

	$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

	var timerId = countdown(
		new Date(2015, 6, 19, 8, 0, 0),
		function(ts) {
			$('#countdown').html(ts.toString());
		},
    	countdown.MONTHS|countdown.DAYS|countdown.HOURS|countdown.MINUTES|countdown.SECONDS);
});
