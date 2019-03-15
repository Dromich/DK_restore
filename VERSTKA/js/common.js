$(function () {

	//SVG Fallback
	if (!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function () {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$(".ajax_form").submit(function () { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function () {
			alert("Thank you!");
			setTimeout(function () {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if ($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch (err) {

	};

	$("img, a").on("dragstart", function (event) {
		event.preventDefault();
	});

});

$(document).ready(function () {
	$(".preview").mousemove(function (e) {
		X = Math.floor(e.pageX - $(this).offset().left) + 1;
		Y = Math.floor(e.pageY - $(this).offset().top);
		//$(this).text(X);
		var page_a = 500 - X;
		if (X < 0)
			X = 0;
		if (X > 500)
			X = 500;
		if (Y < 0)
			Y = 0;
		if (Y > 330)
			Y = 330;
		$('.car_b').css('width', X);
		$('.preview .line').css('left', X);
		$('.car_a').css('width', page_a);
		$('.line .mark').css('top', Y);
	});


    


});


$('#exampleModal').on('show.bs.modal', function (event) {


	$("#cities").load( "file.php" );

    // get warehouses
    $('#cities').change(function(){
	//	var wh = $(this).val();
		
		var wh = $("#cities option:selected").data('cname')

        $.ajax({
            url : 'file.php',
            type : 'POST',
            data : {
                'warehouses' : wh,
            },
            success : function(data) {
                $('#warehouses').html(data);
            },
            error : function(request,error)
            {
                $('#warehouses').html('<h2>Виникла помилка</h2>');
            }
        });
    })

	$('#olx_btn').click(function (e) { 
		e.preventDefault();

setTimeout(() => {
	window.location.href=button.data('olx-link');
	console.log(button.data('olx-link'))
}, 800);

		
	});

	$('#np_btn').click(function (e) { 
		e.preventDefault();

		$('#np_selectors').removeClass('hidden ');
		
	});




	var button = $(event.relatedTarget) // Button that triggered the modal

	var recipient = button.data('whatever') // Extract info from data-* attributes
	// If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
	// Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
	var modal = $(this)
	modal.find('.modal-title').text('Замовлення товару ' + recipient)
	modal.find('#goods_name').val(recipient)
  })





$(window).load(function () {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});