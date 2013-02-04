$(window).on("load resize", function(){
	$('#splash').height($(window).height()-90);
	$('.video iframe').each(function(){
		$(this).height($(this).width()*(315/560));
	});
});