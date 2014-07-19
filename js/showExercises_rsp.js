
// Показ упражнений

var eN = 1;
var pN = 1;
var aN = 1;
//var eNdouble = 1;
var isPositionsThereBoolean = true;

$('#go').one('click',function(){
	$('.header').append('<li class="btn"><a><i>Упражнение: </i>'+exercisesContainer[thisExId].nameOfExercise+'</a></li>');

	if (helloText[thisExId]) {
		alert(helloText[thisExId]);
	}
	$('#chooseExercise').hide();
	// Создаем переменные 
	for(var i in exercisesOptions[thisExId]) {
		numOfOptions = Object.keys(exercisesOptions[thisExId][i].options).length; // У нас всегда равно 2
		window[exercisesOptions[thisExId][i].typeName] = exercisesOptions[thisExId][i].options['option'+random(numOfOptions)].codeName
		console.info(exercisesOptions[thisExId][i].typeName+': '+window[exercisesOptions[thisExId][i].typeName]);
	}

		detectMultiply();
		console.info(choosenParam);
	// Пишем выбранные параметры
	$('#chooseExerciseBody .options a.active').each(function(){
		optionBlock = $(this).attr('data-type');
		window[exercisesOptions[thisExId][optionBlock].typeName] = $(this).attr('data-codename');
	})
	for(var i in exercisesOptions[thisExId]) {
		console.info(exercisesOptions[thisExId][i].typeName+': '+window[exercisesOptions[thisExId][i].typeName]);
	};
	// Фазоиндикатор
	if ((thisExId == 'ex1') || (thisExId == 'ex2')) {
		if (phases == 'phase_incorrect') {
			$('.element[view_special="phase"]').attr('phase','incorrect')
		}
		if (phases == 'phase_correct') {
			$('.element[view_special="phase"]').attr('phase','correct')
		}
	}
		
	$('#history').one('click', function(){
		exportAlgorythm(thisExId);
	})

	wow_first(eN,pN); // Показали первый элемент в первой позиции
	$('#chooseExerciseBody').hide(); // Скрыли ненужное
	$('#chooseExercise a').removeClass('active'); // И еще скрыли
	
	$('.element').on('click',function() {
	////////
		detectMultiply();
		var thisType = $(this).attr('type');
		var thisNum = $(this).attr('num');
		var thisStatus = $(this).attr('status');
		var thisView = $(this).attr('view');
		var thisViewSpecial = $(this).attr('view_special');
		var thisSide = $(this).parent().attr('id');
		var thisBlock = $(this).parent().parent().attr('id');

		history(thisType,thisNum,thisStatus,thisSide,thisBlock);

		if (
			(thisNum == str_whatever(eN, 'num',choosenParam) )
			&&
			(thisType == str_whatever(eN, 'type',choosenParam) )
		) { // Примерное условие, чтобы подсказки для следующих элементах не появлялись при клике куда попало
			console.info('choosenParam: '+choosenParam+'; eN: '+eN+'; ');
			
			if (isShift(eN,choosenParam)) {
				console.info(eN);
				eN = +eN + +thisEx[thisExId]['el'+eN][choosenParam].shift;
				pN = 1;
				console.info(eN);
				wow(eN,pN, choosenParam);
			} else {
				if ($(this).attr('status') == str_pos_whatever(eN, 'state',pN,choosenParam)) { // Когда текущий контрол в нужной позиции
					aN = 1; // Сбрасываем в дефолтное состояние, так как при новой позиции элемента эта переменная равна числу событий предыдущей позиции
					// Проверка: все ли позиции данного элемента учтены?
					if (isPositionsThere(eN,choosenParam))  { // Нет, еще есть позиции
						isPositionsThereBoolean = false;
						for (var i = 0; i < positionsObj(eN,pN,choosenParam)-2; i++) {
							show(eN,pN,aN,choosenParam);
							//console.info(posCount(thisEx[thisExId]['el'+eN].positions['position_'+pN])+'; if(choosenParam): '+positionsObj(eN,pN,choosenParam));
							aN++
						};
						pN++ // идем к следующей позиции
						wow(eN,pN,choosenParam); // показываем информацию о следующей позиции текущего элемента
			
						
					} else { // все учтено, следующий элемент

						isPositionsThereBoolean = true;
						if (thisEx[thisExId]['el'+(eN+1)]) {
							console.info('multiply: '+thisEx[thisExId]['el'+eN].multiply+'; '+thisEx[thisExId]['el'+(eN+1)].multiply+': '+choosenParam);
						} else {
							console.info('multiply: '+thisEx[thisExId]['el'+eN].multiply+'; конец');
						}
						for (var i = 0; i < positionsObj(eN,pN,choosenParam)-2; i++) {
							show(eN,pN,aN,choosenParam);
							//console.info(posCount(thisEx[thisExId]['el'+eN].positions['position_'+pN])+'; if(choosenParam): '+positionsObj(eN,pN,choosenParam));
							aN++
						};

						pN = 1; // в предыдущем элементе накопился счетчик позиций, надо сбросить
						
						if (eN != posCount(thisEx[thisExId]) - 1)  { // Проверка: последний ли элемент?
							eN++;
							 // Идем к следующему элементу
							detectMultiply();
							// Если следующий элемент содержит shift, то wow(eN,pN,choosenParam) не может ничего показать

							if (isShift(eN,choosenParam)) {

								console.info(eN);
								eN = +eN + +thisEx[thisExId]['el'+eN][choosenParam].shift;
								eN++;
								// Нам так же нужно еще раз проверить новое значение choosenParam
								detectMultiply();
								console.info(eN);
							}
						/*
							if (obj_element(eN, choosenParam).attr('status') == str_pos_whatever(eN, 'status', 1, choosenParam) ) {
								if(isPositionsThereBoolean) {
									//wow(eN,(pN+1),choosenParam); // Показываем информацию о следующем элементе
								} else {
									//wow((eN+1),pN,choosenParam); // Показываем информацию о следующем элементе
								}
							} else {

							}
							*/
console.info('Статус текущего элемента: '+obj_element(eN, choosenParam).attr('status'));
console.info('Необходимый статус элемента (pN): '+str_pos_whatever(eN, 'state',pN,choosenParam));
if (obj_element(eN, choosenParam).attr('status') == str_pos_whatever(eN, 'state',pN,choosenParam)) {

	if (isPositionsThere(eN,choosenParam)) {
		aN = 1;
		for (var i = 0; i < positionsObj(eN,pN,choosenParam)-2; i++) {
			show(eN,pN,aN,choosenParam);
			//console.info(posCount(thisEx[thisExId]['el'+eN].positions['position_'+pN])+'; if(choosenParam): '+positionsObj(eN,pN,choosenParam));
			aN++
		};
		pN++;
	} else {
		eN++;
		detectMultiply();
	}
}
							wow(eN,pN,choosenParam); // Показываем информацию о следующем элементе

						} else {
							alert('Упражнение выполнено!');
							hideAndRemoveAllHints(); // Скрываем остаточную инфу от всех элементов
							$('#bx-pager, #history').show();
							$('#history + .btn').remove();
							$('#showBxPager').hide();
							$('#chooseExercise,#reloadPage').addClass('active');
						}
					}
				}
			}

		}
		//////////////////////////////////////////////////

/*
		$('.element[type="scale"]').each(function(){
			var statusDeg = $(this).attr('status');
			$(this).find('.body').css('-webkit-transform','rotate('+(statusDeg-15)+'deg)');

		});
		setTimeout(function(){
			$('.element[type="scale"]').each(function(){
				var statusDeg = $(this).attr('status');
				$(this).find('.body').css('-webkit-transform','rotate('+statusDeg+'deg)');
			});
		},600);
		*/
	});

// Подсветка
$('#stack7_block1_front .element[type="toggler"][num="4"]').on('click', function(){
  if ($(this).attr('status') == '0') {
    $('#stack7_block1_front .element[type="scale"][num="1"]').addClass('light');
  } else {
    
    $('#stack7_block1_front .element[type="scale"][num="1"]').removeClass('light');
  }
})
});



