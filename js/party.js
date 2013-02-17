var height,
	width,
	current;

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
		current = 'who';
		parallax.who.top();
	});
	
	$('.contact-link').click(function(){
		current = 'contact';
		parallax.contact.bottom();
	});
	
	$('.videos-link').click(function(){
		current = 'videos';
		parallax.videos.right();
	});
	
	$('.photos-link').click(function(){
		current = 'photos';
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
	
	parallax.preload = function(){
		console.log(current);
		$('#'+current+' .prev-link').fadeIn(800);
		$('#intro .'+current+'-link').fadeOut(800);
	};
	
	parallax.intro.preload = function(){
		$('#'+current+' .prev-link').fadeOut(800);
		$('#intro .'+current+'-link').fadeIn(800);
	};

/////subsection behavior	
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
			current = 'photos';
			parallax.photos.left();
		}
		else if (a.keyCode == 38){
			current = 'who';
			parallax.who.top();
		}
		else if (a.keyCode == 39){
			current = 'videos';
			parallax.videos.right();
		}
		else if (a.keyCode == 40){
			current = 'contact';
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