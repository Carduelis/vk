//fitText if needed
//jQuery(".phones b").fitText();

$(document).ready(function(){

var myEx = {
	'nameOfExercise' : 'Упражнение по бла-бла',
	/*
	'el0': {
		'click': "1",
		'current': {
			inStack: 'stack0', 
			inBlock: 'stack0_block2', 
			onSide: 'stack0_block2_front', 
			type: 'toggler',
			'positions': {
				position_0: '1',
				description_0: 'Поставьте в позицию 1'
			}
		},
		'action0': {
			inStack: 'stack1', 
			inBlock: 'stack1_block1', 
			onSide: 'stack1_block1_front',
			type:  'toggler',
			num: '1',
			status: '0'
		},
		'action1': {
			inStack: 'stack1', 
			inBlock: 'stack1_block1', 
			onSide: 'stack1_block1_front',
			type:  'toggler',
			num: '1',
			status: '0'
		}
	}*/
}
	var objName = "";
	function ObjOutput(obj,step) {
		//alert(obj.toString());
		var log = $('#exlog');
		
	    log.append(step+objName+" : {<br>");
	    for(var i in obj) {
	    	objName = i;
		    if(typeof obj[i] == "object") {
		        var nobj = obj[i];
		        ObjOutput(nobj,(step+". . . "));
			} else {
		        log.append(step+i+" : '"+obj[i]+"',<br>");
		    }
		}
		log.append(step+"}<br>");
	}
	/*
	$('#exlog').on('click',function(){
		$(this).text(' ');
	});
	*/
var thisEl;
var countClick = 0;
var countAction = 0;
var positionsCount = 0;
var actionCounter = 0;

var current = {};
var positions = {};
var descriptions = {};


//Построение объекта
function newEl(i)
{
myEx['el'+i] ={
		click: "0",
		current: {
			inStack: null, 
			inBlock: null, 
			onSide: null, 
			num: '0',
			type: null,
			
		},
		positions: {}	
};
}

function newPos(i,posCnt)
{
myEx['el'+i].positions['position_'+posCnt] ={
	state: '0',
	description: 'null'
	
	};
}

function newAction(i,posCnt, actionCnt)
{
myEx['el'+i].positions['position_'+posCnt]['action_'+actionCnt]={
	inStack : 'null',
	inBlock : 'null',
	onSide : 'null',
	type : 'null',
	num : '0',
	status : '0',	
	};
}




//Сохранение используемого элемента
function saveElement(i) {
	console.log(thisEl);
	myEx['el'+i].current.inStack = thisEl.parents('li').attr('id');
	myEx['el'+i].current.inBlock = thisEl.parents('section').attr('id');
	myEx['el'+i].current.onSide = thisEl.parents('div[side]').attr('id');
	myEx['el'+i].current.num = thisEl.attr('num');
	myEx['el'+i].current.type = thisEl.attr('type');
	$('#exlog').text(' ');
	ObjOutput(myEx,"");
}

function saveAction(i,posCnt, actionCnt) {
	console.log(thisEl);
	myEx['el'+i].positions['position_'+posCnt]['action_'+actionCnt].inStack = thisEl.parents('li').attr('id');
	myEx['el'+i].positions['position_'+posCnt]['action_'+actionCnt].inBlock = thisEl.parents('section').attr('id');
	myEx['el'+i].positions['position_'+posCnt]['action_'+actionCnt].onSide = thisEl.parents('div[side]').attr('id');
	myEx['el'+i].positions['position_'+posCnt]['action_'+actionCnt].num = thisEl.attr('num');
	myEx['el'+i].positions['position_'+posCnt]['action_'+actionCnt].type = thisEl.attr('type');
	myEx['el'+i].positions['position_'+posCnt]['action_'+actionCnt].status = thisEl.attr('status');
	$('#exlog').text(' ');
	ObjOutput(myEx,"");
}



//Не используется
/*
function getId(i) {
	console.log(thisEl);
	myEx['el'+i] = current;
	myEx['el'+i] = positions;
	myEx['el'+i].current = {};
	myEx['el'+i].positions = {};
	
	myEx['el'+i].current.inStack = thisEl.parents('li').attr('id');
	myEx['el'+i].current.inBlock = thisEl.parents('section').attr('id');
	myEx['el'+i].current.onSide = thisEl.parents('div[side]').attr('id');
	myEx['el'+i].current.type = thisEl.attr('type');
	$('#exlog').text(' ');
	ObjOutput(myEx,"");

}
*/

//Сохранение позицции в объект
function getPos(i,posCnt) {
	//myEx['el'+i] = positions;
	//myEx['el'+countAction].positions = {};	
	myEx['el'+i].positions['position_'+posCnt].state = thisEl.attr('status');
	$('#exlog').text(' ');
	ObjOutput(myEx,'');	
}

function setDesc(i,posCnt) {
	myEx['el'+i].positions['position_'+posCnt].description = $("#writeDescription").val();
	$('#exlog').text(' ');
	ObjOutput(myEx,'');	
}

function setCount(i) {
    myEx['el'+i].click = countClick;
    $('#exlog').text(' ');
	ObjOutput(myEx,'');
}


$('#nameOfExercise').on('change', function(){
	myEx.nameOfExercise = $(this).val();
	$(this).parent().hide();
	$(this).parent().next().show();
});

// Добавить первое действие
	$('#chooseNextElement').on('click', function(){
	positionsCount = 0;
	    countAction++;
		newEl(countAction);
		$(this).parent().hide();
		$('.element').addClass('hover');
		$('.element').on('click', function() {
			$('.element').removeClass('hover');
			thisEl = $(this);
			thisEl.on('click', saveElement(countAction)).addClass('hover');
		});

		$(this).parent().hide();
		$(this).parent().next().show();
	});


// Прибавлять ли клик?
	$('#addCountClick').on('click', function(){
		countClick++;
		setCount(countAction);
		countClick++;
		$(this).parent().hide();
		$(this).parent().next().show();
	});
	$('#noAddCountClick').on('click', function(){
	    setCount(countAction);
		$(this).parent().hide();
		$(this).parent().next().show();
	});

	
// Выбор позиции элемента

	$('#setPosition').on('click', function() {
		positionsCount++;
		newPos(countAction,positionsCount);
		thisEl.on('click', getPos(countAction,positionsCount));
		$(this).parent().hide();
		$(this).parent().next().show();
	});

// Выбор описания
	/*
	$('#writeDescription').on('keypress', function(){
		setDesc(countAction,positionsCount);
	});*/

	$('#setDescription').on('click',function () {
  		setDesc(countAction,positionsCount); // Записали в объект
  		$(this).parent().next().show(); // Добавление кнопки дополнительной позиции
  		$(this).parent().hide(); // Скрываем этот блок
  		$(this).parent().prev().hide(); // Скрываем блок с определением позиции
  	});
	
// Привязка действия
	$('#bindAction').on('click', function(){
		actionCounter++;
		newAction(countAction,positionsCount, actionCounter);
		thisEl = null;
		$('.element').removeClass('hover');
		$('.element').addClass('hover');
		$('.element').on('click', function() {
			thisEl = $(this);
			thisEl.on('click', saveElement(countAction)).addClass('hover');
		});
		$(this).parent().hide();
		$(this).parent().next().show();
	});
	
	//Выбор действия
	$('#chooseActElement').on('click',function () {
		
		$(this).parent().hide();
		$(this).parent().next().show();
	});
	//Выбор состояния
	$('#chooseActPos').on('click',function () {
		saveAction(countAction,positionsCount, actionCounter);
		$(this).parent().hide();
		$(this).parent().next().show();
	});
	//Выбор дополнительного действия
	$('#addAction').on('click',function () {
		$(this).parent().hide();
		$('#bindActionOnPos').show();
	});
	

// Дополнительные позиции

	$('#addPosition').on('click',function () {
		$(this).parent().hide();
		$('#settingPosition').show();
	});

// Переход к следующему элементу

	$('#skipAddingPosition').on('click',function () {
		$(this).parent().hide();
		$('#choosingNextElement').show();
	});
	$('#skipAddAction').on('click',function () {
		actionCounter = 0;
		$(this).parent().hide();
		$('#addingPosition').show();
	});
	$('#noBindAction').on('click',function () {
		actionCounter = 0;	
		$(this).parent().hide();
		$('#addingPosition').show();
	});













});