function hideAndRemoveAllHints() {
	$('section, #bx_pager a, .element').removeClass('shadow');
	$('.element').find('.hint').remove();
	$('#bx-pager *').removeClass('shadow');  // wtf ??????!??!??!?!?!?
}



var screenTop;
var screenBottom;
var elementOffsetTop; 
var screenHeight = $(window).height();
$(window).resize(function(){
	screenHeight = $(this).height();
	//console.info(screenHeight);
});
$(window).scroll(function(){
	screenTop = $(this).scrollTop();
	screenBottom = screenTop + screenHeight;
	//console.info(screenTop);
});
function focusOnElement(parameter){
	//elementOffsetLeft = obj_element(eN, choosenParam).offset().left;
	if (parameter) {
		elementOffsetTop = parameter
	} else {
		if(obj_element(eN, choosenParam)) {
			if(obj_element(eN, choosenParam).offset()) {
				elementOffsetTop = obj_element(eN, choosenParam).offset().top;
			}
		}
	}
	if (elementOffsetTop < screenTop) {
		$('#look-up').addClass('show');
	} else if (elementOffsetTop > screenBottom) {
		$('#look-down').addClass('show');
	}
	$(window).scroll(function(){
		if (elementOffsetTop < screenTop) {
			$('#look-up').addClass('show');
		} else if (elementOffsetTop > screenBottom) {
			$('#look-down').addClass('show');
		}
		if (
			(elementOffsetTop > screenTop)
			&&
			(elementOffsetTop < screenBottom)
		) {
			$('#look-up').removeClass('show');
			$('#look-down').removeClass('show');
		}
	});

	$('#look-up, #look-down').on('click', function(){
		$('body').animate({
			scrollTop: elementOffsetTop-(screenHeight/2)
		}, 300);
		//

	});

	console.info(isPositionsThereBoolean+' '+pN+' '+posCount(thisEx[thisExId]['el'+eN].positions));
	detectMultiplyPrev();
	if (
		(str_whatever((eN-1),'inStack',choosenParamPrev)) 
		// проверяет наличие значения stackN_blockM_side
		&&
		(str_whatever(eN,'inStack',choosenParam) != str_whatever((eN-1),'inStack',choosenParamPrev))
		&& 
		(isPositionsThereBoolean)
	)	{

		setTimeout(function(){
			$('#bx-pager').fadeIn();
			$('#showBxPager').removeClass('attention').hide();
		},500);
	}
}


