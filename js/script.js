/* global monogatari */

// Define the messages used in the game.
monogatari.action ('message').messages ({
	'Help': {
		title: 'Help',
		subtitle: 'Some useful Links',
		body: `
			<p><a href='https://developers.monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p>
			<p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>
		`
	}
});

// Define the notifications used in the game
monogatari.action ('notification').notifications ({
	'Welcome': {
		title: 'Welcome',
		body: 'This is the Monogatari VN Engine',
		icon: ''
	}
});

// Define the Particles JS Configurations used in the game
monogatari.action ('particles').particles ({

});

// Define the canvas objects used in the game
monogatari.action ('canvas').objects ({

});

// Credits of the people involved in the creation of this awesome game
monogatari.configuration ('credits', {

});


// Define the images that will be available on your game's image gallery
monogatari.assets ('gallery', {

});

// Define the music used in the game.
monogatari.assets ('music', {

});

// Define the voice files used in the game.
monogatari.assets ('voices', {

});

// Define the sounds used in the game.
monogatari.assets ('sounds', {

});

// Define the videos used in the game.
monogatari.assets ('videos', {

});

// Define the images used in the game.
monogatari.assets ('images', {

});

// Define the backgrounds for each scene.
monogatari.assets ('scenes', {
	'scene3': 'scene3.jpg',
	'scene5': 'scene5.png'
});


// Define the Characters
monogatari.characters ({
	'y': {
		name: 'Principal Brown',
		color: '#5bcaff'
	},
	'mc': {
		name: '{{player.name}}',
		color: '#FF8C00'
	},
	'r': {
		name: 'Russell',
		color: '#FFFFFF'
	},
	'k': {
		name: 'Kitty',
		color:'#FF8C00',
		sprites: {
			sadcat: 'sadcat.png'
		}
	}
});

monogatari.script ({
	// The game starts here.
	'Start': [
		'show scene scene3 with fadeIn',
		'show notification Welcome',
		{
			'Input': {
				'Text': 'What is your name?',
				'Validation': function (input) {
					return input.trim ().length > 0;
				},
				'Save': function (input) {
					this.storage ({
						player: {
							name: input
						}
					});
					return true;
				},
				'Revert': function () {
					this.storage ({
						player: {
							name: ''
						}
					});
				},
				'Warning': 'You must enter a name!'
			}
		},
		'y Hi {{player.name}}! Welcome to Pawsitive, a school for animals!', 
		'y We hope you are excited to meet new people and make new friends.',
		'show scene scene5 with fadeIn',
		'y This will be your classroom. Meet your new classmate, Kitty the cat!',
		'show character k sadcat at right with fadeIn',
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
		'y Meet your other classmate, Russell the dog',


	],

	'Hi': [
		'mc Hey Kitty! How are you?',
		'k I am feeling rather sad lately',
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

	'Bye': [

		'y You should take initiative to mingle with your peers.'
		

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
					'Do': 'jump DontAsk',
					'Class': 'button'
				}
			},
		}
	],

	'Help': [
		'mc Is there anyway I can help?',
		'k Thanks for offering! I would be really happy if you could just lend me a listening ear.'
	],

	'DontAsk': [

		'y You should lend your friend a listening ear!',
		'end'

	]
});