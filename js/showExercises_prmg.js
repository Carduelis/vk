var thisEx = {}
var thisExId;

// Вывод списка упражнений
for(var i in exercisesContainer) {
	$('#chooseExerciseBody .listing ol').append('<li><a id="'+i+'">'+exercisesContainer[i].nameOfExercise+'</a>');
};
var mode;



function random(maxNumber) {
	return Math.floor((Math.random() * maxNumber) + 1)
}

var choosenParam;

$('#chooseExerciseBody .listing a').on('click', function(){
	thisExId = $(this).attr('id');
	// Вывод списка дополнительных опций
	$('#chooseExerciseBody .options ol li').remove();
	for(var i in exercisesOptions[thisExId]) {
		$('#chooseExerciseBody .options ol').append('<li id="'+i+'"><header>'+exercisesOptions[thisExId][i].name+'</header><ul></ul>');
		numOfOptions = Object.keys(exercisesOptions[thisExId][i].options).length; // У нас всегда равно 2
		$('#'+i+' ul').append('<li><a data-ex="'+thisExId+'" data-type="'+i+'" data-codeName="'+exercisesOptions[thisExId][i].options['option'+random(numOfOptions)].codeName+'" class="active">Случайно</a>')
		for (var j in exercisesOptions[thisExId][i].options) {
			$('#'+i+' ul').append('<li><a data-ex="'+thisExId+'" data-type="'+i+'" data-codeName="'+exercisesOptions[thisExId][i].options[j].codeName+'"  class="checkbox">'+exercisesOptions[thisExId][i].options[j].viewName+'</a>');
		}
	}
	$('#chooseExerciseBody .options a').on('click', function(){
		$(this).parent().parent().find('a').not($(this)).removeClass('active');
		$(this).addClass('active');
	})
	$('#chooseExerciseBody .listing a').removeClass('active');
	$(this).addClass('active');
	thisEx = exercisesContainer;
	$('.dev').addClass('hidden');
	$('.passing').slideDown();
});

$('#chooseExerciseBody .passing a').on('click', function(){
	mode = $(this).attr('data-codename');
	if (mode == 'training') {
		$('.options').slideDown();
	}
	$('.starting').slideDown();
	$('#chooseExerciseBody .passing a').removeClass('active');
	$(this).addClass('active');
	console.info(mode);

	$('#go').removeAttr('disabled');
});

$('a[data-codename="passing"]').on('click', function(){
	$('.options').slideUp();
})
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
	// Пишем выбранные параметры
	$('#chooseExerciseBody .options a.active').each(function(){
		optionBlock = $(this).attr('data-type');
		window[exercisesOptions[thisExId][optionBlock].typeName] = $(this).attr('data-codename');
	})
	for(var i in exercisesOptions[thisExId]) {
		console.info(exercisesOptions[thisExId][i].typeName+': '+window[exercisesOptions[thisExId][i].typeName]);
	};
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
						wow(eN,pN,choosenParam); // Показываем информацию о следующем элементе
					} else {
						alert('Упражнение выполнено!');
						hideAndRemoveAllHints(); // Скрываем остаточную инфу от всех элементов
					}
				}
			}
		}
		//////////////////////////////////////////////////


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

	});
});

function detectMultiply() {
	if (thisEx[thisExId]['el'+eN].multiply) {

		for(var i in exercisesOptions[thisExId]) {
			if (thisEx[thisExId]['el'+eN].multiply == exercisesOptions[thisExId][i].typeName) {
				choosenParam = window[exercisesOptions[thisExId][i].typeName];
			}
		}
	} else {
		choosenParam = null;
	}
}

function detectMultiplyPrev() {
	if (eN > 2) {
		if (thisEx[thisExId]['el'+(eN-1)].multiply) {
			for(var i in exercisesOptions[thisExId]) {
				if (thisEx[thisExId]['el'+(eN-1)].multiply == exercisesOptions[thisExId][i].typeName) {
					choosenParamPrev = window[exercisesOptions[thisExId][i].typeName];
				}
			}
		} else {
			choosenParamPrev = null;
		}
	} else {
		choosenParamPrev = null
	}
}