/*
function show(eN, pN, aN, choosenParam) {
	if (choosenParam) {
		if (str_action_whatever(eN, 'type', pN, aN, choosenParam) == 'scale') {
			$('#'+str_action_whatever(eN, "onSide", pN, aN,choosenParam)+' .element[type="'+str_action_whatever(eN, "type", pN, aN,choosenParam)+'"][num="'+str_action_whatever(eN, "num", pN, aN,choosenParam)+'"]').attr('status',str_action_whatever(eN, 'status', pN, aN,choosenParam));

			$('#'+str_action_whatever(eN, "onSide", pN, aN,choosenParam)+' .element[type="'+str_action_whatever(eN, "type", pN, aN,choosenParam)+'"][num="'+str_action_whatever(eN, "num", pN, aN)+'"] .body').css('-webkit-transform','rotate('+(str_action_whatever(eN, "status", pN, aN,choosenParam)-15)+'deg)');
			setTimeout(function(){
			$('#'+str_action_whatever(eN, "onSide", pN, aN,choosenParam)+' .element[type="'+str_action_whatever(eN, "type", pN, aN,choosenParam)+'"][num="'+str_action_whatever(eN, "num", pN, aN)+'"] .body').css('-webkit-transform','rotate('+str_action_whatever(eN, "status", pN, aN,choosenParam)+'deg)');
			}, 300);
			//alert('scale');//.find('.body').css('transform','rotate('+str_action_whatever(eN, 'status', pN, aN)+'deg)')
		} else {
			$('#'+str_action_whatever(eN, 'onSide', pN, aN,choosenParam)+' .element[type="'+str_action_whatever(eN, 'type', pN, aN,choosenParam)+'"][num="'+str_action_whatever(eN, 'num', pN, aN,choosenParam)+'"]').attr('status',str_action_whatever(eN, 'status', pN, aN,choosenParam));
			//alert('lamp');
		}

	} else {
		if (str_action_whatever(eN, 'type', pN, aN) == 'scale') {
			$('#'+str_action_whatever(eN, 'onSide', pN, aN)+' .element[type="'+str_action_whatever(eN, 'type', pN, aN)+'"][num="'+str_action_whatever(eN, 'num', pN, aN)+'"]').attr('status',str_action_whatever(eN, 'status', pN, aN));
			$('#'+str_action_whatever(eN, 'onSide', pN, aN)+' .element[type="'+str_action_whatever(eN, 'type', pN, aN)+'"][num="'+str_action_whatever(eN, 'num', pN, aN)+'"] .body').css('-webkit-transform','rotate('+str_action_whatever(eN, 'status', pN, aN)+'deg)');
			//alert('scale');//.find('.body').css('transform','rotate('+str_action_whatever(eN, 'status', pN, aN)+'deg)')
		} else {
			$('#'+str_action_whatever(eN, 'onSide', pN, aN)+' .element[type="'+str_action_whatever(eN, 'type', pN, aN)+'"][num="'+str_action_whatever(eN, 'num', pN, aN)+'"]').attr('status',str_action_whatever(eN, 'status', pN, aN));
			//alert('lamp');
		}
		//alert('show function'+eN+pN+aN);
	}
}


function str_action_whatever(eN, subject, pN, aN, choosenParam) 	{
	 if (choosenParam) {
		 return thisEx[thisExId]['el'+eN][choosenParam].positions['position_'+pN]['action_'+aN][subject];
	 } else {
	 	if (thisEx[thisExId]['el'+eN].positions) {
		 return thisEx[thisExId]['el'+eN].positions['position_'+pN]['action_'+aN][subject];
	 	}
	 }
	}
*/

