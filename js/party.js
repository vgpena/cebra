var height,
	width;

$(window).load(function(){
	height = $(window).height();
	width = $(window).width();
	$("#bg").css({'height': height*2+'px', 'width': width*2+'px', 'left': width*(-.5)+'px', 'top': height*(-.5)+'px'});
});

$(document).ready(function(){
	parallax.add($("#intro")).add($("#about"));
	parallax.background = $("#bg");
	parallax.scaling = 0.3;
	
	$('.about-link').click(function(){
		parallax.about.left()
	});
	$('.intro-link').click(function(){
		parallax.intro.bottom()
	});
	
	parallax.intro.show();
});