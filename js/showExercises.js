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
	$('.passing, .options, .starting').hide();
	$('.passing').fadeIn();
});

	// Выбор экзамен/тренировка
$('#chooseExerciseBody .passing a').on('click', function(){
	mode = $(this).attr('data-codename');
	if (mode == 'training') {
		$('.options').fadeIn();
	}
	$('.starting').slideDown();
	$('#chooseExerciseBody .passing a').removeClass('active');
	$(this).addClass('active');
	console.info(mode);

	$('#go').removeAttr('disabled');
});

$('a[data-codename="passing"]').on('click', function(){
	$('.options').hide();
})