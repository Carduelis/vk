// goldfinch.pro
// ============================================
// Здесь описываются действия с элементами
// ============================================
$(document).ready(function(){


$('.element').each(function(){
	var status = 0;
	var element = $(this);
	var clicker = element.find('.click');
	var body = element.children('.body')
	element.find('a').attr('href','javascript:void(0);');

	var positions = element.attr('positions');
	var defaultPosition = element.attr('defaultposition');
	
	

	if (element.attr('type') == 'knob') {
		clicker
			.before('<a href="javascript:void(0);" class="cw" style="display: none;">')
			.after('<a href="javascript:void(0);" class="ccw" style="display: none;">');
		element
			.hover(
				function(){
					clicker.prev().show();
					clicker.next().show();
				}, 
				function(){
					clicker.prev().hide();
					clicker.next().hide();
				}
			);
		//var status = element.attr('status');
		var step = 15;
		var rotate = step*(1-positions+2*status);
		body.css('transform','rotate('+rotate+'deg)');

		element.find('.cw').on('click', function(){	
			if (status < positions-1) {
				status++;
				element.attr('status',status);
				var rotate = step*(1-positions+2*status);
				body.css('transform','rotate('+rotate+'deg)');
			}
		});

		element.find('.ccw').on('click', function(){	
			if (status > 0) {
				status--;	
				element.attr('status',status);
				var rotate = step*(1-positions+2*status);
				body.css('transform','rotate('+rotate+'deg)');
			}
		});
	}
	if (element.attr('type') == 'toggler') {
		clicker.on('click',function(){
			if (element.attr('defaultposition')) {
				status = 1;
				element.removeAttr('defaultposition');
			} 
			if (status) status = 0
			else status = 1
			element.attr('status',status)
		});
	}
	if (element.attr('type') == 'lamp') {
		clicker.on('click',function(){
			if (element.attr('defaultposition') == "on")
			{
			status = 0;
			element.attr('defaultposition','off');
			}
			else
			{
			status = 1;
			element.attr('defaultposition','on');
			}
			element.attr('status',status)
		});
	}
	
	if (element.attr('type') == 'fuse') {
		clicker.on('click',function(){
			alert('Я предохранитель');
		});
	}
	if (element.attr('type') == 'rotator') {
		clicker.after('<div class="slider" style="display: none;">');
		clicker.next('.slider').slider({
	      value:180,
	      min: 0,
	      max: 360,
	      step: 36,
	      slide: function( event, ui ) {
	        body.css('transform','rotate('+ui.value+'deg)')
	      }
		});
		clicker.on('click',function(){
			clicker.next('.slider').fadeToggle();
		});
		$('.ui-slider-handle').mouseup(function(){
			clicker.next('.slider').fadeOut();
		});
	}
});


});