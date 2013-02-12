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
	
	parallax.videos.preload = function(){
		$('.videos-link').fadeOut(200);
	};
	
	parallax.videos.onload = function(){
		$('#videos .prev-link').fadeIn(200);
	};
	
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
		$('.subsection-clicky-open', $(this)).click(function(){
			$(this).parent().parent().children().each(function(){
				if (($(this).hasClass('subsection')) && !($(this).hasClass('bottom'))){
					$(this).fadeOut(30);
				};
			});
			$(this).parent().animate({
				top: '0px',
			}, 200);
		});
		$('.subsection-clicky-close', $(this)).click(function(){
			$(this).parent().parent().animate({
				top: '100%',
			}, 200);
			$(this).parent().parent().parent().children().fadeIn(30);
		});
	});
	
	$('.subsection.top').each(function(){
		$('.subsection-clicky-open', $(this)).click(function(){
			$(this).parent().parent().children().each(function(){
				if (($(this).hasClass('subsection')) && !($(this).hasClass('top'))){
					$(this).fadeOut(30);
				};
			});
			$(this).parent().animate({
				top: '0px',
			}, 200);
		});
		$('.subsection-clicky-close', $(this)).click(function(){
			$(this).parent().parent().animate({
				top: '-100%',
			}, 200);
			$(this).parent().parent().parent().children().fadeIn(30);
		});
	});
});

//keybindings wooooo!
$(document).keydown(function(a){
	if ($("#intro").css("display")=="block"){
		if (a.keyCode == 37){
			parallax.photos.left();
		}
		else if (a.keyCode == 38){
			parallax.who.top();
		}
		else if (a.keyCode == 39){
			parallax.videos.right();
		}
		else if (a.keyCode == 40){
			parallax.contact.bottom();
		};
	}
	else if ($("#videos").css("display")=="block"){
		if (a.keyCode == 37){
			parallax.last.left();
		};
	}
	else if ($("#contact").css("display")=="block"){
		if (a.keyCode == 38){
			parallax.last.top();
		};
	}
	else if ($("#photos").css("display")=="block"){
		if (a.keyCode == 39){
			parallax.intro.right();
		};
	}
	else if ($("#who").css("display")=="block"){
		if (a.keyCode == 40){
			parallax.intro.bottom();
		};
	};
});