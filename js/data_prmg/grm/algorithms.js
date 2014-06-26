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
	nameOfExercise : 'Включение и проверка источников питания',
	el1 : {
		click : '1',
		current : {
			inStack : 'stack1',
			inBlock : 'stack1_block2',
			onSide : 'stack1_block2_front',
			num : '1',
			type : 'toggler',
		},
		positions : {
			position_1 : {
				state : '0',
				description : 'Установите переключатель СЕТЬ РЕЗЕРВН-ЭЛ.СТАНЦИЯ в положение СЕТЬ РЕЗЕРВН.',
			},
		},
	},
	el2 : {
		click : '2',
		current : {
			inStack : 'stack1',
			inBlock : 'stack1_block1',
			onSide : 'stack1_block1_front',
			num : '315',
			type : 'toggler',
		},
		positions : {
			position_1 : {
				state : '1',
				description : 'Включите выключатель СЕТЬ ОСН',
				action_1 : {
					inStack : 'stack1',
					inBlock : 'stack1_block1',
					onSide : 'stack1_block1_front',
					type : 'lamp',
					num : '6',
					status : 'on',
				},
			},
		},
	},
	el3 : {
		click : '3',
		current : {
			inStack : 'stack1',
			inBlock : 'stack1_block1',
			onSide : 'stack1_block1_front',
			num : '276',
			type : 'toggler',
		},
		positions : {
			position_1 : {
				state : '1',
				description : 'Включите выключатель СЕТЬ РЕЗ',
				action_1 : {
					inStack : 'stack1',
					inBlock : 'stack1_block1',
					onSide : 'stack1_block1_front',
					type : 'lamp',
					num : '13',
					status : 'on',
				},
			},
		},
	},
	el4 : {
		click : '4',
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
				description : 'Установите переключатель контроля напряжения в положение СЕТЬ ОСН. Измерьте напряжение.',
				action_1 : {
					inStack : 'stack1',
					inBlock : 'stack1_block1',
					onSide : 'stack1_block1_front',
					type : 'scale',
					num : '1',
					status : '26',
				},
			},
			position_2 : {
				state : '2',
				description : 'Установите переключатель контроля напряжения в положение СЕТЬ РЕЗ. Измерьте напряжение.',
				action_1 : {
					inStack : 'stack1',
					inBlock : 'stack1_block1',
					onSide : 'stack1_block1_front',
					type : 'scale',
					num : '1',
					status : '24',
				},
			},
			position_3 : {
				state : '5',
				description : 'Установите переключатель контроля напряжения в положение +27В ДЕЖ. Измерьте напряжение.',
				action_1 : {
					inStack : 'stack1',
					inBlock : 'stack1_block1',
					onSide : 'stack1_block1_front',
					type : 'scale',
					num : '1',
					status : '-38',
				},
			},
		},
	},
	el5 : {
		click : '5',
		current : {
			inStack : 'stack1',
			inBlock : 'stack1_block1',
			onSide : 'stack1_block1_front',
			num : '5',
			type : 'toggler',
		},
		positions : {
			position_1 : {
				state : '0',
				description : 'Установите переключатель М ВКЛ 	Д ВКЛ в положение М ВКЛ',
			},
		},
		defaultPosition : '1',
	},
	el6 : {
		click : '6',
		current : {
			inStack : 'stack0',
			inBlock : 'stack0_block14',
			onSide : 'stack0_block14_front',
			num : '19',
			type : 'toggler',
		},
		positions : {
			position_1 : {
				state : '0',
				description : 'Установите переключатель РАБОТА 	КАЛИБРОВКА на передней панели ИКР в положение РАБОТА',
				action_1 : {
					inStack : 'stack0',
					inBlock : 'stack0_block14',
					onSide : 'stack0_block14_front',
					type : 'lamp',
					num : '15',
					status : 'on',
				},
				action_2 : {
					inStack : 'stack0',
					inBlock : 'stack0_block14',
					onSide : 'stack0_block14_front',
					type : 'lamp',
					num : '3',
					status : 'on',
				},
				action_3 : {
					inStack : 'stack0',
					inBlock : 'stack0_block14',
					onSide : 'stack0_block14_front',
					type : 'indicator',
					num : '31',
					status : '0000',
				},
				action_4 : {
					inStack : 'stack0',
					inBlock : 'stack0_block14',
					onSide : 'stack0_block14_front',
					type : 'indicator',
					num : '15',
					status : '0000',
				},
			},
		},
	},
	el7 : {
		click : '7',
		current : {
			inStack : 'stack1',
			inBlock : 'stack1_block1',
			onSide : 'stack1_block1_front',
			num : '130',
			type : 'toggler',
		},
		positions : {
			position_1 : {
				state : '1',
				description : 'Включите переключатель БП1 ',
				action_1 : {
					inStack : 'stack1',
					inBlock : 'stack1_block1',
					onSide : 'stack1_block1_front',
					type : 'lamp',
					num : '21',
					status : 'on',
				},
			},
		},
	},
	el8 : {
		click : '8',
		current : {
			inStack : 'stack1',
			inBlock : 'stack1_block1',
			onSide : 'stack1_block1_front',
			num : '96',
			type : 'toggler',
		},
		positions : {
			position_1 : {
				state : '1',
				description : 'Включите переключатель БП2',
				action_1 : {
					inStack : 'stack1',
					inBlock : 'stack1_block1',
					onSide : 'stack1_block1_front',
					type : 'lamp',
					num : '30',
					status : 'on',
				},
			},
		},
		defaultPosition : '0',
	},
	el9 : {
		click : '9',
		current : {
			inStack : 'stack1',
			inBlock : 'stack1_block1',
			onSide : 'stack1_block1_front',
			num : '63',
			type : 'toggler',
		},
		positions : {
			position_1 : {
				state : '1',
				description : 'Включите переключатель 27В БП1 (2)',
				action_1 : {
					inStack : 'stack1',
					inBlock : 'stack1_block1',
					onSide : 'stack1_block1_front',
					type : 'lamp',
					num : '40',
					status : 'on',
				},
			},
		},
		defaultPosition : '0',
	},
	el10 : {
		click : '10',
		current : {
			inStack : 'stack1',
			inBlock : 'stack1_block1',
			onSide : 'stack1_block1_front',
			num : '2',
			type : 'knob',
		},
		positions : {
			position_1 : {
				state : '3',
				description : 'Установите переключатель контроля напряжений в положение 27В БП1 (2). Измерьте напряжение.',
				action_1 : {
					inStack : 'stack1',
					inBlock : 'stack1_block1',
					onSide : 'stack1_block1_front',
					type : 'scale',
					num : '1',
					status : '-35',
				},
			},
		},
	},
	el11 : {
		click : '11',
		current : {
			inStack : 'stack1',
			inBlock : 'stack1_block1',
			onSide : 'stack1_block1_front',
			num : '31',
			type : 'toggler',
		},
		positions : {
			position_1 : {
				state : '1',
				description : 'Включите переключатель АККУМ',
			},
		},
		defaultPosition : '0',
	},
	el12 : {
		click : '12',
		current : {
			inStack : 'stack1',
			inBlock : 'stack1_block1',
			onSide : 'stack1_block1_front',
			num : '2',
			type : 'knob',
		},
		positions : {
			position_1 : {
				state : '4',
				description : 'Установите переключатель контроля напряжения в положение АККУМ. Измерьте напряжение.',
				action_1 : {
					inStack : 'stack1',
					inBlock : 'stack1_block1',
					onSide : 'stack1_block1_front',
					type : 'scale',
					num : '1',
					status : '-42',
				},
			},
		},
	},
	el13 : {
		click : '13',
		current : {
			inStack : 'stack1',
			inBlock : 'stack1_block1',
			onSide : 'stack1_block1_front',
			num : '120',
			type : 'toggler',
		},
		positions : {
			position_1 : {
				state : '1',
				description : 'Включите переключатель ЗАРЯД АБ. Убедитесь, что прибор контроля тока батареи показывает заряд.',
				action_1 : {
					inStack : 'stack1',
					inBlock : 'stack1_block1',
					onSide : 'stack1_block1_front',
					type : 'scale',
					num : '5',
					status : '-27',
				},
			},
		},
		defaultPosition : '0',
	},
	el14 : {
		click : '14',
		current : {
			inStack : 'stack1',
			inBlock : 'stack1_block1',
			onSide : 'stack1_block1_front',
			num : '52',
			type : 'toggler',
		},
		positions : {
			position_1 : {
				state : '0',
				description : 'Включите переключатель ОСВЕЩЕНИЕ',
				action_1 : {
					inStack : 'stack1',
					inBlock : 'stack1_block1',
					onSide : 'stack1_block1_front',
					type : 'lamp',
					num : '52',
					status : 'on',
				},
			},
		},
		defaultPosition : '1',
	},
	el15 : {
		click : '15',
		current : {
			inStack : 'stack1',
			inBlock : 'stack1_block1',
			onSide : 'stack1_block1_front',
			num : '130',
			type : 'toggler',
		},
		positions : {
			position_1 : {
				state : '0',
				description : 'Выключите БП1',
				action_1 : {
					inStack : 'stack1',
					inBlock : 'stack1_block1',
					onSide : 'stack1_block1_front',
					type : 'lamp',
					num : '21',
					status : 'off',
				},
			},
		},
	},
	el16 : {
		click : '16',
		current : {
			inStack : 'stack1',
			inBlock : 'stack1_block1',
			onSide : 'stack1_block1_front',
			num : '96',
			type : 'toggler',
		},
		positions : {
			position_1 : {
				state : '0',
				description : 'Выключите БП2. Убедитесь, что прибор контроля тока АБ показывает разряд.',
				action_1 : {
					inStack : 'stack1',
					inBlock : 'stack1_block1',
					onSide : 'stack1_block1_front',
					type : 'lamp',
					num : '30',
					status : 'off',
				},
				action_2 : {
					inStack : 'stack1',
					inBlock : 'stack1_block1',
					onSide : 'stack1_block1_front',
					type : 'scale',
					num : '5',
					status : '15',
				},
			},
		},
	},
	el17 : {
		click : '17',
		current : {
			inStack : 'stack1',
			inBlock : 'stack1_block1',
			onSide : 'stack1_block1_front',
			num : '120',
			type : 'toggler',
		},
		positions : {
			position_1 : {
				state : '0',
				description : 'Выключите АБ',
				action_1 : {
					inStack : 'stack1',
					inBlock : 'stack1_block1',
					onSide : 'stack1_block1_front',
					type : 'scale',
					num : '5',
					status : '1',
				},
			},
		},
	},
	el18 : {
		click : '18',
		current : {
			inStack : 'stack1',
			inBlock : 'stack1_block1',
			onSide : 'stack1_block1_front',
			num : '130',
			type : 'toggler',
		},
		positions : {
			position_1 : {
				state : '1',
				description : 'Включите БП1',
				action_1 : {
					inStack : 'stack1',
					inBlock : 'stack1_block1',
					onSide : 'stack1_block1_front',
					type : 'lamp',
					num : '21',
					status : 'on',
				},
			},
		},
	},
	el19 : {
		click : '19',
		current : {
			inStack : 'stack1',
			inBlock : 'stack1_block1',
			onSide : 'stack1_block1_front',
			num : '96',
			type : 'toggler',
		},
		positions : {
			position_1 : {
				state : '1',
				description : 'Включите БП2',
				action_1 : {
					inStack : 'stack1',
					inBlock : 'stack1_block1',
					onSide : 'stack1_block1_front',
					type : 'lamp',
					num : '30',
					status : 'on',
				},
			},
		},
	},
	el20 : {
		click : '20',
		current : {
			inStack : 'stack1',
			inBlock : 'stack1_block1',
			onSide : 'stack1_block1_front',
			num : '130',
			type : 'toggler',
		},
		positions : {
			position_1 : {
				state : '0',
				description : 'Убедитесь в работоспособности БП1 и БП2, для чего кратковременно отключите БП1.',
				action_1 : {
					inStack : 'stack1',
					inBlock : 'stack1_block1',
					onSide : 'stack1_block1_front',
					type : 'lamp',
					num : '21',
					status : 'off',
				},
			},
			position_2 : {
				state : '1',
				description : 'Включите БП1',
				action_1 : {
					inStack : 'stack1',
					inBlock : 'stack1_block1',
					onSide : 'stack1_block1_front',
					type : 'lamp',
					num : '21',
					status : 'on',
				},
			},
		},
	},
	el21 : {
		click : '21',
		current : {
			inStack : 'stack1',
			inBlock : 'stack1_block2',
			onSide : 'stack1_block2_front',
			num : '1',
			type : 'toggler',
		},
		positions : {
			position_1 : {
				state : '1',
				description : 'Установите переключатель СЕТЬ РЕЗЕРВН 	ЭЛ СТАНЦИЯ в положение ЭЛ СТАНЦИЯ',
			},
		},
	},
	el22 : {
		click : '22',
		current : {
			inStack : 'stack1',
			inBlock : 'stack1_block1',
			onSide : 'stack1_block1_front',
			num : '2',
			type : 'knob',
		},
		positions : {
			position_1 : {
				state : '2',
				description : 'Установите переключательконтроля напряжений в положение СЕТЬ РЕЗ. Измерьте напряжение.',
				action_1 : {
					inStack : 'stack1',
					inBlock : 'stack1_block1',
					onSide : 'stack1_block1_front',
					type : 'scale',
					num : '1',
					status : '25',
				},
			},
		},
	},
	el23 : {
		click : '23',
		current : {
			inStack : 'stack1',
			inBlock : 'stack1_block1',
			onSide : 'stack1_block1_front',
			num : '315',
			type : 'toggler',
		},
		positions : {
			position_1 : {
				state : '0',
				description : 'Выключите СЕТЬ ОСН',
				action_1 : {
					inStack : 'stack1',
					inBlock : 'stack1_block1',
					onSide : 'stack1_block1_front',
					type : 'lamp',
					num : '6',
					status : 'off',
				},
			},
		},
	},
	el24 : {
		click : '24',
		current : {
			inStack : 'stack1',
			inBlock : 'stack1_block1',
			onSide : 'stack1_block1_front',
			num : '31',
			type : 'toggler',
		},
		positions : {
			position_1 : {
				state : '0',
				description : 'Выключите АККУМ',
			},
		},
	},
	el25 : {
		click : '25',
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
				description : 'Установите переключатель настройки в положение НАСТРОЙКА',
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
		defaultPosition : '0',
	},
	el26 : {
		click : '26',
		current : {
			inStack : 'stack0',
			inBlock : 'stack0_block1',
			onSide : 'stack0_block1_front',
			num : '99',
			type : 'button',
		},
		positions : {
			position_1 : {
				state : 'on',
				description : 'Нажмите кнопку ВКЛ ГРМ1',
				action_1 : {
					inStack : 'stack0',
					inBlock : 'stack0_block1',
					onSide : 'stack0_block1_front',
					type : 'lamp',
					num : '264',
					status : 'on',
				},
			},
		},
	},
	el27 : {
		click : '27',
		current : {
			inStack : 'stack0',
			inBlock : 'stack0_block14',
			onSide : 'stack0_block14_front',
			num : '19',
			type : 'toggler',
		},
		positions : {
			position_1 : {
				state : '1',
				description : 'Установите переключатель КРС-УРОВЕНЬ в положение УРОВЕНЬ',
			},
		},
		defaultPosition : '1',
	},
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


	ex9 : {

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
				description : 'Установите переключатель УПРАВЛЕНИЕ в положение ДУ',
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
				description : 'Установите переключатель РЕЖИМ в положение РАБОТА',
				action_1 : {
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
				description : 'Установите переключатель М ВКЛ 	Д ВКЛ в положение Д ВКЛ',
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
				description : 'Установите переключатель ВЕНТИЛЯТОР в положение АВТ',
			},
		},
		defaultPosition : '1',
	},
},

}