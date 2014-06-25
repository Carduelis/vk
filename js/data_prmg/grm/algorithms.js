var helloText = {
//	ex1 : 'Без лишних вступлений',
//	ex2 : 'Без лишних вступлений',
}
var exercisesOptions = {
	/*
	ex1 : {
		optionBlock1 : {
			name : 'Выбор фидера',
			options : {
				option1 : 'Фидер I',
				option2 : 'Фидер II',
			},
		},
		optionBlock2 : {
			name : 'Выбор Фазности',
			options : {
				option1 : 'Правильная',
				option2 : 'Неправильная',
			},
		},
	},
	ex2 : {
		optionBlock1 : {
			name : 'Выбор фидера',
			options : {
				option1 : 'Фидер I',
				option2 : 'Фидер II',
			},
		},
		optionBlock2 : {
			name : 'Выбор Фазности',
			options : {
				option1 : 'Правильная',
				option2 : 'Неправильная',
			},
		},
		optionBlock3 : {
			name : 'Фиксированная частота',
			options : {
				option1 : 'Правильная',
				option2 : 'Неправильная',
			},
		},
		optionBlock4 : {
			name : 'Ток кристалла',
			options : {
				option1 : 'В зеленой зоне',
				option2 : 'Не в зеленой зоне',
			},
		},
		optionBlock5 : {
			name : 'Шумы',
			options : {
				option1 : 'В красной зоне',
				option2 : 'Не в красной зоне',
			},
		},
	},
	ex3 : {
		optionBlock1 : {
			name : 'Зависит от выбора волны',
			options : {
				option1 : 'Да',
				option2 : 'нет',
			},
		},
		optionBlock2 : {
			name : 'Зависит от выбора тока смешения',
			options : {
				option1 : 'Да',
				option2 : 'Нет',
			},
		},
	},
	*/
}

