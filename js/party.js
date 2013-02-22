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
	
	
	/////section movement
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
	
	////show the first panel
	parallax.intro.show();
	
	
	////show and hide the nav buttons
	parallax.preload = function(){
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
	
	///////text resizing in #who
	var target = $('#who .content > p'),
		text = target.text().split(''),
		targetWidth = $('#who').innerWidth()*.8,
		startCount = 20,
		endCount = 80,
		step = 10,
		currCount = startCount,
		currLine = [],
		nextLine = [],
		spaceCurr = -1,
		spaceNext = -1,
		currLetter;
	target.empty();
	for (var i=0; i < text.length; i++){
		target.append('<span>'+text[i]+'</span>');
	};
	
	currLetter = target.children().first();
	///this whole next block will have to be repeated until the endCount has been reached.
	for (var i=0; i < currCount; i++){
		currLine.push(currLetter);
		currLetter = currLetter.next();
	};
	
	for (var i=0; i<(step/2)-1; i++){
		nextLine.push(currLetter);
		currLetter = currLetter.next();
	};//and then you can just set currLetter = nextLine[0] when you need to start keeping track of currLine again
	
	for (var i=0; i<(step/2)-1; i++){
		if (spaceCurr == -1){
			if (currLine[currLine.length - 1 - i].text()==" "){
				spaceCurr = i;
			};
		};
		if (spaceNext == -1){
			if (nextLine[i].text()==" "){
				spaceNext = i;
			};
		};
	};
	
	function MoveUp(){
		console.log('move up!')
		for (var i=0; i<spaceNext; i++){
			currLine.push(nextLine[i]);
			currCount++;
		};
		console.log(currLine);
	};
	
	function MoveDown(){
		console.log('move down!')
	};
	
	if (spaceCurr != -1){
		if (spaceCurr > spaceNext){
			MoveDown();
		}
		else{
			MoveUp();
		};
	}
	else{
		if (spaceNext != -1){
			MoveUp();
		};
	};
	
	
	
	//keep the stuff below
	//var curr = $(this).text(),
	//	punctuation = [".", ",", ";", ":"];
	//for (var i=0; i<=punctuation.length; i++){
	//	if (curr==punctuation[i]){
	//		$(this).css('text-align', 'left');
	//	};
	//};
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