function hideAndRemoveAllHints() {
	
	$('.element').removeClass('shadow');
	$('section').removeClass('active');
	$('#hidePopUp').removeClass('active');
	$('.element').find('.hint').remove();
	
}
function isShift(eN, choosenParam) {
	if (choosenParam) {
		return thisEx[thisExId]['el'+eN][choosenParam].shift
	} else {
		return false
	}
}
function isPositionsThere(eN,choosenParam) {
	if (choosenParam) {
		return (pN < posCount(thisEx[thisExId]['el'+eN][choosenParam].positions))
	} else {
		return (pN < posCount(thisEx[thisExId]['el'+eN].positions))
	}
}

function positionsObj(eN,pN,choosenParam) {
	if (choosenParam) {
		return posCount(thisEx[thisExId]['el'+eN][choosenParam].positions['position_'+pN])
	} else {
		return posCount(thisEx[thisExId]['el'+eN].positions['position_'+pN])
	}
}

function wow_first(eN,pN) {
	if (mode == 'training') {
		showhint(eN);
		obj_element(eN).addClass('shadow');
		append_desc(eN,pN);
		focusOnElement();
	} 
}

function wow(eN,pN, choosenParam) {
	if (mode == 'training') {
		hideAndRemoveAllHints();
		showSideHint(eN, choosenParam);
		showhint(eN, choosenParam);
		obj_element(eN,choosenParam).addClass('shadow');
		append_desc(eN,pN,choosenParam);
		focusOnElement();
	}
}


function showSideHint(eN,choosenParam) {
	detectMultiplyPrev();
	if (
		(str_whatever((eN-1),'onSide',choosenParamPrev)) 
		// проверяет наличие значения stackN_blockM_side
		&&
		(str_whatever(eN,'onSide',choosenParam) != str_whatever((eN-1),'onSide',choosenParamPrev))
		// проверяет отличается ли сторона в предыдущем действии
		&&
		(str_whatever(eN,'inBlock',choosenParam) == str_whatever((eN-1),'inBlock',choosenParamPrev))
		// текущее и предыдущие действия должны быть на одном блоке
	) {
		if (str_whatever(eN,'onSide',choosenParam).substr(14) != 'front') {
			// проверяет, что это не возврат на переднюю сторону
			var sideOpener = $('#'+str_whatever(eN,'inBlock',choosenParam)).find('span[for="'+str_whatever(eN,'onSide',choosenParam).substr(14)+'"]');
			sideOpener.addClass('active');
			focusOnElement(sideOpener.offset().top);
			sideOpener.click(function(){
				focusOnElement();
			})

		} else if (str_whatever(eN,'onSide',choosenParam).substr(14) == 'front') {
			// проверяет, что это возврат на переднюю сторону
			var sideCloser = $('#'+str_whatever(eN,'inBlock',choosenParam)).find('i.back');
			var sideOpener = $('#'+str_whatever(eN,'inBlock',choosenParam)).find('span');
			sideOpener.removeClass('active');
			sideCloser.addClass('active');
			console.info(str_whatever(eN,'onSide',choosenParam)+' '+str_whatever((eN-1),'onSide',choosenParamPrev));
			focusOnElement(sideCloser.offset().top);
			sideCloser.click(function(){
				focusOnElement();
			})
		}
		
	}

}

function show(eN, pN, aN, choosenParam) {
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
}


function str_action_whatever(eN, subject, pN, aN, choosenParam) 	{
	 if (choosenParam) {
	 	if (thisEx[thisExId]) {
		 	if (thisEx[thisExId]['el'+eN]) {
				if (thisEx[thisExId]['el'+eN][choosenParam]) {
					if (thisEx[thisExId]['el'+eN][choosenParam].positions) {
						if (thisEx[thisExId]['el'+eN][choosenParam].positions['position_'+pN]) {
							if (thisEx[thisExId]['el'+eN][choosenParam].positions['position_'+pN]['action_'+aN]) {

								 return thisEx[thisExId]['el'+eN][choosenParam].positions['position_'+pN]['action_'+aN][subject];

							}
						}
					}
				}
			}
		}
	 } else {
	 	if (thisEx[thisExId]['el'+eN].positions) {
		 return thisEx[thisExId]['el'+eN].positions['position_'+pN]['action_'+aN][subject];
	 	}
	 }
	}

