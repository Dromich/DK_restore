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
			url: "/mail.php", //Change
			data: th.serialize()
		}).done(function () {
			//alert("Thank you!");
			setTimeout(function () {
				// Done Functions
				th.trigger("reset");
				$("#exampleModal .close").click();
			

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
$('#exampleModal2').on('shown.bs.modal', function () {
	$('#myInput').trigger('focus')
  })

$('#exampleModal').on('show.bs.modal', function (event) {

	$('.ajax_form').trigger("reset");
	$("#cities").load( "/file_ru.php" );


	
    // get warehouses
    $('#cities').change(function(){
	//	var wh = $(this).val();
		
		var wh = $("#cities option:selected").data('cname')

        $.ajax({
            url : '/file_ru.php',
            type : 'POST',
            data : {
                'warehouses' : wh,
            },
            success : function(data) {
                $('#warehouses').html(data);
            },
            error : function(request,error)
            {
                $('#warehouses').html('<h2>Ошибка</h2>');
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
		$('#np_selectors').slideToggle()
	});

	var button = $(event.relatedTarget) 

	var recipient = button.data('whatever') 
	var modal = $(this)
	modal.find('.modal-title').text('Заказ товара ' + recipient)
	modal.find('#goods_name').val(recipient)
	modal.find('#price_form').val(button.data('price'))
	
  })





$(window).load(function () {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});