
jQuery(document).ready(function(){

  jQuery( ".calendar" ).datepicker({
		dateFormat: 'dd/mm/yy',
		firstDay: 1
	});
	
	jQuery(document).on('click', '.date-picker .input', function(e){
		var $me = jQuery(this),
				$parent = $me.parents('.date-picker');
		$parent.toggleClass('open');
	});
	
	
	jQuery(".calendar").on("change",function(){
		var $me = jQuery(this),
				$selected = $me.val(),
				$parent = $me.parents('.date-picker');
		$parent.find('.result').children('span').html($selected);
	});
});