function str_whatever(eN, subject, choosenParam) {
	if (choosenParam) {
		if (thisEx[thisExId]['el'+eN][choosenParam]) {
			if (thisEx[thisExId]['el'+eN][choosenParam].current) {
				return thisEx[thisExId]['el'+eN][choosenParam].current[subject];
			}
		}
	} 	else {
		if (thisEx[thisExId]['el'+eN]) {
			if (thisEx[thisExId]['el'+eN].current) {
				return thisEx[thisExId]['el'+eN].current[subject];
			}
		}
	}
}

function str_pos_whatever(eN, subject, pN, choosenParam) { 
	if (choosenParam) {
	 	if (thisEx[thisExId]['el'+eN][choosenParam].positions) {
			return thisEx[thisExId]['el'+eN][choosenParam].positions['position_'+pN][subject];
		}
	} 	else {
	 	if (thisEx[thisExId]['el'+eN].positions) {
			return thisEx[thisExId]['el'+eN].positions['position_'+pN][subject];
		}
	}
}

function obj_whatever(eN, subject, choosenParam) {
	if (choosenParam) {
		if (thisEx[thisExId]['el'+eN][choosenParam]) {
			if (thisEx[thisExId]['el'+eN][choosenParam].current) {
				return $('#'+thisEx[thisExId]['el'+eN][choosenParam].current[subject]);
			}
		}
	} 	else {
		if (thisEx[thisExId]['el'+eN].current) {
			return $('#'+thisEx[thisExId]['el'+eN].current[subject]);
		}
	}
}

function obj_element(eN, choosenParam) {
	if (choosenParam) {
		return $('#'+str_whatever(eN, 'onSide',choosenParam)+' .element[type="'+str_whatever(eN, 'type',choosenParam)+'"][num="'+str_whatever(eN, 'num',choosenParam)+'"]')
	} else {
		return $('#'+str_whatever(eN, 'onSide')+' .element[type="'+str_whatever(eN, 'type')+'"][num="'+str_whatever(eN, 'num')+'"]')
	}
}

function append_desc(eN, pN, choosenParam) {
	if (choosenParam) {
		obj_element(eN, choosenParam).append('<div class="hint"><p>'+str_pos_whatever(eN, 'description', pN,choosenParam)+'</p></div>')
	} else {
		obj_element(eN).append('<div class="hint"><p>'+str_pos_whatever(eN, 'description', pN)+'</p></div>')
	}
}

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



function focusOnElement(parameter){
	detectMultiplyPrev();
	if (
		(str_whatever((eN-1),'inBlock',choosenParamPrev)) 
		// проверяет наличие значения stackN_blockM_side
		&&
		(str_whatever(eN,'inBlock',choosenParam) != str_whatever((eN-1),'inBlock',choosenParamPrev))
		&& 
		(isPositionsThereBoolean)
		// &&
		// (если у нас карты разных секциях)
	)	{
		console.info('Следующий блок');
		$('#hidePopUp').addClass('active');
		setTimeout(function(){
			$('#hidePopUp').removeClass('active');
		},1000);
	} else {
		console.info('В том же блоке')
		$('#hidePopUp').removeClass('active');
	}
}


function showhint(eN, choosenParam) {
	// TO DO 
	// Вбить значения в html, и цеплять их оттуда
	var block = nameOfStack(str_whatever(eN, 'inBlock', choosenParam));	
	var stack = nameOfStack(str_whatever(eN, 'inStack'));
	var minBlockId = "min_"+str_whatever(eN, 'inBlock', choosenParam);	
	console.info(minBlockId);
	$('#container section').removeClass('active');
	$('#'+minBlockId).addClass('active');
	$('#showhint span').html('Стойка: <b class="active" id="goToStack">'+stack+'</b>, Блок: <b id="goToBlock">'+block+'</b>');
}