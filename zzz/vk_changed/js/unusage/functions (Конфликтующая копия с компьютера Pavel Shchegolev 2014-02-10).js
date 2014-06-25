//fitText if needed
//jQuery(".phones b").fitText();

$(document).ready(function(){
// Главная страница
/*
var viewportWidth = $('#container').width();
$('#container, #container > ul > li').css('width',viewportWidth);

*/
var viewportWidth = $('#container').width();
$('#container > ul > li').css('width',viewportWidth);
var countOfLi = $('#container > ul > li').length;
$('#container').css('width',viewportWidth*countOfLi);
/*
$('element').each(function(){
	var elementWidth = $(this).width();
	elementNewWidth = elementWidth*viewportWidth/20;
	$(this)
		.css('padding',elementNewWidth/2)
		.css('margin-top','-'+elementNewWidth/2)
		.css('margin-left','-'+elementNewWidth/2);
});
*/

$('#addBody a')
  .data('counter', 0)
  .bind('click',function() {
    var counter = $(this).data('counter');
    $(this).data('counter', counter + 1);

    var typeOfControl = $(this).attr('id');  
    $('#container').append(element(typeOfControl, $(this).data('counter')));
    $('.element').draggable({ grid: [ 5, 5 ] });
  })
;

function element(typeOfControl, i) {
  return '<div class="element" type="'+typeOfControl+'" num="'+i+'">  <div class="overlay"></div><div class="body"></div>  <div class="control"><a href="" class="click"></a></div>  <div class="description"></div>  </div>'
}

$( ".element" ).draggable();
$( "#container" ).droppable({
 drop: function(event, ui) {
    var a=event.type; // возвращает название события ('drop')
    var element = ui.draggable;

    // Делаем из пикселей проценты
    var viewportHeight = $(this).height();
    var l=ui.position.left;
    var t=ui.position.top;
    // Переводим значения 
    var lPercent = l*100/viewportWidth;
    var tPercent = t*100/viewportHeight;
    // Применяем значения
    element.css('left',lPercent+'%');
    element.css('top',tPercent+'%');

    var elementPublicId = element.attr('type')+element.attr('num');
    element.find('select').remove();
    element.find('.overlay').append(select(element.attr('type')));
    $('select').bind('change', function(){
    	var nameAttr = ""; 
    	nameAttr += $(this).attr('data');
    	var val = ""; 
    	val += $(this).children('option:selected').val();
		$(this).parents('.element').attr(nameAttr, val);
    });
    $('#sendToLog').bind('click',function(){
    	$('#log').append('<div>["'+element.attr('type')+'"] { left: '+l+'px; top: '+t+'px; }</div>');
  	});
  }
});



function select(typeOfElement) {
	// эквивалентны записи var options = {} и var options = new Object(); 
  	var startHtmlTags = '<div class="box"><label>';
  	var endHtmlTags = '</select></div>';
	var options = { }
	if (typeOfElement == 'knob'){
		options = {
  			positions: startHtmlTags+'Количество позиций</label><select data="positions">',
	  		defaultPosition: startHtmlTags+'Позиция по умолчанию</label><select data="defaultPosition">'
		}
		var max = 12;
		for (var i = 0; i < max; i++) {
		   options.positions += '<option value="'+i+'">'+i+'</option>';
		   options.defaultPosition += '<option value="'+i+'">'+i+'</option>';
		}
	}
	if (typeOfElement == 'toggler'){
		options = {
  			defaultPosition: startHtmlTags+'Позиция по умолчанию</label><select data="defaultPosition">',
  			view: startHtmlTags+'Вид тумблера</label><select data="view">',
		}
		var max = 3;
		for (var i = 0; i < max; i++) {
		   options.defaultPosition += '<option value="'+i+'">'+i+'</option>';
		}
		   options.view += '<option value="simple">Двухпозиционный</option><option value="rotate">Поворотный</option><option value="complicated">Трехпозиционный</option>';
	}
	if (typeOfElement == 'lamp') {
		options = {
	  		color: startHtmlTags+'Цвет</label><select data="color">',
	  		defaultPosition: startHtmlTags+'Позиция по умолчанию</label><select data="defaultPosition">',
			size: startHtmlTags+'Тип</label><select data="size">'
		}
		var max = 2;	
		options.size += '<option value="big">Обычная</option><option value="small">Небольшая</option>';
		options.defaultPosition += '<option value="off">Не горит</option><option value="on">Горит</option>';
		options.color += '<option value="yellow">Желтая</option><option value="green">Зеленая</option><option value="red">Красная</option>';
	}
	if (typeOfElement == 'rotator') {
		endHtmlTags = '';
		options = {
	  		range: startHtmlTags+'Количество позиций</label><input data="range" type="text" value="100"></div>',
	  		interval: startHtmlTags+'Интервал</label><input data="interval" type="text" value="0"></div>',
	  		defaultPosition: startHtmlTags+'Позиция по умолчанию</label><input data="defaultPosition" value="0"></div>',
			view: startHtmlTags+'Вид потенциометра</label><select type="view"><option value="cap">С ручкой</option><option value="nocap">Без ручки</option></select></div>',
		}
		var max = 2;
		for (var i = 0; i < max; i++) {
		   options.defaultPosition += '<option value="'+i+'">'+i+'</option>';
		}
	}
	if (typeOfElement == 'socket'){
		options = {
  			typeOfSocket: startHtmlTags+'Количество отверстий</label><select data="typeOfSocket">',
		}
		options.typeOfSocket += '<option value="one">Одно</option><option value="two">Два</option><option value="four">Четыре</option>';
	}
	var result = '<div class="selectBox">';
	for (var i in options) {
		options[i] += endHtmlTags;
		result += options[i];
	}
	result += '<button id="sendToLog">Записать</button></div>';
	return result
	//'<div class="selectBox">'+options.defaultPosition+'<button id="writeToLog">Записать</button></div>'
}





});