var exercisesContainer = {
	ex1 : {
		nameOfExercise : 'under_construction',
	},

	ex2 : {
	nameOfExercise : 'Проверка выдачи сигналов аварии для мгновенного переключения на резервный комплект',
	el1 : {
		click : '1',
		current : {
			inStack : 'stack0',
			inBlock : 'stack0_block6',
			onSide : 'stack0_block6_front',
			num : '16',
			type : 'toggler',
		},
		positions : {
			position_1 : {
				state : '1',
				description : 'Снимите напряжение питания с УМ КГ работающего комплекта установкой тумблера СЕТЬ-ОТКЛ на ИПС ПРД в положение ОТКЛ. ',
			},
		},
		defaultPosition : '0',
	},
	el2 : {
		click : '2',
		current : {
			inStack : 'stack0',
			inBlock : 'stack0_block1',
			onSide : 'stack0_block1_front',
			num : '71',
			type : 'button',
		},
		positions : {
			position_1 : {
				state : 'on',
				description : 'На ПИУ Г должны выключиться индикаторы АВАРИЯ ИЗЛУЧ, НЕТ РЕЗЕРВА, КАТЕГОРИЯ I, и должно произойти мгновенное переключе¬ние на резервный комплект. Должен включиться звуковой сигнал. Для отключения звукового сигнала нажмите кнопку ЗВУК—ОТКЛ',
				action_1 : {
					inStack : 'stack0',
					inBlock : 'stack0_block1',
					onSide : 'stack0_block1_front',
					type : 'lamp',
					num : '23',
					status : 'on',
				},
				action_2 : {
					inStack : 'stack0',
					inBlock : 'stack0_block1',
					onSide : 'stack0_block1_front',
					type : 'lamp',
					num : '10',
					status : 'on',
				},
				action_3 : {
					inStack : 'stack0',
					inBlock : 'stack0_block1',
					onSide : 'stack0_block1_front',
					type : 'lamp',
					num : '150',
					status : 'on',
				},
				action_4 : {
					inStack : 'stack0',
					inBlock : 'stack0_block1',
					onSide : 'stack0_block1_front',
					type : 'lamp',
					num : '264',
					status : 'on',
				},
				action_5 : {
					inStack : 'stack0',
					inBlock : 'stack0_block1',
					onSide : 'stack0_block1_front',
					type : 'lamp',
					num : '636',
					status : 'on',
				},
				action_6 : {
					inStack : 'stack0',
					inBlock : 'stack0_block1',
					onSide : 'stack0_block1_front',
					type : 'lamp',
					num : '676',
					status : 'on',
				},
				action_7 : {
					inStack : 'stack0',
					inBlock : 'stack0_block1',
					onSide : 'stack0_block1_front',
					type : 'lamp',
					num : '213',
					status : 'on',
				},
				action_8 : {
					inStack : 'stack0',
					inBlock : 'stack0_block1',
					onSide : 'stack0_block1_front',
					type : 'lamp',
					num : '31',
					status : 'on',
				},
				action_9 : {
					inStack : 'stack0',
					inBlock : 'stack0_block1',
					onSide : 'stack0_block1_front',
					type : 'lamp',
					num : '100',
					status : 'on',
				},
			},
		},
	},
	el3 : {
		click : '3',
		current : {
			inStack : 'stack0',
			inBlock : 'stack0_block6',
			onSide : 'stack0_block6_front',
			num : '16',
			type : 'toggler',
		},
		positions : {
			position_1 : {
				state : '0',
				description : 'Включите тумблер СЕТЬ на ИПС ПРД первого комплекта',
				action_1 : {
					inStack : 'stack0',
					inBlock : 'stack0_block6',
					onSide : 'stack0_block6_front',
					type : 'lamp',
					num : '3',
					status : 'on',
				},
				action_2 : {
					inStack : 'stack0',
					inBlock : 'stack0_block6',
					onSide : 'stack0_block6_front',
					type : 'lamp',
					num : '13',
					status : 'on',
				},
				action_3 : {
					inStack : 'stack0',
					inBlock : 'stack0_block6',
					onSide : 'stack0_block6_front',
					type : 'lamp',
					num : '22',
					status : 'on',
				},
			},
		},
	},
	el4 : {
		click : '4',
		current : {
			inStack : 'stack0',
			inBlock : 'stack0_block1',
			onSide : 'stack0_block1_front',
			num : '21',
			type : 'toggler',
		},
		positions : {
			position_1 : {
				state : '1',
				description : 'Для разблокировки ГРМ переведите переключатель РЕЖИМ на ПИУ Г в положение НАСТРОЙКА, а затем верните его в положение РАБОТА. Индикаторы ИЗЛУЧ, НЕТ РЕЗЕРВА и КАТЕГОРИЯ I ГРМ на ПИУ Г должны погаснуть.',
				action_1 : {
					inStack : 'stack0',
					inBlock : 'stack0_block1',
					onSide : 'stack0_block1_front',
					type : 'lamp',
					num : '100',
					status : 'off',
				},
				action_2 : {
					inStack : 'stack0',
					inBlock : 'stack0_block1',
					onSide : 'stack0_block1_front',
					type : 'lamp',
					num : '115',
					status : 'on',
				},
				action_3 : {
					inStack : 'stack0',
					inBlock : 'stack0_block1',
					onSide : 'stack0_block1_front',
					type : 'lamp',
					num : '291',
					status : 'on',
				},
			},
			position_2 : {
				state : '0',
				description : 'Для разблокировки ГРМ переведите переключатель РЕЖИМ на ПИУ Г в положение НАСТРОЙКА, а затем верните его в положение РАБОТА. Индикаторы ИЗЛУЧ, НЕТ РЕЗЕРВА и КАТЕГОРИЯ I ГРМ на ПИУ Г должны погаснуть.',
				action_1 : {
					inStack : 'stack0',
					inBlock : 'stack0_block1',
					onSide : 'stack0_block1_front',
					type : 'lamp',
					num : '115',
					status : 'off',
				},
				action_2 : {
					inStack : 'stack0',
					inBlock : 'stack0_block1',
					onSide : 'stack0_block1_front',
					type : 'lamp',
					num : '100',
					status : 'on',
				},
			},
		},
		defaultPosition : '0',
	},
	},
	ex3 : {
	nameOfExercise : 'Подготовка ГРМ к дистанционному включению',
	el1 : {
		click : '1',
		current : {
			inStack : 'stack0',
			inBlock : 'stack0_block1',
			onSide : 'stack0_block1_front',
			num : '5',
			type : 'toggler',
		},
		positions : {
			position_1 : {
				state : '0',
				description : 'Установите переключатель УПРАВЛЕНИЕ на ПИУ Г в положение ДУ',
				action_1 : {
					inStack : 'stack0',
					inBlock : 'stack0_block1',
					onSide : 'stack0_block1_front',
					type : 'lamp',
					num : '16',
					status : 'on',
				},
				action_2 : {
					inStack : 'stack0',
					inBlock : 'stack0_block1',
					onSide : 'stack0_block1_front',
					type : 'lamp',
					num : '31',
					status : 'on',
				},
				action_3 : {
					inStack : 'stack0',
					inBlock : 'stack0_block1',
					onSide : 'stack0_block1_front',
					type : 'lamp',
					num : '10',
					status : 'on',
				},
				action_4 : {
					inStack : 'stack0',
					inBlock : 'stack0_block1',
					onSide : 'stack0_block1_front',
					type : 'lamp',
					num : '150',
					status : 'on',
				},
				action_5 : {
					inStack : 'stack0',
					inBlock : 'stack0_block1',
					onSide : 'stack0_block1_front',
					type : 'lamp',
					num : '213',
					status : 'on',
				},
				action_6 : {
					inStack : 'stack0',
					inBlock : 'stack0_block1',
					onSide : 'stack0_block1_front',
					type : 'lamp',
					num : '115',
					status : 'on',
				},
				action_7 : {
					inStack : 'stack0',
					inBlock : 'stack0_block1',
					onSide : 'stack0_block1_front',
					type : 'lamp',
					num : '636',
					status : 'on',
				},
				action_8 : {
					inStack : 'stack0',
					inBlock : 'stack0_block1',
					onSide : 'stack0_block1_front',
					type : 'lamp',
					num : '676',
					status : 'on',
				},
			},
		},
		defaultPosition : '1',
	},
	el2 : {
		click : '2',
		current : {
			inStack : 'stack0',
			inBlock : 'stack0_block1',
			onSide : 'stack0_block1_front',
			num : '21',
			type : 'toggler',
		},
		positions : {
			position_1 : {
				state : '0',
				description : 'Установите переключатель РЕЖИМ на ПИУ Г в положение РАБОТА',
				action_1 : {
					inStack : 'stack0',
					inBlock : 'stack0_block1',
					onSide : 'stack0_block1_front',
					type : 'lamp',
					num : '115',
					status : 'off',
				},
				action_2 : {
					inStack : 'stack0',
					inBlock : 'stack0_block1',
					onSide : 'stack0_block1_front',
					type : 'lamp',
					num : '100',
					status : 'on',
				},
			},
		},
		defaultPosition : '1',
	},
	el3 : {
		click : '3',
		current : {
			inStack : 'stack1',
			inBlock : 'stack1_block1',
			onSide : 'stack1_block1_front',
			num : '5',
			type : 'toggler',
		},
		positions : {
			position_1 : {
				state : '1',
				description : 'Установите переключатель М ВКЛ 	Д ВКЛ на распределительном щите в положение Д ВКЛ',
				action_1 : {
					inStack : 'stack1',
					inBlock : 'stack1_block1',
					onSide : 'stack1_block1_front',
					type : 'scale',
					num : '1',
					status : '32',
				},
				action_2 : {
					inStack : 'stack1',
					inBlock : 'stack1_block1',
					onSide : 'stack1_block1_front',
					type : 'lamp',
					num : '40',
					status : 'on',
				},
				action_3 : {
					inStack : 'stack1',
					inBlock : 'stack1_block1',
					onSide : 'stack1_block1_front',
					type : 'lamp',
					num : '182',
					status : 'on',
				},
			},
		},
		defaultPosition : '0',
	},
	el4 : {
		click : '4',
		current : {
			inStack : 'stack1',
			inBlock : 'stack1_block1',
			onSide : 'stack1_block1_front',
			num : '5',
			type : 'knob',
		},
		positions : {
			position_1 : {
				state : '0',
				description : 'Установите переключатель ВЕНТИЛЯТОРЫ на распределительном щите в положение АВТ',
			},
		},
		defaultPosition : '1',
	},
	},
	
	ex10 : {
		nameOfExercise : 'ПРМГ-ГРМ-ТЕСТ (переключение между блоками)',
		el1 : {
			click : '1',
			current : {
				inStack : 'stack0',
				inBlock : 'stack0_block1',
				onSide : 'stack0_block1_front',
				num : '5',
				type : 'toggler',
			},
			positions : {
				position_1 : {
					state : '0',
					description : 'Пам-пам',
					action_1 : {
						inStack : 'stack0',
						inBlock : 'stack0_block1',
						onSide : 'stack0_block1_front',
						type : 'lamp',
						num : '16',
						status : 'on',
					},
				},
			},
		},
		el2 : {
			click : '2',
			current : {
				inStack : 'stack0',
				inBlock : 'stack0_block1',
				onSide : 'stack0_block1_front',
				num : '21',
				type : 'toggler',
			},
			positions : {
				position_1 : {
					state : '1',
					description : 'Настройка',
					action_1 : {
						inStack : 'stack0',
						inBlock : 'stack0_block1',
						onSide : 'stack0_block1_front',
						type : 'lamp',
						num : '115',
						status : 'on',
					},
				},
			},
		},
		el3 : {
			click : '3',
			current : {
				inStack : 'stack0',
				inBlock : 'stack0_block6',
				onSide : 'stack0_block6_front',
				num : '8',
				type : 'socket',
			},
			positions : {
				position_1 : {
					state : 'on',
					description : 'подсоединить штекер',
				},
			},
		},
		el4 : {
			click : '4',
			current : {
				inStack : 'stack0',
				inBlock : 'stack0_block8',
				onSide : 'stack0_block8_front',
				num : '8',
				type : 'socket',
			},
			positions : {
				position_1 : {
					state : 'on',
					description : 'подсоедини опять',
				},
			},
		},
		el5 : {
			click : '5',
			current : {
				inStack : 'stack1',
				inBlock : 'stack1_block1',
				onSide : 'stack1_block1_front',
				num : '2',
				type : 'knob',
			},
			positions : {
				position_1 : {
					state : '1',
					description : 'Сеть ОСН',
				},
			},
		},
	},
}