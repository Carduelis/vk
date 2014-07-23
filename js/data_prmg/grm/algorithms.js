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
			},
			position_2 : {
				state : '2',
				description : 'Установите переключатель контроля напряжения в положение СЕТЬ РЕЗ. Измерьте напряжение.',
			},
			position_3 : {
				state : '5',
				description : 'Установите переключатель контроля напряжения в положение +27В ДЕЖ. Измерьте напряжение.',
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
	
	nameOfExercise : 'Порядок работы при местном управлении',
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
				state : '1',
				description : 'Установите на ПИУ Г переключатель УПРАВЛЕНИЕ в положение МУ',
				action_1 : {
					inStack : 'stack0',
					inBlock : 'stack0_block1',
					onSide : 'stack0_block1_front',
					type : 'lamp',
					num : '23',
					status : 'on',
				},
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
			num : '21',
			type : 'toggler',
		},
		positions : {
			position_1 : {
				state : '0',
				description : 'Установите на ПИУ Г переключатель переключатель РЕЖИМ в положение РАБОТА',
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
			inStack : 'stack0',
			inBlock : 'stack0_block1',
			onSide : 'stack0_block1_front',
			num : '99',
			type : 'button',
		},
		positions : {
			position_1 : {
				state : 'on',
				description : 'Включите ГРМ нажатием соответствующей кнопки ВКЛ',
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
	el4 : {
		click : '4',
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
				description : 'Установите переключатель РАБОТА — КАЛИБРОВКА на передней панели ИКР в положение КАЛИБРОВКА.',
			},
		},
		defaultPosition : '0',
	},
	el5 : {
		click : '5',
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
				description : 'Установите на ПИУ Г переключатель РЕЖИМ в положение НАСТРОЙКА',
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
			},
		},
	},
	el6 : {
		click : '6',
		current : {
			inStack : 'stack0',
			inBlock : 'stack0_block14',
			onSide : 'stack0_block14_front',
			num : '36',
			type : 'socket',
		},
		positions : {
			position_1 : {
				state : 'on',
				description : 'Соедините гнездо 12,5 Гц на передней панели ИКР с гнездом 12,5 Гц на передней панели БМК',
			},
		},
	},
	el7 : {
		click : '7',
		current : {
			inStack : 'stack1',
			inBlock : 'stack1_block3',
			onSide : 'stack1_block3_front',
			num : '11',
			type : 'socket',
		},
		positions : {
			position_1 : {
				state : 'on',
				description : 'Соедините гнездо 12,5 Гц на передней панели ИКР с гнездом 12,5 Гц на передней панели БМК',
			},
		},
	},
	el8 : {
		click : '8',
		current : {
			inStack : 'stack0',
			inBlock : 'stack0_block14',
			onSide : 'stack0_block14_front',
			num : '11',
			type : 'socket',
		},
		positions : {
			position_1 : {
				state : 'on',
				description : 'С гнезд ВЫХОД на передней панели БМК или с клемм ВЫХОД на задней стенке БМК подайте сигнал посадки на гнезда «0» и «S» ИКР',
			},
		},
	},
	el9 : {
		click : '9',
		current : {
			inStack : 'stack0',
			inBlock : 'stack0_block14',
			onSide : 'stack0_block14_front',
			num : '23',
			type : 'socket',
		},
		positions : {
			position_1 : {
				state : 'on',
				description : 'С гнезд ВЫХОД на передней панели БМК или с клемм ВЫХОД на задней стенке БМК подайте сигнал посадки на гнезда «0» и «S» ИКР',
			},
		},
	},
	el10 : {
		click : '10',
		current : {
			inStack : 'stack1',
			inBlock : 'stack1_block3',
			onSide : 'stack1_block3_front',
			num : '5',
			type : 'socket',
		},
		positions : {
			position_1 : {
				state : 'on',
				description : 'С гнезд ВЫХОД на передней панели БМК или с клемм ВЫХОД на задней стенке БМК подайте сигнал посадки на гнезда «0» и «S» ИКР',
			},
		},
	},
	el11 : {
		click : '11',
		current : {
			inStack : 'stack1',
			inBlock : 'stack1_block3',
			onSide : 'stack1_block3_front',
			num : '10',
			type : 'toggler',
		},
		positions : {
			position_1 : {
				state : '0',
				description : 'Включите БМК и проверьте соответствие показаний ИКР установленным на БМК фиксированным значениям КРС %',
				action_1 : {
					inStack : 'stack1',
					inBlock : 'stack1_block3',
					onSide : 'stack1_block3_front',
					type : 'lamp',
					num : '8',
					status : 'on',
				},
			},
		},
	},
	el12 : {
		click : '12',
		current : {
			inStack : 'stack1',
			inBlock : 'stack1_block3',
			onSide : 'stack1_block3_front',
			num : '4',
			type : 'knob',
		},
		positions : {
			position_1 : {
				state : '1',
				description : 'Включите БМК и проверьте соответствие показаний ИКР установленным на БМК фиксированным значениям КРС %',
			},
		},
	},
	el13 : {
		click : '13',
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
				description : 'Переключатель РАБОТА — КАЛИБРОВКА на передней панели ИКР установите в положение РАБОТА и снова проверьте погрешность ИКР по каналам контроля «0» и «S»',
			},
		},
	},
	el14 : {
		click : '14',
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
				description : 'Установите после окончание проверок отключившегося комплекта переключатель РЕЖИМ на ПИУ Г в положение РАБОТА.',
				action_1 : {
					inStack : 'stack0',
					inBlock : 'stack0_block1',
					onSide : 'stack0_block1_front',
					type : 'lamp',
					num : '100',
					status : 'on',
				},
				action_2 : {
					inStack : 'stack0',
					inBlock : 'stack0_block1',
					onSide : 'stack0_block1_front',
					type : 'lamp',
					num : '115',
					status : 'off',
				},
			},
		},
	},
	el15 : {
		click : '15',
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
				description : 'Включите выбранный комплект, исходя из равномерной наработки каждого комплекта.',
			},
		},
	},
	el16 : {
		click : '16',
		current : {
			inStack : 'stack1',
			inBlock : 'stack1_block1',
			onSide : 'stack1_block1_front',
			num : '20',
			type : 'button',
		},
		positions : {
			position_1 : {
				state : 'on',
				description : 'Перед уходом обслуживающего персонала необходимо в тёмное время суток включить светоограждение, нажав на кнопку ВКЛ. СВЕТООГРАЖДЕНИЕ на распределительном щите',
				action_1 : {
					inStack : 'stack1',
					inBlock : 'stack1_block1',
					onSide : 'stack1_block1_front',
					type : 'lamp',
					num : '182',
					status : 'on',
				},
			},
		},
	},
},

