monogatari.script ({
  'DogIntro': [
    'show scene hall with fadeIn',
    'show character mc hamster at left with fadeIn',
		'r Awooooo~~~~~~',
    'mc Hey, isn\'t that Russel? I wonder what is he up to.',
    'show character r saddog at right with fadeIn',
    'r Why......',
    'r Why do you have to leave me......',
    'Russel seems depressed, what should I do?',
    'jump cApproachorNot',
	],
  'cApproachorNot': [{
    'Choice': {
      'Approach': {
        'Text': 'Is everything okay?',
        'Do': 'jump Approach',
        'Class': 'button'
      },
      'NotApproach': {
        'Text': 'Maybe I should pretend to not see anything.',
        'Do': 'jump NotApproach',
        'Class': 'button'
      }
    },
  }],
  'Approach': [
    'mc Is everything Okay Russel?',
    'r My father just recently passed away,',
    'r and now I am all alone.',
    'r ......',
    'r ......',
    'r I don\'t think i can carry on.',
    'jump cCheerUp'
  ],
  'cCheerUp': [{
    'Choice': {
      'Dont Cry': {
        'Text': 'Please don\'t cry.', 
        'Do': 'jump BadCheer',
        'Class': 'button'
      },
      'Comfort': {
        'Text': 'Give tissue and provide comfort.', 
        'Do': 'jump Comfort',
        'Class': 'button'
      }, 
    },
  }],
  'Comfort': [
    'mc I\'m so sorry to hear that, have a tissue.',
    'mc Dealing with loss is a difficult process,',
    'mc and it will take weeks or even months to get over it.',
    'mc just know that its not the end and you still have your friends to support you!',
    'r Thank you for being there for me,',
    'r but what do I do now that he is gone?',
    'jump cGiveAdvice',
  ],
  'cGiveAdvice': [{
    'Choice': {
      'NotSure': {
        'Text': 'I\'m not sure.', 
        'Do': 'jump NotSure',
        'Class': 'button'
      },
      ' Advice': {
        'Text': 'Here are some helpful information.', 
        'Do': 'jump Advice',
        'Class': 'button'
      },  
    }
  }],
  'Advice': [
    'show image ear with fadeIn',
    'mc Here are some helpful avenues if you are lonely and need a listening ear.',
    'mc Even though I may not fully comprehend the grief you are goin through, Do know that you are not alone as Kitty and I are always here for you.',
    'mc Additionally, applications like Tinkle Friend and Wysa makes it easy to vent when you are uncomfortable talking with your friends.',
    'mc If you need help, Principal Brown might be able to give some support both financially and emotionally.',
    'mc Come, lets go and find Principal Brown together!',
    'hide image ear with fadeOut',
    'hide character mc hamster at left with fadeOut',
    'hide character r saddog at right with fadeOut',

    'show character y elephant with fadeIn',
    'y Thank you for playing our game and I hope you learnt the PFA process.',
    'y Goodbye!',
    'end'
  ],
  'NotSure': [
    'y Remember Link in PFA?',
    'y After listening and calming down a distressed individual,',
    'y provide information and connect them with loved ones or social support!',
    'jump cGiveAdvice',
  ],
  'BadCheer':[
    'y Thats not very helpful.',
    'y In stressful situations crying is a normal response.',
    'jump cCheerUp'
  ],
  'NotApproach': [
    'y You shouldn\'t leave a friend in need alone!',
    'y When you have seen someone with a distressed reaction, approach them to give support!',
    'jump cApproachorNot'
  ]
})