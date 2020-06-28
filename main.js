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
		$('#about_me').css('display', 'block');
	});

	$('#about_me_close').click(function(){
		$('#about_me').css('display', 'none');
	});

	$(function() {
        $(this).bind("contextmenu", function(e) {
            e.preventDefault();
        });
    }); 

});