function exportAlgorythm(thisExId) {
	$('#expectations').append('<table><tbody><tr><th>#</th><th>Блок</th><th>Тип элемента</th><th>Описание</th></tr></tbody></table>');
	for (var i = 1; i < Object.keys(exercisesContainer[thisExId]).length; i++) {
		var oneAction = Object.keys(exercisesContainer[thisExId])[i];
		//var eN = i; // detectMultiply внутри содержит переменную eN
		//detectMultiply();
		
		if (exercisesContainer[thisExId]['el'+i].multiply) {
			console.info('i'+i) // 1,2,3,4..
			for(var j in exercisesOptions[thisExId]) {
				console.info('j'+j) // optionBlock1 / optionBlock2
				if (exercisesContainer[thisExId]['el'+i].multiply == exercisesOptions[thisExId][j].typeName) {
					console.info(exercisesOptions[thisExId][j].typeName) // fiders / phases
					choosenParam = window[exercisesOptions[thisExId][j].typeName];
					console.info(choosenParam)
				}
			}
		} else {
			choosenParam = null;
		}
			var element = obj_element(i,choosenParam);
			var text = str_pos_whatever(i, 'description', 1, choosenParam);
			var block = nameOfBlock(str_whatever(i,'inBlock',choosenParam));
			if (isShift(i,choosenParam)) {
				console.info('shift'+i);
				i = +i + +thisEx[thisExId]['el'+i][choosenParam].shift;
				console.info('shift'+i);
			}
		
		
		
		$('#expectations tbody').append('<tr><td>'+i+'</td><td>'+block+'</td><td><div class="element-container"></div></td><td><p>'+text+'</p></td></tr>');
		$('#expectations tbody tr:eq('+i+') .element-container').append(element);
	};
}

function showDependentAction(eN,pN,aN) {
	var thisOnSide, thisNum, thisType, thisStatus;
	thisOnSide = thisEx[thisExId]['el'+eN].positions['position_'+pN]['action_'+aN].onSide;
	thisNum = thisEx[thisExId]['el'+eN].positions['position_'+pN]['action_'+aN].num;
	thisType = thisEx[thisExId]['el'+eN].positions['position_'+pN]['action_'+aN].type;
	thisStatus = thisEx[thisExId]['el'+eN].positions['position_'+pN]['action_'+aN].status;
	$('#'+thisOnSide+' .element[type="'+thisType+'"][num="'+thisNum+'"]').attr('status',thisStatus);
}



function posCount(obj) {
   var a = 0;
   for (var i in obj)
      a++
   return a
}

historyClick = 1;
function history(thisType,thisNum,thisStatus,thisSide,thisBlock) {
	$('#reality tbody').append('<tr><td>'+historyClick+'</td><td>'+nameOfBlock(thisBlock)+'</td><td>'+nameOfControl(thisType)+' №'+thisNum+'</td></tr>');
	historyClick++;
}






