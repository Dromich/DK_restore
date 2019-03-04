$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
});

$(document).ready(function () {
		$(".preview").mousemove(function(e){
		X = Math.floor(e.pageX-$(this).offset().left) +1 ;
		Y = Math.floor(e.pageY-$(this).offset().top);
		//$(this).text(X);
		var page_a = 500 - X;
		if(X < 0)
			X = 0;
		if(X > 500)
			X = 500;
		if(Y < 0)
			Y = 0;
		if(Y > 330)
			Y = 330;
		$('.car_b').css('width', X);
		$('.preview .line').css('left', X);
		$('.car_a').css('width', page_a);
		$('.line .mark').css('top', Y);
	});
});

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});
