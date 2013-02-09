var height,
	width;

$(window).load(function(){
	height = $(window).height();
	width = $(window).width();
	$("#bg").css({'height': height*2+'px', 'width': width*2+'px', 'left': width*(-.5)+'px', 'top': height*(-.5)+'px'});
});

$(document).ready(function(){
	parallax.add($("#intro")).add($("#who")).add($("#contact")).add($("#videos")).add($("#photos"));
	parallax.background = $("#bg");
	parallax.scaling = 0.3;
	
	$('.who-link').click(function(){
		parallax.who.top();
	});
	
	$('.contact-link').click(function(){
		parallax.contact.bottom();
	});
	
	$('.videos-link').click(function(){
		parallax.videos.right();
	});
	
	$('.photos-link').click(function(){
		parallax.photos.left();
	});
	
	$('.prev-link.bottom-link').click(function(){
		parallax.last.bottom();
	});
	
	$('.prev-link.top-link').click(function(){
		parallax.last.top();
	});
	
	$('.prev-link.left-link').click(function(){
		parallax.last.left();
	});
	
	$('.prev-link.right-link').click(function(){
		parallax.last.right();
	});
	
	parallax.intro.show();
	
	$('.subsection.bottom').each(function(){
		sub = $(this);
		$(sub, '.subsection-clicky-open').click(function(){
			sub.animate({
				top: '0px',
			}, 100);
		});
		$(sub, '.subsection-clicky-close').click(function(){
			console.log('close');
		});
	});
});