function showhint(eN, choosenParam) {
	// TO DO 
	// Вбить значения в html, и цеплять их оттуда
	var block = nameOfBlock(str_whatever(eN, 'inBlock', choosenParam));	
	var stack = nameOfStack(str_whatever(eN, 'inStack'));

	$('#showhint span').html('Стойка: <b class="active" id="goToStack">'+stack+'</b>, Блок: <b id="goToBlock">'+block+'</b>');


if(choosenParam) {
	$('#bx-pager a').not($('.'+str_whatever(eN, 'inStack', choosenParam))).addClass('opacity'); // minimap-stack
	$('.'+str_whatever(eN, 'inStack',choosenParam)).addClass('shadow'); // minimap-stack
	$('#min_'+str_whatever(eN, 'inBlock',choosenParam)).addClass('shadow'); // minimap-block
	/*
	if (str_whatever(eN, 'inBlock', choosenParam) != str_whatever(eN, 'inBlock'+1, choosenParam)) {
		$('#showBxPager').addClass('attention');
		//$('#showhint span').html('Действия на данном блоке завершены. <b class="active" id="goToBlock">Кликните здесь для перехода к следующему блоку</b> или воспользуйтесь кнопкой перехода к общему виду: "Показать РСП-11 целиком"');
	}
	*/
} else {
	$('#bx-pager a').not($('.'+str_whatever(eN, 'inStack'))).addClass('opacity'); // minimap-stack
	$('.'+str_whatever(eN, 'inStack')).addClass('shadow'); // minimap-stack
	$('#min_'+str_whatever(eN, 'inBlock')).addClass('shadow'); // minimap-block
	/*
	if (str_whatever(eN, 'inBlock') != str_whatever(eN, 'inBlock'+1)) {
		$('#showBxPager').addClass('attention');
		//$('#showhint span').html('Действия на данном блоке завершены. <b class="active" id="goToBlock">Кликните здесь для перехода к следующему блоку</b> или воспользуйтесь кнопкой перехода к общему виду: "Показать РСП-11 целиком"');
	}
	*/
}


	$('#goToStack').on('click', function(){
		slider.goToSlide(str_whatever(eN, 'inStack',choosenParam).charAt(5));
		//$(this).removeClass('active');
		$('#goToBlock').addClass('active');
	});

	$('#goToBlock').on('click', function(){ 
		var offset = $('#'+str_whatever(eN, 'inBlock',choosenParam)).offset();
		slider.goToSlide(str_whatever(eN, 'inStack',choosenParam).charAt(5));
		$('body').scrollTop(offset.top);
	});
}
/*
$( document ).ready(function() {
$('#stack3_block2_front').each(function(){
	var $scale = $(this).find($('[type="scale"][num="37"]'));
	var scale_status = $scale.attr('status');
	var $rotator = $(this).find($('[type="rotator"][num="1"]'));
	$rotator.slider({
	  slide: function( event, ui ) {
	    $scale.find('.body').css('transform','rotate('+(scale_status + ui.value/10)+'deg)');
	    //element.attr('status', ui.value/step);
	  }
	});
});
});
*/
/*
$('#stack3_block2_front [type="rotator"][num="1"]').find('.slider').slider({
	var scale = $('#stack3_block2_front [type="scale"][num="37"]');
	scale_status = $scale.attr('status');
  slide: function( event, ui ) {
    $scale.find('.body').css('transform','rotate('+(scale_status + ui.value/10)+'deg)');
    //element.attr('status', ui.value/step);
  }
});
*/



function setScaleRotatorRelation(blockid,scaleNum,rotatorNum) {
	console.info(blockid);
	console.info(scaleNum);
	console.info(rotatorNum);
	console.info('-----------------');

	$block = $('#'+blockid);
	$rotator = $block.find('[type="rotator"][num="'+rotatorNum+'"]');
	$scale = $block.find('[type="scale"][num="'+scaleNum+'"]');
	
	var rotator_status;
	var rotator_range;
	var scale_status;
	rotator_range = $rotator.attr('range');
	scale_status = $scale.attr('status');
	rotator_range = rotator_range/2.5;
	/*
	$rotator.on('click', function(){
		rotator_status = $(this).attr('status');
	});
	*/

	var value = scale_status;

	$rotator.find('.slider').slider({
	  slide: function( event, ui ) {
	    $scale.find('.body').css('transform','rotate('+((ui.value/4)-50)+'deg)')
	  }
	});
}
$(document).ready(function(){
	//setScaleRotatorRelation('stack3_block2_front','37','1');
	//setScaleRotatorRelation('stack0_block2_front','21','1');
	//setScaleRotatorRelation('stack3_block5_front','3','7');
});