ex3 : {
	nameOfExercise : 'Проверка работоспособности основной аппаратуры маяка',
	el1 : {
		click : '1',
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
				description : 'Переключатель РАБОТА-НАСТР на ПИУ Г установите в положение НАСТР',
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
	el2 : {
		click : '2',
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
				action_2 : {
					inStack : 'stack0',
					inBlock : 'stack0_block1',
					onSide : 'stack0_block1_front',
					type : 'lamp',
					num : '291',
					status : 'on',
				},
			},
		},
	},
	el3 : {
		click : '3',
		current : {
			inStack : 'stack0',
			inBlock : 'stack0_block5',
			onSide : 'stack0_block5_front',
			num : '7',
			type : 'button',
		},
		positions : {
			position_1 : {
				state : 'on',
				description : 'Нажмите кнопку ПАРАМЕТР. На цифровом индикаторе отобразится номер частотного канала, заданный заводской настройкой.',
				action_1 : {
					inStack : 'stack0',
					inBlock : 'stack0_block5',
					onSide : 'stack0_block5_front',
					type : 'lamp',
					num : '21',
					status : 'on',
				},
				action_2 : {
					inStack : 'stack0',
					inBlock : 'stack0_block5',
					onSide : 'stack0_block5_front',
					type : 'lamp',
					num : '10',
					status : 'on',
				},
				action_3 : {
					inStack : 'stack0',
					inBlock : 'stack0_block5',
					onSide : 'stack0_block5_front',
					type : 'indicator',
					num : '9',
					status : '000',
				},
			},
			position_2 : {
				state : 'off',
				description : 'Нажмите кнопку ПАРАМЕТР. На цифровом индикаторе отобразится значение мощности в ваттах.',
				action_1 : {
					inStack : 'stack0',
					inBlock : 'stack0_block5',
					onSide : 'stack0_block5_front',
					type : 'lamp',
					num : '10',
					status : 'on',
				},
				action_2 : {
					inStack : 'stack0',
					inBlock : 'stack0_block5',
					onSide : 'stack0_block5_front',
					type : 'lamp',
					num : '6',
					status : 'on',
				},
				action_3 : {
					inStack : 'stack0',
					inBlock : 'stack0_block5',
					onSide : 'stack0_block5_front',
					type : 'indicator',
					num : '9',
					status : '000',
				},
			},
			position_3 : {
				state : 'off',
				description : 'Нажмите кнопку ПАРАМЕТР. На цифровом индикаторе отобразится коэффициент стоячей волны.',
				action_1 : {
					inStack : 'stack0',
					inBlock : 'stack0_block5',
					onSide : 'stack0_block5_front',
					type : 'lamp',
					num : '6',
					status : 'on',
				},
				action_2 : {
					inStack : 'stack0',
					inBlock : 'stack0_block5',
					onSide : 'stack0_block5_front',
					type : 'lamp',
					num : '15',
					status : 'on',
				},
				action_3 : {
					inStack : 'stack0',
					inBlock : 'stack0_block5',
					onSide : 'stack0_block5_front',
					type : 'indicator',
					num : '9',
					status : '000',
				},
			},
			position_4 : {
				state : 'off',
				description : 'Нажмите кнопку ПАРАМЕТР. На цифровом индикаторе отобразится температура.',
				action_1 : {
					inStack : 'stack0',
					inBlock : 'stack0_block5',
					onSide : 'stack0_block5_front',
					type : 'lamp',
					num : '15',
					status : 'on',
				},
				action_2 : {
					inStack : 'stack0',
					inBlock : 'stack0_block5',
					onSide : 'stack0_block5_front',
					type : 'lamp',
					num : '21',
					status : 'on',
				},
				action_3 : {
					inStack : 'stack0',
					inBlock : 'stack0_block5',
					onSide : 'stack0_block5_front',
					type : 'indicator',
					num : '9',
					status : '000',
				},
			},
		},
	},
	el4 : {
		click : '4',
		current : {
			inStack : 'stack0',
			inBlock : 'stack0_block14',
			onSide : 'stack0_block14_front',
			num : '9',
			type : 'toggler',
		},
		positions : {
			position_1 : {
				state : '1',
				description : 'Установите переключатель КРС-УРОВЕНЬ в положение УРОВЕНЬ',
			},
			position_2 : {
				state : '0',
				description : 'Установите переключатель КРС-УРОВЕНЬ в положение КРС, снимите показание КРС по цифровым индикаторам по каналам контроля «0» и «S».',
			},
		},
		defaultPosition : '0',
	},	
},
ex4 : {

	nameOfExercise : 'Установка и контроль положения зоны глиссады, проверка установленных порогов выдачи сигналов аварии устройств допускового контроля, проверка аварийного переключения комплектов',
	el1 : {
		click : '1',
		current : {
			inStack : 'stack0',
			inBlock : 'stack0_block2',
			onSide : 'stack0_block2_front',
			num : '1',
			type : 'rotator',
		},
		positions : {
			position_1 : {
				state : '5',
				description : 'Установите ручку крутизны на 50 делений',
			},
		},
	},
	el2 : {
		click : '2',
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
				description : 'Включите первый комплект аппаратуры ГРМ',
				action_1 : {
					inStack : 'stack0',
					inBlock : 'stack0_block1',
					onSide : 'stack0_block1_front',
					type : 'lamp',
					num : '264',
					status : 'on',
				},
				action_2 : {
					inStack : 'stack0',
					inBlock : 'stack0_block1',
					onSide : 'stack0_block1_front',
					type : 'lamp',
					num : '291',
					status : 'on',
				},
				action_3 : {
					inStack : 'stack0',
					inBlock : 'stack0_block1',
					onSide : 'stack0_block1_front',
					type : 'lamp',
					num : '23',
					status : 'on',
				},
				action_4 : {
					inStack : 'stack0',
					inBlock : 'stack0_block1',
					onSide : 'stack0_block1_front',
					type : 'lamp',
					num : '31',
					status : 'on',
				},
				action_5 : {
					inStack : 'stack0',
					inBlock : 'stack0_block1',
					onSide : 'stack0_block1_front',
					type : 'lamp',
					num : '100',
					status : 'on',
				},
				action_6 : {
					inStack : 'stack0',
					inBlock : 'stack0_block1',
					onSide : 'stack0_block1_front',
					type : 'lamp',
					num : '213',
					status : 'on',
				},
			},
		},
	},
	el3 : {
		click : '3',
		current : {
			inStack : 'stack0',
			inBlock : 'stack0_block2',
			onSide : 'stack0_block2_front',
			num : '2',
			type : 'rotator',
		},
		positions : {
			position_1 : {
				state : '3',
				description : 'Ручкой ФАЗА добейтесь максимального отрицательного значения КРС по каналу контроля «0». Запомните положение фазовращателя и значение КРС (30)',
			},
			position_2 : {
				state : '8',
				description : 'Ручкой ФАЗА добейтесь максимального положительного значения КРС по каналу контроля «0». Запомните положение фазовращателя и значение КРС (80)',
			},
		},
	},
},
ex5 : {

	nameOfExercise : 'Проверка выдачи сигнала АВАРИЯ от ухода нуля зоны и переключение с задержкой на резервный комплект',
	el1 : {
		click : '1',
		current : {
			inStack : 'stack0',
			inBlock : 'stack0_block4',
			onSide : 'stack0_block4_front',
			num : '1',
			type : 'next',
		},
		positions : {
			position_1 : {
				state : 'off',
				description : 'Устанавливая в тракт между ЦСЧ и УМ КГ фиксированные аттенюаторы с ослаблением 1 дБ, 2 дБ, 3 дБ и 4 дБ, зафиксировать по цифровому индикатору ЦСЧ мощность, при которой на ПИУ Г загорается индикатор АВАРИЯ Мщ ГРМ. Мощность в момент выдачи сигнала АВАРИЯ должна быть от 3 до 5 Вт. Задержка времени переключения — не более 2 с.',
				action_1 : {
					inStack : 'stack0',
					inBlock : 'stack0_block1',
					onSide : 'stack0_block1_front',
					type : 'lamp',
					num : '384',
					status : 'on',
				},
				action_2 : {
					inStack : 'stack0',
					inBlock : 'stack0_block1',
					onSide : 'stack0_block1_front',
					type : 'lamp',
					num : '23',
					status : 'on',
				},
				action_3 : {
					inStack : 'stack0',
					inBlock : 'stack0_block1',
					onSide : 'stack0_block1_front',
					type : 'lamp',
					num : '100',
					status : 'on',
				},
				action_4 : {
					inStack : 'stack0',
					inBlock : 'stack0_block1',
					onSide : 'stack0_block1_front',
					type : 'lamp',
					num : '31',
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
					num : '264',
					status : 'on',
				},
				action_7 : {
					inStack : 'stack0',
					inBlock : 'stack0_block1',
					onSide : 'stack0_block1_front',
					type : 'lamp',
					num : '291',
					status : 'on',
				},
				action_8 : {
					inStack : 'stack0',
					inBlock : 'stack0_block1',
					onSide : 'stack0_block1_front',
					type : 'lamp',
					num : '50',
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
				state : '0',
				description : 'Установите переключатель РЕЖИМ в положение РАБОТА',
			},
		},
		defaultPosition : '1',
	},
	el3 : {
		click : '3',
		current : {
			inStack : 'stack0',
			inBlock : 'stack0_block1',
			onSide : 'stack0_block1_front',
			num : '5',
			type : 'button',
		},
		positions : {
			position_1 : {
				state : 'on',
				description : 'Включите выбранный комплект нажатием кнопки ВЫБОР КОМПЛЕКТА',
				action_1 : {
					inStack : 'stack0',
					inBlock : 'stack0_block1',
					onSide : 'stack0_block1_front',
					type : 'lamp',
					num : '31',
					status : 'off',
				},
				action_2 : {
					inStack : 'stack0',
					inBlock : 'stack0_block1',
					onSide : 'stack0_block1_front',
					type : 'lamp',
					num : '10',
					status : 'on',
				},
			},
		},
	},
},
ex6 : {

	nameOfExercise : 'Проверка выдачи сигнала "авария" от ухода крутизны зоны и переключение с задержкой времени на резервный комплект',
	el1 : {
		click : '1',
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
				description : 'Переключатель РЕЖИМ на ПИУ Г установите в положение РАБОТА',
				action_1 : {
					inStack : 'stack0',
					inBlock : 'stack0_block1',
					onSide : 'stack0_block1_front',
					type : 'lamp',
					num : '100',
					status : 'on',
				},
				action_2 : {
					inStack : 'stack0',
					inBlock : 'stack0_block1',
					onSide : 'stack0_block1_front',
					type : 'lamp',
					num : '264',
					status : 'on',
				},
				action_3 : {
					inStack : 'stack0',
					inBlock : 'stack0_block1',
					onSide : 'stack0_block1_front',
					type : 'lamp',
					num : '213',
					status : 'on',
				},
				action_4 : {
					inStack : 'stack0',
					inBlock : 'stack0_block1',
					onSide : 'stack0_block1_front',
					type : 'lamp',
					num : '31',
					status : 'on',
				},
				action_5 : {
					inStack : 'stack0',
					inBlock : 'stack0_block1',
					onSide : 'stack0_block1_front',
					type : 'lamp',
					num : '23',
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
			inBlock : 'stack0_block14',
			onSide : 'stack0_block14_front',
			num : '15',
			type : 'button',
		},
		positions : {
			position_1 : {
				state : 'on',
				description : 'Убедитесь, что показания ИКР по каналу контроля "S" составляют 30 % КРС',
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
					type : 'indicator',
					num : '31',
					status : '30',
				},
			},
		},
	},
	el3 : {
		click : '3',
		current : {
			inStack : 'stack0',
			inBlock : 'stack0_block2',
			onSide : 'stack0_block2_front',
			num : '1',
			type : 'rotator',
		},
		positions : {
			position_1 : {
				state : '7',
				description : 'Вращая ручку КРУТИЗНА устройства фидерного тракта, увеличьте КРС по индикатору на ИКР до включения индикатора АВАРИЯ КРУТ на ПИУ Г',
				action_1 : {
					inStack : 'stack0',
					inBlock : 'stack0_block1',
					onSide : 'stack0_block1_front',
					type : 'lamp',
					num : '352',
					status : 'on',
				},
				action_2 : {
					inStack : 'stack0',
					inBlock : 'stack0_block1',
					onSide : 'stack0_block1_front',
					type : 'lamp',
					num : '40',
					status : 'on',
				},
				action_3 : {
					inStack : 'stack0',
					inBlock : 'stack0_block1',
					onSide : 'stack0_block1_front',
					type : 'lamp',
					num : '213',
					status : 'off',
				},
				action_4 : {
					inStack : 'stack0',
					inBlock : 'stack0_block1',
					onSide : 'stack0_block1_front',
					type : 'lamp',
					num : '238',
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
					num : '264',
					status : 'off',
				},
			},
		},
	},
	el4 : {
		click : '4',
		current : {
			inStack : 'stack0',
			inBlock : 'stack0_block2',
			onSide : 'stack0_block2_front',
			num : '1',
			type : 'rotator',
		},
		positions : {
			position_1 : {
				state : '2',
				description : 'На ПИУ Г должны загореться индикаторы АВАРИЯ КРУТ отключив¬шегося комплекта, НЕТ РЕЗЕРВА ГРМ, КАТЕГОРИЯ I ГРМ и включиться звуковой сигнал. Верните ручку крутизны в исходное положение.',
			},
		},
	},
},

