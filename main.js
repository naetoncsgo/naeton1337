$(document).ready(function(){
	var fel = true;
	$('#header').slideUp();
	$('#main-welcome').fadeIn('slow');
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

	$(function() {
        $(this).bind("contextmenu", function(e) {
            e.preventDefault();
        });
    }); 

});