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

	'Ask': [
		'mc Why are you sad?',
		'k Lately I have been stressed at school and unable to focus.',
		'k I am not very productive recently and I am easily distracted.',
    'jump cAskDontask2',
	],
  "cAskDontask2": [
		{
			'Choice': {
				'Dialog': 'mc Hmmmmm should I ask further?',
				'Ask': {
					'Text': 'Do you mind sharing your problems with me?',
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
		'mc Do you mind sharing your problems with me?',
		'k Thanks for offering! I would be really happy if you could just lend me a listening ear.',
		'k Recently, my grandmother was diagnosed with Covid-19 and I am very worried for her health.',
		'k She is already 90 years old and already suffering from pre-existing illnesses.',
		'k I just cannot bear the thought of losing her as we are very close...',
		'jump AdviceorAvoid' 
	],

	'AdviceorAvoid': [
		{
			'Choice': {
				'Dialog': 'mc How shall I reply her?',
				'e': {
					'Text': 'Chill, it is not that bad',
					'Do': 'jump Notbad',
					'Class': 'button'
				},
				'b': {
					'Text': 'Cheer up',
					'Do': 'jump Cheerup',
					'Class': 'button'
				},
				'c': {
					'Text': 'Calm down',
					'Do': 'jump Calmdown',
					'Class': 'button'
				},
				'a': {
					'Text': 'Support her',
					'Do': 'jump Support',
					'Class': 'button'
				},
				'd': {
					'Text': 'You must get a hold of yourself',
					'Do': 'jump Hold',
					'Class': 'button'
				},
			},
		},
	],

	'Support': [
		'mc I see...Even though I am unable to fully relate to your problem, I am always here for you when you need me.',
		'mc I understand that with the current Covid-19 situation, I am also worried for my loved ones.',
		'mc I hope your grandmother gets better soon!',
		'mc Please do not be afraid to approach me to talk about your problems in the future.',
		'k Wow thank you so much {{player.name}}! Thanks for being a reliable friend and for listening to my problems.',
		'hide character k sadcat at right with fadeOut',
		'show character k happycat at right with fadeIn',
		'y Well done! You have successfully provided psychological first aid to the first person you met in Pawsitive!',
		'hide character k happycat at right with fadeOut',
		'hide character mc hamster at left with fadeOut',
		'show image 4steps with fadeIn',
		'y From this, we have learnt to practice prepare, look, listen and link.',
		'y Oh, do I hear someone crying in the hallway?',
		'y That sounds like Russel.',
		'jump DogIntro'
		
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
		'y Do not be afraid of probing!',
		'y It would be better if you could ask him to share more details.',
		'y That way, you can understand the situation better and be able to help him.',
		'jump cAskDontask2',
	],
	'Hold': [
		'y That is not how you should advice a person when it comes to such situations.',
		'y You should not tell a person to get a hold of themselves after they have shared their problems with you.',
		'y No problem is ever too small.',
		'jump AdviceorAvoid'
	],
	'Notbad': [
		'y That is not how you should advice a person when it comes to such situations.',
		'y You should never say that their problem is not bad after they have shared it with you.',
		'y No problem is ever too small.',
		'jump AdviceorAvoid'
	],
	'Cheerup': [
		'y That is not how you should advice a person when it comes to such situations.',
		'y You should not just tell a person to cheer up after they have shared their problems with you.',
		'y Its just not very helpful',
		'jump AdviceorAvoid'
	],
	'Calmdown': [
		'y That is not how you should advice a person when it comes to such situations.',
		'y You should not only tell a person to calm down after they have shared their problems with you.',
		'y Its just not very helpful',
		'jump AdviceorAvoid'
	]
})