ex7 : {

	nameOfExercise : 'Проверка порога срабатывания контроля уровня мощности на входе УМ КГ',
	el1 : {
		click : '1',
		current : {
			inStack : 'stack0',
			inBlock : 'stack0_block4',
			onSide : 'stack0_block4_front',
			num : '1',
			type : 'next',
		},
		positions : {
			position_1 : {
				state : 'off',
				description : 'Устанавливая в тракт между ЦСЧ и УМ КГ фиксированные аттенюаторы с ослаблением 1 дБ, 2 дБ, 3 дБ и 4 дБ, зафиксировать по цифровому индикатору ЦСЧ мощность, при которой на ПИУ Г загорается индикатор АВАРИЯ Мщ ГРМ. Мощность в момент выдачи сигнала АВАРИЯ должна быть от 3 до 5 Вт. Задержка времени переключения — не более 2 с.',
				action_1 : {
					inStack : 'stack0',
					inBlock : 'stack0_block1',
					onSide : 'stack0_block1_front',
					type : 'lamp',
					num : '384',
					status : 'on',
				},
				action_2 : {
					inStack : 'stack0',
					inBlock : 'stack0_block1',
					onSide : 'stack0_block1_front',
					type : 'lamp',
					num : '23',
					status : 'on',
				},
				action_3 : {
					inStack : 'stack0',
					inBlock : 'stack0_block1',
					onSide : 'stack0_block1_front',
					type : 'lamp',
					num : '100',
					status : 'on',
				},
				action_4 : {
					inStack : 'stack0',
					inBlock : 'stack0_block1',
					onSide : 'stack0_block1_front',
					type : 'lamp',
					num : '31',
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
					num : '264',
					status : 'on',
				},
				action_7 : {
					inStack : 'stack0',
					inBlock : 'stack0_block1',
					onSide : 'stack0_block1_front',
					type : 'lamp',
					num : '291',
					status : 'on',
				},
				action_8 : {
					inStack : 'stack0',
					inBlock : 'stack0_block1',
					onSide : 'stack0_block1_front',
					type : 'lamp',
					num : '50',
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
				state : '0',
				description : 'Установите переключатель РЕЖИМ в положение РАБОТА',
			},
		},
		defaultPosition : '1',
	},
	el3 : {
		click : '3',
		current : {
			inStack : 'stack0',
			inBlock : 'stack0_block1',
			onSide : 'stack0_block1_front',
			num : '5',
			type : 'button',
		},
		positions : {
			position_1 : {
				state : 'on',
				description : 'Включите выбранный комплект нажатием кнопки ВЫБОР КОМПЛЕКТА',
				action_1 : {
					inStack : 'stack0',
					inBlock : 'stack0_block1',
					onSide : 'stack0_block1_front',
					type : 'lamp',
					num : '31',
					status : 'off',
				},
				action_2 : {
					inStack : 'stack0',
					inBlock : 'stack0_block1',
					onSide : 'stack0_block1_front',
					type : 'lamp',
					num : '10',
					status : 'on',
				},
			},
		},
	},
},
ex8 : {
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