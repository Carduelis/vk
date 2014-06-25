
var exercisesOptions = {
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
}

var exercisesContainer = {
	ex1 : {
		nameOfExercise : 'Включение аппаратуры ПРЛ',
		el1 : {
			click : '1',
			current : {
					inStack : 'stack7',
					inBlock : 'stack7_block1',
					onSide : 'stack7_block1_front',
					num : '21',
					type : 'button',
			},
			positions : {
				position_1 : {
						state : 'on',
						description : 'Нажмите кнопку СИГНАЛ В СИЛОВУЮ на распределительном щите',
				},
			},
		},
		el2 : {
			click : '2',
			current : {
					inStack : 'stack7',
					inBlock : 'stack7_block1',
					onSide : 'stack7_block1_front',
					num : '3',
					type : 'socket',
			},
			positions : {
				position_1 : {
						state : 'on',
						description : 'Подключите гарнитуру к гнездам ЛАРИНГОФОН-ТЕЛЕФОН и подайте команду электормеханику "Выдать электропитание на ПРЛ"',
				},
			},
		},
		el3 : {
			click : '3',
				current : {
					inStack : 'stack7',
					inBlock : 'stack7_block1',
					onSide : 'stack7_block1_front',
					num : '4',
					type : 'toggler',
			},
			positions : {
				position_1 : {
						state : '0', // Было undefined
						description : 'Установите на распределительном щите в аппаратной машине тумблер включения подсвета вольтметра в положение ПОДСВЕТ',
				},
			},
		},
		el4 : {
			click : '4',
			current : {
				inStack : 'stack7',
				inBlock : 'stack7_block1',
				onSide : 'stack7_block1_front',
				num : '11',
				type : 'knob',
			},
			positions : {
				position_1 : {
					state : '1', // Было undefined
					description : 'Установите переключатель фазоиндикатора в положение ФИДЕР I',
				},
			},
		},
		el5 : {
			click : '5',
			current : {
				inStack : 'stack7',
				inBlock : 'stack7_block1',
				onSide : 'stack7_block1_front',
				num : '5',
				type : 'knob',
			},
			positions : {
				position_1 : {
					state : '1', // Было undefined
					description : 'Установите тумблер номиналов напряжения ФИДЕР I в положение А-В',
				},
				position_2 : {
					state : '1', // Было undefined
					description : 'Установите тумблер номиналов напряжения ФИДЕР I в положение А-С',
				},
				position_3 : {
					state : '1', // Было undefined
					description : 'Установите тумблер номиналов напряжения ФИДЕР I в положение В-С',
					action_1 : {
						inStack : 'stack7',
						inBlock : 'stack7_block1',
						onSide : 'stack7_block1_front',
						type : 'lamp',
						num : '15',
					status : 'on',
					},
				},
			},
		},
		el6 : {
			click : '6',
			current : {
				inStack : 'stack7',
				inBlock : 'stack7_block1',
				onSide : 'stack7_block1_front',
				num : '13',
				type : 'toggler',
			},
			positions : {
				position_1 : {
					state : '1',
					description : 'Установите переключатель ПИТАНИЕ РАДИОЛОКАТОРОВ ДИСПЕТЧЕРСКИЙ в положение выбранного фидера',
				},
			},
		},
		el7 : {
			click : '7',
			current : {
				inStack : 'stack7',
				inBlock : 'stack7_block1',
				onSide : 'stack7_block1_front',
				num : '23',
				type : 'toggler',
			},
			positions : {
				position_1 : {
					state : '1',
					description : 'Установите переключатель ПИТАНИЕ РАДИОЛОКАТОРОВ ПОСАДОЧНЫЙ в положение выбранного фидера',
				},
			},
		},
		el8 : {
			click : '8',
			current : {
				inStack : 'stack7',
				inBlock : 'stack7_block1',
				onSide : 'stack7_block1_front',
				num : '34',
				type : 'toggler',
			},
			positions : {
				position_1 : {
					state : '0',
					description : 'Установите переключатель ВЕНТИЛЯТОРЫ в положение ДРЛ',
				},
			},
		},
		el9 : {
			click : '9',
			current : {
				inStack : 'stack7',
				inBlock : 'stack7_block1',
				onSide : 'stack7_block1_front',
				num : '46',
				type : 'toggler',
			},
			positions : {
				position_1 : {
					state : '1',
					description : 'Установите переключатель ВЕНТИЛЯТОРЫ в положение ИНДИКАТОРЫ',
				},
			},
		},
		el10 : {
			click : '10',
			current : {
				inStack : 'stack7',
				inBlock : 'stack7_block1',
				onSide : 'stack7_block1_front',
				num : '59',
				type : 'toggler',
			},
			positions : {
				position_1 : {
					state : '1',
					description : 'Установите переключатель ВЕНТИЛЯТОРЫ в положение ПРЛ',
				},
			},
		},
		el11 : {
			click : '11',
			current : {
				inStack : 'stack7',
				inBlock : 'stack7_block1',
				onSide : 'stack7_block1_front',
				num : '88',
				type : 'toggler',
			},
			positions : {
				position_1 : {
					state : '0',
					description : 'Включите автомат ПОСАДОЧНЫЙ на распределительном щите',
				},
			},
		},
		el12 : {
			click : '12',
			current : {
				inStack : 'stack6',
				inBlock : 'stack6_block4',
				onSide : 'stack6_block4_front',
				num : '18',
				type : 'toggler',
			},
			positions : {
				position_1 : {
					state : '1',
					description : 'Установите переключатель включения питания индикаторов на передней панели блока ВИ-П в положение СЕТЬ',
				},
			},
		},
		el13 : {
			click : '13',
			current : {
				inStack : 'stack2',
				inBlock : 'stack2_block5',
				onSide : 'stack2_block5_front',
				num : '2',
				type : 'toggler',
			},
			positions : {
				position_1 : {
					state : '1',
					description : 'Установите переключатель на передней панели блока ВП-П в положение КОМПЕНСАТОР И ФАЗОВЫЙ БЛОК',
				},
			},
		},
		el14 : {
			click : '14',
			current : {
				inStack : 'stack2',
				inBlock : 'stack2_block5',
				onSide : 'stack2_block5_front',
				num : '3',
				type : 'toggler',
			},
			positions : {
				position_1 : {
					state : '1',
					description : 'Установите переключатель на передней панели блока ВП-П в положение ПРИЕМНИК',
				},
			},
		},
		el15 : {
			click : '15',
			current : {
				inStack : 'stack2',
				inBlock : 'stack2_block5',
				onSide : 'stack2_block5_front',
				num : '4',
				type : 'toggler',
			},
			positions : {
				position_1 : {
					state : '1',
					description : 'Установите переключатель на передней панели блока ВП-П в положение ГЕТЕРОДИН',
				},
			},
		},
		el16 : {
			click : '16',
			current : {
				inStack : 'stack3',
				inBlock : 'stack3_block2',
				onSide : 'stack3_block2_front',
				num : '1',
				type : 'toggler',
			},
			positions : {
				position_1 : {
					state : '1',
					description : 'Установите переключатель СЕТЬ в положение ВКЛ на блоке ПУ-П',
				},
			},
		},
		el17 : {
			click : '17',
			current : {
				inStack : 'stack7',
				inBlock : 'stack7_block2',
				onSide : 'stack7_block2_front',
				num : '14',
				type : 'toggler',
			},
			positions : {
				position_1 : {
					state : '1', // Было undefined
					description : 'Установите переключатель СЕТЬ-ОТКЛ в положение СЕТЬ на блоке БУА-П',
				},
			},
		},
		el18 : {
			click : '18',
			current : {
				inStack : 'stack6',
				inBlock : 'stack6_block4',
				onSide : 'stack6_block4_front',
				num : '17',
				type : 'knob',
			},
			positions : {
				position_1 : {
					state : '1', // Было undefined
					description : 'На блоке КОНТРОЛЬ НАПРЯЖЕНИЯ установить тумблер номинального напряжения в положение 0',
				},
				position_2 : {
					state : '1', // Было undefined
					description : 'На блоке КОНТРОЛЬ НАПРЯЖЕНИЯ установить тумблер номинального напряжения в положение	210В',
					action_1 : {
						inStack : 'stack6',
						inBlock : 'stack6_block4',
						onSide : 'stack6_block4_front',
						type : 'scale',
						num : '16',
					status : 'undefined',
					},
				},
				position_3 : {
					state : '1', // Было undefined
					description : 'На блоке КОНТРОЛЬ НАПРЯЖЕНИЯ установить тумблер номинального напряжения в положение +200В',
					action_1 : {
						inStack : 'stack6',
						inBlock : 'stack6_block4',
						onSide : 'stack6_block4_front',
						type : 'scale',
						num : '16',
					status : 'undefined',
					},
				},
				position_4 : {
					state : '1', // Было undefined
					description : 'На блоке КОНТРОЛЬ НАПРЯЖЕНИЯ установить тумблер номинального напряжения в положение +250В',
					action_1 : {
						inStack : 'stack6',
						inBlock : 'stack6_block4',
						onSide : 'stack6_block4_front',
						type : 'scale',
						num : '16',
					status : 'undefined',
					},
				},
			},
		},
		el19 : {
			click : '19',
			current : {
				inStack : 'stack6',
				inBlock : 'stack6_block3',
				onSide : 'stack6_block3_front',
				num : '14',
				type : 'knob',
			},
			positions : {
				position_1 : {
					state : '1', // Было undefined
					description : 'На субпанели блока ИК-П установите тумблер в положение 5КВ /35-45/',
				},
			},
		},
		el20 : {
			click : '20',
			current : {
				inStack : 'stack2',
				inBlock : 'stack2_block1',
				onSide : 'stack2_block1_front',
				num : '3',
				type : 'knob',
			},
			positions : {
				position_1 : {
					state : '1', // Было undefined
					description : 'На блоке П-П установить тумблер номинального напряжения в положение КР.1',
					action_1 : {
						inStack : 'stack2',
						inBlock : 'stack2_block1',
						onSide : 'stack2_block1_front',
						type : 'scale',
						num : '6',
					status : 'undefined',
					},
				},
				position_2 : {
					state : '1', // Было undefined
					description : 'На блоке П-П установить тумблер номинального напряжения в положение КР.2',
					action_1 : {
						inStack : 'stack2',
						inBlock : 'stack2_block1',
						onSide : 'stack2_block1_front',
						type : 'scale',
						num : '6',
					status : 'undefined',
					},
				},
				position_3 : {
					state : '1', // Было undefined
					description : 'На блоке П-П установить тумблер номинального напряжения в положение КР.3',
					action_1 : {
						inStack : 'stack2',
						inBlock : 'stack2_block1',
						onSide : 'stack2_block1_front',
						type : 'scale',
						num : '6',
					status : 'undefined',
					},
				},
				position_4 : {
					state : '1', // Было undefined
					description : 'На блоке П-П установить тумблер номинального напряжения в положение КР.4',
					action_1 : {
						inStack : 'stack2',
						inBlock : 'stack2_block1',
						onSide : 'stack2_block1_front',
						type : 'scale',
						num : '6',
					status : 'undefined',
					},
				},
				position_5 : {
					state : '1', // Было undefined
					description : 'На блоке П-П установить тумблер номинального напряжения в положение 50; +250В',
					action_1 : {
						inStack : 'stack2',
						inBlock : 'stack2_block1',
						onSide : 'stack2_block1_front',
						type : 'scale',
						num : '6',
					status : 'undefined',
					},
				},
				position_6 : {
					state : '1', // Было undefined
					description : 'На блоке П-П установить тумблер номинального напряжения в положение 30; +150В',
					action_1 : {
						inStack : 'stack2',
						inBlock : 'stack2_block1',
						onSide : 'stack2_block1_front',
						type : 'scale',
						num : '6',
					status : 'undefined',
					},
				},
				position_7 : {
					state : '1', // Было undefined
					description : 'На блоке П-П установить тумблер номинального напряжения в положение 40+50; +27В',
					action_1 : {
						inStack : 'stack2',
						inBlock : 'stack2_block1',
						onSide : 'stack2_block1_front',
						type : 'scale',
						num : '6',
					status : 'undefined',
					},
				},
				position_8 : {
					state : '1', // Было undefined
					description : 'На блоке П-П установить тумблер номинального напряжения в положение КОНТР. ДИСКР.',
					action_1 : {
						inStack : 'stack2',
						inBlock : 'stack2_block1',
						onSide : 'stack2_block1_front',
						type : 'scale',
						num : '6',
					status : 'undefined',
					},
				},
				position_9 : {
					state : '1', // Было undefined
					description : 'На блоке П-П установить тумблер номинального напряжения в положение 42;	105В',
					action_1 : {
						inStack : 'stack2',
						inBlock : 'stack2_block1',
						onSide : 'stack2_block1_front',
						type : 'scale',
						num : '6',
					status : 'undefined',
					},
				},
				position_10 : {
					state : '1', // Было undefined
					description : 'На блоке П-П установить тумблер номинального напряжения в положение ВЫХ. ДЕТ.',
					action_1 : {
						inStack : 'stack2',
						inBlock : 'stack2_block1',
						onSide : 'stack2_block1_front',
						type : 'scale',
						num : '6',
					status : 'undefined',
					},
				},
				position_11 : {
					state : '1', // Было undefined
					description : 'На блоке П-П установить тумблер номинального напряжения в положение БАЛАНС МУ',
					action_1 : {
						inStack : 'stack2',
						inBlock : 'stack2_block1',
						onSide : 'stack2_block1_front',
						type : 'scale',
						num : '6',
					status : 'undefined',
					},
				},
			},
		},
		el21 : {
			click : '21',
			current : {
				inStack : 'stack1',
				inBlock : 'stack1_block1',
				onSide : 'stack1_block1_front',
				num : '1',
				type : 'knob',
			},
			positions : {
				position_1 : {
					state : '1', // Было undefined
					description : 'На блоке П-Д установить тумблер величины токов в положение КР.1',
					action_1 : {
						inStack : 'stack1',
						inBlock : 'stack1_block1',
						onSide : 'stack1_block1_front',
						type : 'scale',
						num : '15',
					status : 'undefined',
					},
				},
				position_2 : {
					state : '1', // Было undefined
					description : 'На блоке П-Д установить тумблер величины токов в положение КР.2',
					action_1 : {
						inStack : 'stack1',
						inBlock : 'stack1_block1',
						onSide : 'stack1_block1_front',
						type : 'scale',
						num : '15',
					status : 'undefined',
					},
				},
				position_3 : {
					state : '1', // Было undefined
					description : 'На блоке П-Д установить тумблер величины токов в положение ГЕТЕР.',
					action_1 : {
						inStack : 'stack1',
						inBlock : 'stack1_block1',
						onSide : 'stack1_block1_front',
						type : 'scale',
						num : '15',
					status : 'undefined',
					},
				},
				position_4 : {
					state : '1', // Было undefined
					description : 'На блоке П-Д установить тумблер величины токов в положение КР.3',
					action_1 : {
						inStack : 'stack1',
						inBlock : 'stack1_block1',
						onSide : 'stack1_block1_front',
						type : 'scale',
						num : '15',
					status : 'undefined',
					},
				},
				position_5 : {
					state : '1', // Было undefined
					description : 'На блоке П-Д установить тумблер величины токов в положение КР.4',
					action_1 : {
						inStack : 'stack1',
						inBlock : 'stack1_block1',
						onSide : 'stack1_block1_front',
						type : 'scale',
						num : '15',
					status : 'undefined',
					},
				},
			},
		},
		el22 : {
			click : '22',
			current : {
				inStack : 'stack3',
				inBlock : 'stack3_block2',
				onSide : 'stack3_block2_front',
				num : '2',
				type : 'toggler',
			},
			positions : {
				position_1 : {
					state : '1', // Было undefined
					description : 'На блоке ПУ-П установить тумблер включения высокого напряжения в положение ВЫСОКОЕ НАПРЯЖ',
					action_1 : {
						inStack : 'stack3',
						inBlock : 'stack3_block2',
						onSide : 'stack3_block2_front',
						type : 'lamp',
						num : '2',
					status : 'on',
					},
				},
			},
		},
		el23 : {
			click : '23',
			current : {
				inStack : 'stack3',
				inBlock : 'stack3_block2',
				onSide : 'stack3_block2_front',
				num : '1',
				type : 'rotator',
			},
			positions : {
				position_1 : {
					state : '1', // Было undefined
					description : 'Вращайте ручку вариака до установления тока в районе 0,8 мА',
					action_1 : {
						inStack : 'stack3',
						inBlock : 'stack3_block2',
						onSide : 'stack3_block2_front',
						type : 'scale',
						num : '37',
					status : 'undefined',
					},
				},
			},
		},
		el24 : {
			click : '24',
			current : {
				inStack : 'stack3',
				inBlock : 'stack3_block3',
				onSide : 'stack3_block3_front',
				num : '1',
				type : 'toggler',
			},
			positions : {
				position_1 : {
					state : '0',
					description : 'Переключите тумблер СМЕНА ВОЛН на блоке ГМ-П в положение, соответствующее необходимой волне',
				},
			},
		},
		el25 : {
			click : '25',
			current : {
				inStack : 'stack6',
				inBlock : 'stack6_block3',
				onSide : 'stack6_block3_front',
				num : '31',
				type : 'toggler',
			},
			positions : {
				position_1 : {
					state : '0',
					description : 'Переключите тумблер ПРИВОД АНТЕНН на пульте управления индикаторов в положение ВКЛ',
				},
				position_2 : {
					state : '0',
					description : 'Переключите тумблер ПРИВОД АНТЕНН на пульте управления индикаторов в положение ВЫКЛ',
				},
			},
		},
		el26 : {
			click : '26',
			current : {
				inStack : 'stack6',
				inBlock : 'stack6_block3',
				onSide : 'stack6_block3_front',
				num : '18',
				type : 'toggler',
			},
			positions : {
				position_1 : {
					state : '0',
					description : 'Нажмите кнопку БЛОКИРОВКА СИРЕНЫ',
				},
			},
		},
	},
	ex2 : {
		nameOfExercise : 'Включение аппаратуры ДРЛ',
		el1 : {
			click : '1',
			current : {
				inStack : 'stack7',
				inBlock : 'stack7_block1',
				onSide : 'stack7_block1_front',
				num : '21',
				type : 'button',
			},
			positions : {
				position_1 : {
					state : 'off',
					description : 'Нажмите кнопку СИГНАЛ В СИЛОВУЮ на распределительном щите',
				},
			},
		},
		el2 : {
			click : '2',
			current : {
				inStack : 'stack7',
				inBlock : 'stack7_block1',
				onSide : 'stack7_block1_front',
				num : '3',
				type : 'socket',
			},
			positions : {
				position_1 : {
					state : 'on',
					description : 'Подключите гарнитуру к гнездам ЛАРИНГОФОН-ТЕЛЕФОН и подайте команду электромеханику: "Выдать электропитание на ПРЛ"',
				},
			},
		},
		el3 : {
			click : '3',
			current : {
				inStack : 'stack7',
				inBlock : 'stack7_block1',
				onSide : 'stack7_block1_front',
				num : '4',
				type : 'toggler',
			},
			positions : {
				position_1 : {
					state : '0',
					description : 'Установите тумблер включения подсветки вольтметра в положение ПОДСВЕТ',
				},
			},
		},
		el4 : {
			click : '4',
			current : {
				inStack : 'stack7',
				inBlock : 'stack7_block1',
				onSide : 'stack7_block1_front',
				num : '11',
				type : 'knob',
			},
			positions : {
				position_1 : {
					state : '0',
					description : 'Установите тумблер в положение ФИДЕР I',
				},
			},
			defaultPosition : '1',
		},
		el5 : {
			click : '5',
			current : {
				inStack : 'stack7',
				inBlock : 'stack7_block1',
				onSide : 'stack7_block1_front',
				num : '5',
				type : 'knob',
			},
			positions : {
				position_1 : {
					state : '0',
					description : 'Установите тумблер номиналов напряжения ФИДЕР I в положение A-B',
					action_1 : {
						inStack : 'stack7',
						inBlock : 'stack7_block1',
						onSide : 'stack7_block1_front',
						type : 'scale',
						num : '1',
						status : '36',
					},
				},
				position_2 : {
					state : '1',
					description : 'Установите тумблер номиналов напряжения ФИДЕР I в положение A-С',
					action_1 : {
						inStack : 'stack7',
						inBlock : 'stack7_block1',
						onSide : 'stack7_block1_front',
						type : 'scale',
						num : '1',
						status : '36',
					},
				},
				position_3 : {
					state : '2',
					description : 'Установите тумблер номиналов напряжения ФИДЕР I в положение B-С',
					action_1 : {
						inStack : 'stack7',
						inBlock : 'stack7_block1',
						onSide : 'stack7_block1_front',
						type : 'scale',
						num : '1',
						status : '36',
					},
				},
			},
			defaultPosition : '3',
		},
		el6 : {
			click : '6',
			current : {
				inStack : 'stack7',
				inBlock : 'stack7_block1',
				onSide : 'stack7_block1_front',
				num : '13',
				type : 'toggler',
			},
			positions : {
				position_1 : {
					state : '1',
					description : 'Установите переключатель ПИТАНИЕ РАДИОЛОКАТОРОВ ДИСПЕТЧЕРСКИЙ в положение выбранного фидера',
				},
			},
			defaultPosition : '0',
		},
		el7 : {
			click : '7',
			current : {
				inStack : 'stack7',
				inBlock : 'stack7_block1',
				onSide : 'stack7_block1_front',
				num : '23',
				type : 'toggler',
			},
			positions : {
				position_1 : {
					state : '1',
					description : 'Установите переключатель ПИТАНИЕ РАДИОЛОКАТОРОВ ПОСАДОЧНЫЙ в положение выбранного фидера',
				},
			},
		},
		el8 : {
			click : '8',
			current : {
				inStack : 'stack7',
				inBlock : 'stack7_block1',
				onSide : 'stack7_block1_front',
				num : '34',
				type : 'toggler',
			},
			positions : {
				position_1 : {
					state : '1',
					description : 'Установите переключатели ВЕНТИЛЯТОРЫ в положение ДРЛ',
				},
			},
		},
		el9 : {
			click : '8',
			current : {
				inStack : 'stack7',
				inBlock : 'stack7_block1',
				onSide : 'stack7_block1_front',
				num : '46',
				type : 'toggler',
			},
			positions : {
				position_1 : {
					state : '1',
					description : 'Установите переключатели ВЕНТИЛЯТОРЫ в положение ИНДИКАТОРЫ',
				},
			},
		},
		el10 : {
			click : '9',
			current : {
				inStack : 'stack7',
				inBlock : 'stack7_block1',
				onSide : 'stack7_block1_front',
				num : '59',
				type : 'toggler',
			},
			positions : {
				position_1 : {
					state : '1',
					description : 'Установите переключатели ВЕНТИЛЯТОРЫ в положение ПРЛ',
				},
			},
		},
		el11 : {
			click : '10',
			current : {
				inStack : 'stack7',
				inBlock : 'stack7_block1',
				onSide : 'stack7_block1_front',
				num : '73',
				type : 'toggler',
			},
			positions : {
				position_1 : {
					state : '1',
					description : 'Включите автомат ДИСПЕТЧЕРСКИЙ на распределительном щите',
				},
			},
		},
		el12 : {
			click : '11',
			current : {
				inStack : 'stack4',
				inBlock : 'stack4_block3',
				onSide : 'stack4_block3_front',
				num : '5',
				type : 'toggler',
			},
			positions : {
				position_1 : {
					state : '1',
					description : 'Установите переключатель ВКЛЮЧ.ИНДИКАТОРОВ-ВЫКЛ. на блоке ВИ-Д в положение ВКЛЮЧ.ИНДИКАТОРОВ',
				},
			},
		},
		el13 : {
			click : '12',
			current : {
				inStack : 'stack1',
				inBlock : 'stack1_block2',
				onSide : 'stack1_block2_front',
				num : '4',
				type : 'toggler',
			},
			positions : {
				position_1 : {
					state : '0',
					description : 'Установите переключатель на блоке Ф-Д в положение ПИТ.ФБ',
				},
			},
			defaultPosition : '1',
		},
		el14 : {
			click : '13',
			current : {
				inStack : 'stack1',
				inBlock : 'stack1_block6',
				onSide : 'stack1_block6_front',
				num : '1',
				type : 'toggler',
			},
			positions : {
				position_1 : {
					state : '1',
					description : 'Установите переключатель на блоке ВП-Д в положение ЛВБ',
				},
			},
		},
		el15 : {
			click : '14',
			current : {
				inStack : 'stack1',
				inBlock : 'stack1_block6',
				onSide : 'stack1_block6_front',
				num : '2',
				type : 'toggler',
			},
			positions : {
				position_1 : {
					state : '1',
					description : 'Установите переключатель на блоке ВП-Д в положение ПРИЕМНИК',
				},
			},
		},
		el16 : {
			click : '15',
			current : {
				inStack : 'stack1',
				inBlock : 'stack1_block5',
				onSide : 'stack1_block5_front',
				num : '4',
				type : 'toggler',
			},
			positions : {
				position_1 : {
					state : '1',
					description : 'Установите переключатель на блоке ВКПО-Д в положение КОМПЕНСАТОР',
				},
			},
		},
		el17 : {
			click : '16',
			current : {
				inStack : 'stack0',
				inBlock : 'stack0_block2',
				onSide : 'stack0_block2_front',
				num : '2',
				type : 'toggler',
			},
			positions : {
				position_1 : {
					state : '1',
					description : 'Установите переключатель СЕТЬ на блоке ПУ-Д в положение ВКЛ.',
				},
			},
		},
		el18 : {
			click : '17',
			current : {
				inStack : 'stack1',
				inBlock : 'stack1_block5',
				onSide : 'stack1_block5_front',
				num : '2',
				type : 'toggler',
			},
			positions : {
				position_1 : {
					state : '0',
					description : 'Установите выключатель на блоке ВКПО-Д в положение ПРИЕМНИК ОТВ.',
				},
			},
		},
		el19 : {
			click : '18',
			current : {
				inStack : 'stack4',
				inBlock : 'stack4_block3',
				onSide : 'stack4_block3_front',
				num : '8',
				type : 'knob',
			},
			positions : {
				position_1 : {
					state : '1',
					description : 'Через 2-3 минуты после включения питания проверьте по прибору КОНТРОЛЬ НАПРЯЖ. наличие номинальных напряжений на блоке ВИ-Д. Установите переключатель КОНТРОЛЬ НАПРЯЖЕНИЯ на -210В',
					action_1 : {
						inStack : 'stack4',
						inBlock : 'stack4_block3',
						onSide : 'stack4_block3_front',
						type : 'scale',
						num : '2',
						status : '24',
					},
				},
				position_2 : {
					state : '2',
					description : 'Через 2-3 минуты после включения питания проверьте по прибору КОНТРОЛЬ НАПРЯЖ. наличие номинальных напряжений на блоке ВИ-Д. Установите переключатель КОНТРОЛЬ НАПРЯЖЕНИЯ на +200В',
					action_1 : {
						inStack : 'stack4',
						inBlock : 'stack4_block3',
						onSide : 'stack4_block3_front',
						type : 'scale',
						num : '2',
						status : '21',
					},
				},
				position_3 : {
					state : '3',
					description : 'Через 2-3 минуты после включения питания проверьте по прибору КОНТРОЛЬ НАПРЯЖ. наличие номинальных напряжений на блоке ВИ-Д. Установите переключатель КОНТРОЛЬ НАПРЯЖЕНИЯ на +250В',
					action_1 : {
						inStack : 'null',
						inBlock : 'null',
						onSide : 'null',
						type : 'null',
						num : '0',
						status : '0',
					},
					action_2 : {
						inStack : 'stack4',
						inBlock : 'stack4_block3',
						onSide : 'stack4_block3_front',
						type : 'scale',
						num : '2',
						status : '33',
					},
				},
			},
			defaultPosition : '0',
		},
		el20 : {
			click : '19',
			current : {
				inStack : 'stack1',
				inBlock : 'stack1_block1',
				onSide : 'stack1_block1_front',
				num : '1',
				type : 'knob',
			},
			positions : {
				position_1 : {
					state : '1',
					description : 'На блоке П-Д установить тумблер величины токов смесителей в положение КР.1',
					action_1 : {
						inStack : 'stack1',
						inBlock : 'stack1_block1',
						onSide : 'stack1_block1_front',
						type : 'scale',
						num : '15',
						status : '-9',
					},
				},
				position_2 : {
					state : '2',
					description : 'На блоке П-Д установить тумблер величины токов смесителей в положение КР.2',
					action_1 : {
						inStack : 'stack1',
						inBlock : 'stack1_block1',
						onSide : 'stack1_block1_front',
						type : 'scale',
						num : '15',
						status : '-9',
					},
				},
				position_3 : {
					state : '4',
					description : 'На блоке П-Д установить тумблер величины токов смесителей в положение КР.3',
					action_1 : {
						inStack : 'stack1',
						inBlock : 'stack1_block1',
						onSide : 'stack1_block1_front',
						type : 'scale',
						num : '15',
						status : '-9',
					},
				},
				position_4 : {
					state : '5',
					description : 'На блоке П-Д установить тумблер величины токов смесителей в положение КР.4',
				},
			},
		},
		el21 : {
			click : '20',
			current : {
				inStack : 'stack1',
				inBlock : 'stack1_block2',
				onSide : 'stack1_block2_front',
				num : '3',
				type : 'knob',
			},
			positions : {
				position_1 : {
					state : '2',
					description : 'На блоке П-Д установить тумблер величины токов смесителей в положение +75В',
					action_1 : {
						inStack : 'stack1',
						inBlock : 'stack1_block2',
						onSide : 'stack1_block2_front',
						type : 'scale',
						num : '35',
						status : '-31',
					},
				},
				position_2 : {
					state : '3',
					description : 'На блоке П-Д установить тумблер величины токов смесителей в положение 0',
					action_1 : {
						inStack : 'stack1',
						inBlock : 'stack1_block2',
						onSide : 'stack1_block2_front',
						type : 'scale',
						num : '35',
						status : '-31',
					},
				},
				position_3 : {
					state : '4',
					description : 'На блоке П-Д установить тумблер величины токов смесителей в положение +27В',
					action_1 : {
						inStack : 'stack1',
						inBlock : 'stack1_block2',
						onSide : 'stack1_block2_front',
						type : 'scale',
						num : '35',
						status : '-31',
					},
				},
				position_4 : {
					state : '5',
					description : 'На блоке П-Д установить тумблер величины токов смесителей в положение +250В',
					action_1 : {
						inStack : 'stack1',
						inBlock : 'stack1_block2',
						onSide : 'stack1_block2_front',
						type : 'scale',
						num : '35',
						status : '-31',
					},
				},
				position_5 : {
					state : '6',
					description : 'На блоке П-Д установить тумблер величины токов смесителей в положение -105В',
					action_1 : {
						inStack : 'stack1',
						inBlock : 'stack1_block2',
						onSide : 'stack1_block2_front',
						type : 'scale',
						num : '35',
						status : '-31',
					},
				},
				position_6 : {
					state : '7',
					description : 'На блоке П-Д установить тумблер величины токов смесителей в положение ОТКЛ',
					action_1 : {
						inStack : 'stack1',
						inBlock : 'stack1_block2',
						onSide : 'stack1_block2_front',
						type : 'scale',
						num : '35',
						status : '-31',
					},
				},
			},
			defaultPosition : '1',
		},
		el22 : {
			click : '21',
			current : {
				inStack : 'stack0',
				inBlock : 'stack0_block2',
				onSide : 'stack0_block2_front',
				num : '5',
				type : 'button',
			},
			positions : {
				position_1 : {
					state : 'off',
					description : 'Нажмите кнопку ПАСС, на блоке ПУ-Д',
				},
			},
		},
		el23 : {
			click : '22',
			current : {
				inStack : 'stack0',
				inBlock : 'stack0_block2',
				onSide : 'stack0_block2_front',
				num : '3',
				type : 'button',
			},
			positions : {
				position_1 : {
					state : 'off',
					description : 'Нажмите кнопку ВКЛЮЧЕНИЕ ПЕРЕДАТЧИКА на блоке ПУ-Д',
				},
			},
		},
		el24 : {
			click : '23',
			current : {
				inStack : 'stack0',
				inBlock : 'stack0_block2',
				onSide : 'stack0_block2_front',
				num : '21',
				type : 'scale',
			},
			positions : {
				position_1 : {
					state : 'off',
					description : 'Установите вращением ручки вариака по часовой стрелке средний ток магнетрона по прибору ТОК МАГНЕТРОНА, не превышая',
					action_1 : {
						inStack : 'stack0',
						inBlock : 'stack0_block2',
						onSide : 'stack0_block2_front',
						type : 'scale',
						num : '21',
						status : '21',
					},
				},
			},
			defaultPosition : 'off',
		},
		el25 : {
			click : '24',
			current : {
				inStack : 'stack4',
				inBlock : 'stack4_block2',
				onSide : 'stack4_block2_front',
				num : '5',
				type : 'toggler',
			},
			positions : {
				position_1 : {
					state : '0',
					description : 'Установите тумблер ПРИВОД АНТ. на ИКО-Д, в положение ВКЛ.',
				},
			},
		},
		el26 : {
			click : '25',
			current : {
				inStack : 'stack1',
				inBlock : 'stack1_block4',
				onSide : 'stack1_block4_front',
				num : '1',
				type : 'toggler',
			},
			positions : {
				position_1 : {
					state : '0',
					description : 'Установите тумблер МЕСТНОЕ-ДИСТАНЦ. в положение МЕСТНОЕ НА БЛОКЕ НПО-Д',
				},
			},
			defaultPosition : '1',
		},
		el27 : {
			click : '26',
			current : {
				inStack : 'stack1',
				inBlock : 'stack1_block4',
				onSide : 'stack1_block4_front',
				num : '2',
				type : 'knob',
			},
			positions : {
				position_1 : {
					state : '0',
					description : 'Установите переключателем ЧАСТОТА рабочую фиксированную волну НА БЛОКЕ НПО-Д',
				},
			},
		},
		el28 : {
			click : '27',
			current : {
				inStack : 'stack0',
				inBlock : 'stack0_block2',
				onSide : 'stack0_block2_front',
				num : '6',
				type : 'button',
			},
			positions : {
				position_1 : {
					state : 'off',
					description : 'Установите кнопочный переключатель на блоке ПУ-Д в положение АКТ',
				},
			},
		},
		el29 : {
			click : '28',
			current : {
				inStack : 'stack1',
				inBlock : 'stack1_block4',
				onSide : 'stack1_block4_front',
				num : '1',
				type : 'knob',
			},
			positions : {
				position_1 : {
					state : '1',
					description : 'Установите переключатель прибора в положение КРИСТ.ОСНОВ НА БЛОКЕ НПО-Д',
					action_1 : {
						inStack : 'stack1',
						inBlock : 'stack1_block4',
						onSide : 'stack1_block4_front',
						type : 'scale',
						num : '13',
						status : '-6',
					},
				},
			},
			defaultPosition : '4',
		},
	},
	ex3 : {
		nameOfExercise : 'Проверка передающего устройства ПРЛ (пустое)',
	},
	ex4 : {
		nameOfExercise : 'Проверка приемного устройства ПРЛ',
		el1 : {
			click : '1',
					current : {
						inStack : 'stack3',
						inBlock : 'stack3_block3',
						onSide : 'stack3_block3_front',
						num : '1',
						type : 'toggler',
					},
					positions : {
								position_1 : {
									state : '1',
									description : 'Переключите тумблер СМЕНА ВОЛН на магнетронном генераторе в выбранное положение',
								},
					},
		},
		el2 : {
			click : '2',
					current : {
							inStack : 'stack1',
							inBlock : 'stack1_block1',
							onSide : 'stack1_block1_front',
							num : '1',
							type : 'knob',
					},
					positions : {
								position_1 : {
										state : '1',
										description : 'На блоке П-Д установить тумблер величины токов смесителей в положение КР.1',
									action_1 : {
											inStack : 'stack1',
											inBlock : 'stack1_block1',
											onSide : 'stack1_block1_front',
											type : 'scale',
											num : '15',
										status : 'undefined',
									},
								},
								position_2 : {
									state : '2',
									description : 'На блоке П-Д установить тумблер величины токов смесителей в положение КР.2',
											action_1 : {
												inStack : 'stack1',
												inBlock : 'stack1_block1',
												onSide : 'stack1_block1_front',
												type : 'scale',
												num : '15',
											status : 'undefined',
											},
								},
								position_3 : {
									state : '3',
									description : 'На блоке П-Д установить тумблер величины токов смесителей в положение КР.3',
											action_1 : {
												inStack : 'stack1',
												inBlock : 'stack1_block1',
												onSide : 'stack1_block1_front',
												type : 'scale',
												num : '15',
											status : 'undefined',
											},
								},
								position_4 : {
									state : '5',
									description : 'На блоке П-Д установить тумблер величины токов смесителей в положение КР.4',
											action_1 : {
												inStack : 'stack1',
												inBlock : 'stack1_block1',
												onSide : 'stack1_block1_front',
												type : 'scale',
												num : '15',
											status : 'undefined',
											},
								},
					},
		},
		el3 : {
			click : '3',
					current : {
						inStack : 'stack2',
						inBlock : 'stack2_block2',
						onSide : 'stack2_block2_front',
						num : '2',
						type : 'knob',
					},
					positions : {
								position_1 : {
									state : '0',
									description : 'Проверьте наличие выхода по прибору блока СГ-П, для чего установите переключатель в положение КОНТРОЛЬ ВЫХОДА',
											action_1 : {
												inStack : 'stack2',
												inBlock : 'stack2_block2',
												onSide : 'stack2_block2_front',
												type : 'scale',
												num : '7',
											status : 'undefined',
											},
								},
					},
		},
		el4 : {
			click : '4',
					current : {
						inStack : 'stack2',
						inBlock : 'stack2_block1',
						onSide : 'stack2_block1_front',
						num : '2',
						type : 'knob',
					},
					positions : {
								position_1 : {
									state : '1',
									description : 'Установите переключатель РОД РАБОТЫ на блоке П-П в положение ПАСС',
								},
					},
		},
		el5 : {
			click : '5',
					current : {
						inStack : 'stack6',
						inBlock : 'stack6_block3',
						onSide : 'stack6_block3_front',
						num : '6',
						type : 'knob',
					},
					positions : {
								position_1 : {
									state : '1',
									description : 'Установите переключатель ВЫБОР ВИДЕО в блоке ИК-П в положение ПАСС.',
								},
					},
		},
		el6 : {
			click : '6',
					current : {
						inStack : 'stack1',
						inBlock : 'stack1_block1',
						onSide : 'stack1_block1_front',
						num : '2',
						type : 'toggler',
					},
					positions : {
								position_1 : {
									state : '0',
									description : 'Установите тумблер РРУ на блоке П-Д в положение МЕСТНОЕ',
								},
					},
		},
		el7 : {
			click : '7',
					current : {
						inStack : 'stack1',
						inBlock : 'stack1_block1',
						onSide : 'stack1_block1_front',
						num : '3',
						type : 'toggler',
					},
					positions : {
								position_1 : {
									state : '0',
									description : 'Установите тумблер ВАРУ на блоке П-Д в положение ВЫКЛ',
								},
					},
		},
		el8 : {
			click : '8',
					current : {
						inStack : 'stack6',
						inBlock : 'stack6_block3',
						onSide : 'stack6_block3_front',
						num : '15',
						type : 'rotator',
					},
					positions : {
								position_1 : {
									state : '50',
									description : 'Установите яркость индикатора ИК-П на 50%',
								},
					},
		},
		el9 : {
			click : '9',
					current : {
						inStack : 'stack2',
						inBlock : 'stack2_block1',
						onSide : 'stack2_block1_front',
						num : '2',
						type : 'knob',
					},
					positions : {
								position_1 : {
									state : '0',
									description : 'Установите переключатель РОД РАБОТЫ на блоке П-П в положение АКТ.',
								},
					},
		},
		el10 : {
			click : '10',
					current : {
						inStack : 'stack2',
						inBlock : 'stack2_block3',
						onSide : 'stack2_block3_front',
						num : '5',
						type : 'rotator',
					},
					positions : {
								position_1 : {
									state : '1',
									description : 'Установите минимальную величину усиления потенциометром РРУ, расположенным на передней панели фазового блока, для чего поверните ручку потенциометра против часовой стрелки до упора',
								},
					},
		},
		el11 : {
			click : '11',
					current : {
						inStack : 'stack2',
						inBlock : 'stack2_block4',
						onSide : 'stack2_block4_front',
						num : '2',
						type : 'toggler',
					},
					positions : {
								position_1 : {
									state : '1',
									description : 'Установите тумблер КОМПЕНСАЦИЯ-ВЫКЛ на передней панели блока компенсатора в положение ВЫКЛ',
								},
					},
		},
		el12 : {
			click : '12',
					current : {
						inStack : 'stack2',
						inBlock : 'stack2_block4',
						onSide : 'stack2_block4_front',
						num : '1',
						type : 'toggler',
					},
					positions : {
								position_1 : {
									state : '1',
									description : 'Установите тумблер АРУ-ВЫКЛ на передней панели блока компенсатора в положение ВЫКЛ',
								},
					},
		},
		el13 : {
			click : '13',
					current : {
						inStack : 'stack2',
						inBlock : 'stack2_block4',
						onSide : 'stack2_block4_front',
						num : '1',
						type : 'knob',
					},
					positions : {
								position_1 : {
									state : '0',
									description : 'Установите переключатель ЧАСТОТА ПОСЫЛОК на передней панели блока компенсатора в положение I',
								},
					},
		},
		el14 : {
			click : '14',
					current : {
						inStack : 'stack2',
						inBlock : 'stack2_block4',
						onSide : 'stack2_block4_front',
						num : '3',
						type : 'toggler',
					},
					positions : {
								position_1 : {
									state : '0',
									description : 'Установите переключатель КОНТР.СИГН.-ВЫКЛ на передней панели блока компенсатора в положение КОНТР.СИГН.',
								},
					},
		},
		el15 : {
			click : '15',
					current : {
						inStack : 'stack2',
						inBlock : 'stack2_block4',
						onSide : 'stack2_block4_front',
						num : '2',
						type : 'toggler',
					},
					positions : {
								position_1 : {
									state : '0',
									description : 'Установите переключатель КОМПЕНСАЦИЯ-ВЫКЛ на передней панели блока компенсатора в положение КОМПЕНСАЦИЯ',
								},
					},
		},
		el16 : {
			click : '16',
					current : {
						inStack : 'stack2',
						inBlock : 'stack2_block4',
						onSide : 'stack2_block4_front',
						num : '1',
						type : 'knob',
					},
					positions : {
								position_1 : {
									state : '2',
									description : 'Установите переключатель ЧАСТОТА ПОСЫЛОК на передней панели блока компенсатора в положение 2',
								},
								position_2 : {
									state : '1',
									description : 'Установите переключатель ЧАСТОТА ПОСЫЛОК на передней панели блока компенсатора в положение АВТОМАТ',
								},
					},
		},
		el17 : {
			click : '17',
					current : {
						inStack : 'stack2',
						inBlock : 'stack2_block3',
						onSide : 'stack2_block3_front',
						num : '2',
						type : 'knob',
					},
					positions : {
								position_1 : {
									state : '0',
									description : 'Установите переключатель ФАЗИРОВАНИЕ блока ФП в положение ВЫКЛ',
								},
								position_2 : {
									state : '2',
									description : 'Установите переключатель ФАЗИРОВАНИЕ блока ФП в положение ВНУТР',
								},
					},
		},
		el18 : {
			click : '17',
					current : {
						inStack : 'stack2',
						inBlock : 'stack2_block3',
						onSide : 'stack2_block3_front',
						num : '2',
						type : 'knob',
					},
					positions : {
								position_1 : {
									state : '1',
									description : 'Установите переключатель ФАЗИРОВАНИЕ блока ФП в положение ВНЕШН',
								},
					},
		},
		el19 : {
			click : '18',
					current : {
						inStack : 'stack2',
						inBlock : 'stack2_block1',
						onSide : 'stack2_block1_front',
						num : '2',
						type : 'knob',
					},
					positions : {
								position_1 : {
									state : '0',
									description : 'Установите переключатель РОД РАБОТЫ блока П-П в положение ПАСС',
								},
								position_2 : {
									state : '0',
									description : 'Установите переключатель РОД РАБОТЫ блока П-П в положение АКТ',
								},
					},
		},
		el20 : {
			click : '19',
					current : {
						inStack : 'stack6',
						inBlock : 'stack6_block3',
						onSide : 'stack6_block3_front',
						num : '6',
						type : 'knob',
					},
					positions : {
								position_1 : {
									state : '2',
									description : 'Установите переключатель ВЫБОР ВИДЕО блока ИК-П в положение АКТ',
								},
					},
		},
		el21 : {
			click : '20',
					current : {
						inStack : 'stack7',
						inBlock : 'stack7_block1',
						onSide : 'stack7_block1_front',
						num : '28',
						type : 'knob',
					},
					positions : {
								position_1 : {
									state : '0',
									description : 'Переключателем ЧАСТОТА на распределительном щите выберите рабочую частоту в соответствии с переключателем блока НКО-П',
								},
					},
		},
	},
	ex5 : {
		nameOfExercise : 'Проверка передающего устройства ДРЛ',
		el1 : {
			click : '1',
			current : {
				inStack : 'stack0',
				inBlock : 'stack0_block2',
				onSide : 'stack0_block2_front',
				num : '2',
				type : 'knob',
			},
			positions : {
						position_1 : {
							state : '0',
							description : 'Установите тумблер КОНТРОЛЬ НАПР. блока ПУ-Д в положение 24КВ',
									action_1 : {
										inStack : 'stack0',
										inBlock : 'stack0_block2',
										onSide : 'stack0_block2_front',
										type : 'scale',
										num : '22',
									status : 'undefined',
									},
						},
						position_2 : {
							state : '2',
							description : 'Установите тумблер КОНТРОЛЬ НАПР. блока ПУ-Д в положение	108В',
									action_1 : {
										inStack : 'stack0',
										inBlock : 'stack0_block2',
										onSide : 'stack0_block2_front',
										type : 'scale',
										num : '22',
									status : 'undefined',
									},
						},
						position_3 : {
							state : '3',
							description : 'Установите тумблер КОНТРОЛЬ НАПР. блока ПУ-Д в положение	600В',
									action_1 : {
										inStack : 'stack0',
										inBlock : 'stack0_block2',
										onSide : 'stack0_block2_front',
										type : 'scale',
										num : '22',
									status : 'undefined',
									},
						},
						position_4 : {
							state : '4',
							description : 'Установите тумблер КОНТРОЛЬ НАПР. блока ПУ-Д в положение +300В',
									action_1 : {
										inStack : 'stack0',
										inBlock : 'stack0_block2',
										onSide : 'stack0_block2_front',
										type : 'scale',
										num : '22',
									status : 'undefined',
									},
						},
						position_5 : {
							state : '5',
							description : 'Установите тумблер КОНТРОЛЬ НАПР. блока ПУ-Д в положение +700В',
									action_1 : {
										inStack : 'stack0',
										inBlock : 'stack0_block2',
										onSide : 'stack0_block2_front',
										type : 'scale',
										num : '22',
									status : 'undefined',
									},
						},
						position_6 : {
							state : '0',
							description : 'null',
						},
						position_7 : {
							state : '0',
							description : 'null',
						},
						position_8 : {
							state : '6',
							description : 'Установите тумблер КОНТРОЛЬ НАПР. блока ПУ-Д в положение +1200В',
									action_1 : {
										inStack : 'stack0',
										inBlock : 'stack0_block2',
										onSide : 'stack0_block2_front',
										type : 'scale',
										num : '22',
									status : 'undefined',
									},
						},
						position_9 : {
							state : '7',
							description : 'Установите тумблер КОНТРОЛЬ НАПР. блока ПУ-Д в положение +1800В',
									action_1 : {
										inStack : 'stack0',
										inBlock : 'stack0_block2',
										onSide : 'stack0_block2_front',
										type : 'scale',
										num : '22',
									status : 'undefined',
									},
						},
						position_10 : {
							state : '1',
							description : 'Установите тумблер КОНТРОЛЬ НАПР. блока ПУ-Д в положение 0',
									action_1 : {
										inStack : 'stack0',
										inBlock : 'stack0_block2',
										onSide : 'stack0_block2_front',
										type : 'scale',
										num : '22',
									status : 'undefined',
									},
						},
			},
		},
		el2 : {
			click : '2',
			current : {
				inStack : 'stack0',
				inBlock : 'stack0_block2',
				onSide : 'stack0_block2_front',
				num : '4',
				type : 'button',
			},
			positions : {
						position_1 : {
							state : 'off',
							description : 'Нажмите кнопку СПЦ на блоке ПУ-Д',
						},
			},
		},
		el3 : {
			click : '3',
			current : {
				inStack : 'stack0',
				inBlock : 'stack0_block2',
				onSide : 'stack0_block2_front',
				num : '5',
				type : 'button',
			},
			positions : {
						position_1 : {
							state : 'off',
							description : 'Нажмите кнопку ПАСС на блоке ПУ-Д',
						},
			},
		},
	},
	ex6 : {
		nameOfExercise : 'Проверка передающего устройства ДРЛ',
		el1 : {
			click : '1',
			current : {
				inStack : 'stack0',
				inBlock : 'stack0_block2',
				onSide : 'stack0_block2_front',
				num : '2',
				type : 'knob',
			},
			positions : {
				position_1 : {
					state : '0',
					description : 'Установите тумблер КОНТРОЛЬ НАПР. блока ПУ-Д в положение 24КВ',
				},
				position_2 : {
					state : '2',
					description : 'Установите тумблер КОНТРОЛЬ НАПР. блока ПУ-Д в положение	108В',
					action_1 : {
						inStack : 'stack0',
						inBlock : 'stack0_block2',
						onSide : 'stack0_block2_front',
						type : 'scale',
						num : '22',
					status : 'undefined',
					},
				},
				position_3 : {
					state : '3',
					description : 'Установите тумблер КОНТРОЛЬ НАПР. блока ПУ-Д в положение	600В',
					action_1 : {
						inStack : 'stack0',
						inBlock : 'stack0_block2',
						onSide : 'stack0_block2_front',
						type : 'scale',
						num : '22',
					status : 'undefined',
					},
				},
				position_4 : {
					state : '4',
					description : 'Установите тумблер КОНТРОЛЬ НАПР. блока ПУ-Д в положение +300В',
					action_1 : {
						inStack : 'stack0',
						inBlock : 'stack0_block2',
						onSide : 'stack0_block2_front',
						type : 'scale',
						num : '22',
					status : 'undefined',
					},
				},
				position_5 : {
					state : '5',
					description : 'Установите тумблер КОНТРОЛЬ НАПР. блока ПУ-Д в положение +700В',
					action_1 : {
						inStack : 'stack0',
						inBlock : 'stack0_block2',
						onSide : 'stack0_block2_front',
						type : 'scale',
						num : '22',
					status : 'undefined',
					},
				},
				position_6 : {
					state : '0',
					description : 'null',
				},
				position_7 : {
					state : '0',
					description : 'null',
				},
				position_8 : {
					state : '6',
					description : 'Установите тумблер КОНТРОЛЬ НАПР. блока ПУ-Д в положение +1200В',
					action_1 : {
						inStack : 'stack0',
						inBlock : 'stack0_block2',
						onSide : 'stack0_block2_front',
						type : 'scale',
						num : '22',
					status : 'undefined',
					},
				},
				position_9 : {
					state : '7',
					description : 'Установите тумблер КОНТРОЛЬ НАПР. блока ПУ-Д в положение +1800В',
					action_1 : {
						inStack : 'stack0',
						inBlock : 'stack0_block2',
						onSide : 'stack0_block2_front',
						type : 'scale',
						num : '22',
					status : 'undefined',
					},
				},
				position_10 : {
					state : '1',
					description : 'Установите тумблер КОНТРОЛЬ НАПР. блока ПУ-Д в положение 0',
					action_1 : {
						inStack : 'stack0',
						inBlock : 'stack0_block2',
						onSide : 'stack0_block2_front',
						type : 'scale',
						num : '22',
					status : 'undefined',
					},
				},
			},
		},
		el2 : {
			click : '2',
			current : {
				inStack : 'stack0',
				inBlock : 'stack0_block2',
				onSide : 'stack0_block2_front',
				num : '4',
				type : 'button',
			},
			positions : {
				position_1 : {
					state : 'off',
					description : 'Нажмите кнопку СПЦ на блоке ПУ-Д',
				},
			},
		},
		el3 : {
			click : '3',
			current : {
				inStack : 'stack0',
				inBlock : 'stack0_block2',
				onSide : 'stack0_block2_front',
				num : '5',
				type : 'button',
			},
			positions : {
				position_1 : {
					state : 'off',
					description : 'Нажмите кнопку ПАСС на блоке ПУ-Д',
				},
			},
		},
		el4 : {
			click : '4',
			current : {
				inStack : 'stack1',
				inBlock : 'stack1_block1',
				onSide : 'stack1_block1_front',
				num : '4',
				type : 'toggler',
			},
			positions : {
				position_1 : {
					state : '0',
					description : 'Установите тумблер ВОЛНЫ блока П-Д в положение I',
					action_1 : {
						inStack : 'stack1',
						inBlock : 'stack1_block1',
						onSide : 'stack1_block1_front',
						type : 'lamp',
						num : '1',
					status : 'on',
					},
				},
				position_2 : {
					state : '1',
					description : 'Установите тумблер ВОЛНЫ блока П-Д в положение II',
					action_1 : {
						inStack : 'stack1',
						inBlock : 'stack1_block1',
						onSide : 'stack1_block1_front',
						type : 'lamp',
						num : '1',
					status : 'off',
					},
					action_2 : {
						inStack : 'stack1',
						inBlock : 'stack1_block1',
						onSide : 'stack1_block1_front',
						type : 'lamp',
						num : '2',
					status : 'on',
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
				num : '3',
				type : 'toggler',
			},
			positions : {
				position_1 : {
					state : '1',
					description : 'Установите тумблер ВАРУ блока П-Д в положение ВЫКЛ',
				},
			},
		},
		el6 : {
			click : '6',
			current : {
				inStack : 'stack1',
				inBlock : 'stack1_block1',
				onSide : 'stack1_block1_front',
				num : '2',
				type : 'toggler',
			},
			positions : {
				position_1 : {
					state : '0',
					description : 'Установите тумблер РРУ блока П-Д в положение МЕСТНОЕ',
				},
			},
		},
		el7 : {
			click : '7',
			current : {
				inStack : 'stack0',
				inBlock : 'stack0_block2',
				onSide : 'stack0_block2_front',
				num : '6',
				type : 'button',
			},
			positions : {
				position_1 : {
					state : 'off',
					description : 'Нажмите кнопку АКТ блока ПУ-Д',
				},
			},
		},
		el8 : {
			click : '8',
			current : {
				inStack : 'stack0',
				inBlock : 'stack0_block2',
				onSide : 'stack0_block2_front',
				num : '4',
				type : 'button',
			},
			positions : {
				position_1 : {
					state : 'off',
					description : 'Нажмите кнопку СПЦ блока ПУ-Д',
				},
			},
		},
		el9 : {
			click : '9',
			current : {
				inStack : 'stack1',
				inBlock : 'stack1_block2',
				onSide : 'stack1_block2_front',
				num : '3',
				type : 'toggler',
			},
			positions : {
				position_1 : {
					state : '1',
					description : 'Установите тумблер ФАЗИР-ВЫКЛ на блоке Ф-Д в положение ВЫКЛ.',
				},
				position_2 : {
					state : '0',
					description : 'Установите тумблер ФАЗИР-ВЫКЛ на блоке Ф-Д в положение ФАЗИР.',
				},
			},
		},
		el10 : {
			click : '10',
			current : {
				inStack : 'stack1',
				inBlock : 'stack1_block3',
				onSide : 'stack1_block3_front',
				num : '1',
				type : 'knob',
			},
			positions : {
				position_1 : {
					state : '0',
					description : 'Установите переключатель ЧАСТОТА ПОСЫЛОК блока К-Д в положение I',
				},
				position_2 : {
					state : '2',
					description : 'Установите переключатель ЧАСТОТА ПОСЫЛОК блока К-Д в положение 2',
				},
				position_3 : {
					state : '1',
					description : 'Установите переключатель ЧАСТОТА ПОСЫЛОК блока К-Д в положение АВТОМАТ',
				},
			},
		},
		el11 : {
			click : '11',
			current : {
				inStack : 'stack1',
				inBlock : 'stack1_block1',
				onSide : 'stack1_block1_front',
				num : '4',
				type : 'toggler',
			},
			positions : {
				position_1 : {
					state : '1',
					description : 'Установите тумблер ВОЛНЫ блока П-Д в положение 2',
				},
			},
		},
		el12 : {
			click : '12',
			current : {
				inStack : 'stack6',
				inBlock : 'stack6_block3',
				onSide : 'stack6_block3_front',
				num : '6',
				type : 'knob',
			},
			positions : {
				position_1 : {
					state : '2',
					description : 'Включите ДРЛ в активный род работы, переключатель ВЫБОР ВИДЕО установите в положение АКТ',
				},
			},
		},
		el13 : {
			click : '13',
			current : {
				inStack : 'stack4',
				inBlock : 'stack4_block2',
				onSide : 'stack4_block2_front',
				num : '2',
				type : 'button',
			},
			positions : {
				position_1 : {
					state : 'off',
					description : 'Одновременно нажмите кнопки ОПОЗНАВ. блока ИКО-Д и кнопку ОПОЗНАВАНИЕ на распределительном щите',
				},
			},
		},
		el14 : {
			click : '14',
			current : {
				inStack : 'stack7',
				inBlock : 'stack7_block1',
				onSide : 'stack7_block1_front',
				num : '22',
				type : 'button',
			},
			positions : {
				position_1 : {
					state : 'off',
					description : 'Одновременно нажмите кнопки ОПОЗНАВ. блока ИКО-Д и кнопку ОПОЗНАВАНИЕ на распределительном щите',
				},
			},
		},
	},
	ex10 : {
		nameOfExercise : 'Упражнение для теста',
		el1 : {
			click : '1',
			current : {
				inStack : 'stack0',
				inBlock : 'stack0_block2',
				onSide : 'stack0_block2_front',
				num : '2',
				type : 'knob',
			},
			positions : {
				position_1 : {
					state : '1',
					description : 'Установите в положение 0',
					action_1 : {
						inStack : 'stack0',
						inBlock : 'stack0_block2',
						onSide : 'stack0_block2_front',
						type : 'lamp',
						num : '2',
						status : 'on',
					},
					action_2 : {
						inStack : 'stack0',
						inBlock : 'stack0_block2',
						onSide : 'stack0_block2_front',
						type : 'scale',
						num : '22',
						status : '-35',
					},
					action_3 : {
						inStack : 'stack0',
						inBlock : 'stack0_block2',
						onSide : 'stack0_block2_front',
						type : 'scale',
						num : '21',
						status : '10',
					}
				},
				position_2 : {
					state : '3',
					description : 'Установите в положение	600В',
					action_1 : {
						inStack : 'stack0',
						inBlock : 'stack0_block2',
						onSide : 'stack0_block2_front',
						type : 'scale',
						num : '22',
						status : '0',
					},
					 action_2 : {
						 inStack : 'stack0',
						 inBlock : 'stack0_block2',
						 onSide : 'stack0_block2_front',
						 type : 'lamp',
						 num : '1',
						 status : 'on',
					 },
					 action_3 : {
						 inStack : 'stack0',
						 inBlock : 'stack0_block2',
						 onSide : 'stack0_block2_front',
						 type : 'scale',
						 num : '21',
						 status : '0',
					 },
				},
				position_3 : {
					state : '7',
					description : 'Установите в положение +1800В',
					action_1 : {
						inStack : 'stack0',
						inBlock : 'stack0_block2',
						onSide : 'stack0_block2_front',
						type : 'scale',
						num : '22',
						status : '-50',
					},
					action_2 : {
						inStack : 'stack0',
						inBlock : 'stack0_block2',
						onSide : 'stack0_block2_front',
						type : 'scale',
						num : '21',
						status : '-50',
					},
				}
			},
		},
		el2 : {
			click : '2',
			current : {
					inStack : 'stack0',
					inBlock : 'stack0_block2',
					onSide : 'stack0_block2_front',
					num : '2',
					type : 'toggler',
			},
			positions : {
				position_1 : {
						state : '1',
						description : 'Включите меня',
				}
			}
		}
	},
	ex11 : {
		nameOfExercise : 'Упражнение для тестирования 3',
		el1 : {
		 click : '1',
		 current : {
			 inStack : 'stack0',
			 inBlock : 'stack0_block2',
			 onSide : 'stack0_block2_front',
			 num : '2',
			 type : 'toggler',
		 },
		 positions : {
			 position_1 : {
				 state : '1',
				 description : 'Вертикально',

				 action_1 : {
					 inStack : 'stack0',
					 inBlock : 'stack0_block2',
					 onSide : 'stack0_block2_front',
					 type : 'lamp',
					 num : '2',
					 status : 'on',
				 },
				 action_2 : {
					 inStack : 'stack0',
					 inBlock : 'stack0_block2',
					 onSide : 'stack0_block2_front',
					 type : 'scale',
					 num : '21',
					 status : '7',
				 },
			 },
		 },
		},
		el2 : {
		 click : '2',
		 current : {
			 inStack : 'stack0',
			 inBlock : 'stack0_block2',
			 onSide : 'stack0_block2_front',
			 num : '1',
			 type : 'toggler',
		 },
		 positions : {
			 position_1 : {
				 state : '0',
				 description : 'ПОДСВЕТ',
				 action_1 : {
					 inStack : 'stack0',
					 inBlock : 'stack0_block2',
					 onSide : 'stack0_block2_front',
					 type : 'lamp',
					 num : '2',
					 status : 'off',
				 },
				 action_2 : {
					 inStack : 'stack0',
					 inBlock : 'stack0_block2',
					 onSide : 'stack0_block2_front',
					 type : 'scale',
					 num : '21',
					 status : '27',
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
			 type : 'toggler',
		 },
		 positions : {
			 position_1 : {
				 state : '0',
				 description : 'Горизонтально',
			 },
		 },
	},
	},
}