// ----------------------------
// Показать верхнее меню
// ----------------------------

$('header .btn a').bind('click',function() {
  var thisLink = $(this);
  var openBlockId = thisLink.parent().attr('id');
  var openBlockId = openBlockId+'Body';
  var openBlock = $('.hidden-block#'+openBlockId);
  openBlock.slideToggle();
  thisLink.toggleClass('active');
  $('.hidden-block').not(openBlock).slideUp();
  $('header .btn a').not(thisLink).removeClass('active');
});



// ----------------------------
// Переключение видов
// ----------------------------
$('.btn-group > .inside > .btn').bind('click',function() {
  var t = $(this);
  var p = t.parents('.multi-view');
  p.find('.btn').removeClass('active');
  p.find('.view').hide();
  t.addClass('active');
  p.find('.view:eq('+ t.index() +')').fadeIn(300);
});
$('.btn-group > .inside > .btn:first-child').addClass('active');
$('.view-group > .view:first-child').show();


// ----------------------------
// Плавная прокрутка
// ----------------------------
 function filterPath(string) {
  return string
    .replace(/^\//,'')
    .replace(/(index|default).[a-zA-Z]{3,4}$/,'')
    .replace(/\/$/,'');
  }
  var locationPath = filterPath(location.pathname);
  var scrollElem = scrollableElement('html', 'body');
 
  $('a[href*=#]').each(function() {
    var thisPath = filterPath(this.pathname) || locationPath;
    if (  locationPath == thisPath
    && (location.hostname == this.hostname || !this.hostname)
    && this.hash.replace(/#/,'') ) {
      var $target = $(this.hash), target = this.hash;
      if (target) {
        var targetOffset = $target.offset().top;
        $(this).click(function(event) {
          event.preventDefault();
          $(scrollElem).animate({scrollTop: targetOffset}, 400, function() {
            location.hash = target;
          });
        });
      }
    }
  });
 
  // use the first element that is "scrollable"
  function scrollableElement(els) {
    for (var i = 0, argLength = arguments.length; i <argLength; i++) {
      var el = arguments[i],
          $scrollElement = $(el);
      if ($scrollElement.scrollTop()> 0) {
        return el;
      } else {
        $scrollElement.scrollTop(1);
        var isScrollable = $scrollElement.scrollTop()> 0;
        $scrollElement.scrollTop(0);
        if (isScrollable) {
          return el;
        }
      }
    }
    return [];
  }

