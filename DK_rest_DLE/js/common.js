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
			url: "/bot.php", //Change
			data: th.serialize()
		}).done(function () {
			th.html('<h1>Дякуємо скоро ми з вами звяжемось!</h1>');
			setTimeout(function () {
				// Done Functions
				th.trigger("reset");
				$("#exampleModal .close").click();
				$("#exampleModal2 .close").click();
			

			}, 3000);
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


	$(".sbm_btn").click(function (e) { 
		if (!$('#np_btn').hasClass('active')) {
			
			$('#np_selectors').css('display', 'block');
		}
	   

	   
   }); 


});
$('#exampleModal2').on('shown.bs.modal', function () {
	$('#myInput').trigger('focus')
  })

$('#exampleModal').on('show.bs.modal', function (event) {

	$('.ajax_form').trigger("reset");
	$("#cities").load( "/file.php" );


	
    // get warehouses
    $('#cities').change(function(){
	//	var wh = $(this).val();
		
		var wh = $("#cities option:selected").data('cname')

        $.ajax({
            url : '/file.php',
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

	function getRandomID(min, max) {
		var int = Math.floor(Math.random() * (max - min + 1)) + min;
	  
		return int
	  }

	$('#np_btn').click(function (e) { 
		e.preventDefault();	
		$(this).addClass('active');	
		$('#np_selectors').slideToggle()
	});

	var button = $(event.relatedTarget) 
let costID = getRandomID(0, 1679615);
	var recipient = button.data('whatever') 
	var modal = $(this)
	modal.find('.modal-title').text('Замовлення товару ' + recipient)
	modal.find('#goods_id').val(costID)
	modal.find('#costumer_id').text(costID)
	modal.find('#goods_name').val(recipient)
	modal.find('#price_form').val(button.data('price'))
	
  })



 

$(window).load(function () {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});


	
$('.flowing-scroll').on( 'click', function(e){ 
	e.preventDefault();
    
    var dest = $(this).attr('data-target'); 
    if(dest !== undefined && dest !== '') { 
        $('html').animate({ 
            scrollTop: $(dest).offset().top 
        }, 1200 
        );
	}
	//$('#main_menu').slideToggle();
    return false;
});

$('#mob_menu_btn').click(function (e) { 
	e.preventDefault();
	$('#main_menu').slideToggle();

if ($(this).hasClass('but_to_right')) {
	$(this).removeClass('but_to_right');
	$(this).css('left', 0);
	$(this).html('<img src="/templates/DK_rest_DLE/img/menu.png" alt="menu_icon">');
	
}else{
	$(this).addClass('but_to_right');
	$(this).css('left', 250);
	$(this).html('<img src="/templates/DK_rest_DLE/img/close.png" alt="menu_icon">');
}



	
});