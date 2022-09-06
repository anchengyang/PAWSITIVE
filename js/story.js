monogatari.script ({
  'cHiBye': [
    {
			'Choice': {
				'Dialog': 'y Say hi to Kitty',
				'Hi': {
					'Text': 'Hi',
					'Do': 'jump Hi',
					'Class': 'button'
				},
				'Bye': {
					'Text': 'Bye',
					'Do': 'jump Bye',
					'Class': 'button'
				}
			}
		},
	],

	'Hi': [
		'mc Hey Kitty! How are you?',
		'k I am feeling rather sad lately',
    'jump cAskDontask',
	],


  'cAskDontask': [
    {
			'Choice': {
				'Dialog': 'y Ask about the situation',
				'Ask': {
					'Text': 'Ask',
					'Do': 'jump Ask',
					'Class': 'button'
				},
				'DontAsk': {
					'Text': 'Dont ask',
					'Do': 'jump DontAsk',
					'Class': 'button'
				}
			},
		}
  ],



	// 'Why': [
	// 	{
	// 		'Choice': {
	// 			'Dialog': 'y Ask about the situation',
	// 			'Ask': {
	// 				'Text': 'Ask',
	// 				'Do': 'jump Ask',
	// 				'Class': 'button'
	// 			},
	// 			'DontAsk': {
	// 				'Text': 'Dont ask',
	// 				'Do': 'jump Why',
	// 				'Class': 'button'
	// 			}
	// 		},
	// 	}
	// ],

	'Ask': [
		'mc Why are you sad?',
		'k Lately I have been stressed at work and unable to focus.',
		'k I am not very productive recently and I am not sure why.',
    'jump cAskDontask2',
	],
  "cAskDontask2": [
		{
			'Choice': {
				'Dialog': 'mc Hmmmmm should I ask further?',
				'Ask': {
					'Text': 'Is there anyway I can help with?',
					'Do': 'jump Help',
					'Class': 'button'
				},
				'DontAsk': {
					'Text': 'But I am afraid of probing',
					'Do': 'jump DontAsk2',
					'Class': 'button'
				}
			},
		},
  ],
	'Help': [
		'mc Is there anyway I can help?',
		'k Thanks for offering! I would be really happy if you could just lend me a listening ear.'
	],
  //bad choices loop back here
	'Bye': [
		'y You should take initiative to mingle with your peers.',
    'jump cHiBye'
	],
  'DontAsk': [
		'y You should lend your friend a listening ear!',
		'jump cAskDontask',
	],
  'DontAsk2': [
		'y You should lend your friend a listening ear!',
		'jump cAskDontask2',
	],
})
