$(document).ready(function(){
	var fel = true;
	$('#header').slideUp();
	$('#drop-button').click(function(){
		$('#header').slideToggle();
		$(this).attr('value', '^');
		if(fel == true){
			$('#drop-button').text('▲');
			fel = false;
		}else{
			$('#drop-button').text('▼');
			fel = true;
		}
	});

	$('#ab_me').click(function(){
		$('#about_me').animate({
			opacity: '1'
		});
		$('#about_me_close').css('display', 'block');
	});

	$('#about_me_close').click(function(){
		$('#about_me_close').css('display', 'none');
		$('#about_me').animate({
			opacity: '0'
		});
		
	});

	$(function() {
        $(this).bind("contextmenu", function(e) {
            e.preventDefault();
        });
    }); 

});