monogatari.script ({
  'DogIntro': [
    'show scene hall with fadeIn',
    'show character mc hamster at left with fadeIn',
		'r Awooooo~~~~~~',
    'mc Hey, isn\'t that Russell? I wonder what is he up to.',
    'show character r saddog at right with fadeIn',
    'r Why......',
    'r Why do you have to leave me......',
    'Russell seems depressed, what should I do?',
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
    'mc Is everything Okay Russell?',
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
      'BetterPlace': {
        'Text': 'He is in a better place where there is no more suffering.', 
        'Do': 'jump BetterPlace',
        'Class': 'button'
      }, 
    },
  }],
  'Comfort': [
    'mc I\'m so sorry to hear that, have a tissue.',
    'mc Dealing with loss is a difficult process,',
    'mc and it will take weeks or even months to get over it.',
    'mc Just know that its not the end and you still have your friends to support you!',
    'r Thank you for being here for me,',
    'r When he was still here I didn\'t cherish him.',
    'r I was constantly bickering with him as he has high expectations for me despite of my own struggles with school work,',
    'r but only now then I realize he cares for me a lot.',
    'r I didn\'t get the change to show him my appreciation and love in time.',
    'r Could his death be my fault?',
    'jump cFault',
  ],
  'cFault': [{
    'Choice': {
      'NotFault': {
        'Text': 'Its not your fault.', 
        'Do': 'jump NotFault',
        'Class': 'button'
      },
      'Why': {
        'Text': 'Why did you argue with him.', 
        'Do': 'jump Why',
        'Class': 'button'
      },  
    }
  }],
  'Why': [
    'y Sometimes people grieving may feel guilty about a loved one passing.',
    'y It is more important to dispel his sense of responsibility in events like this and that he is not to blame.',
    'jump cFault',
  ], 
  'NotFault':[
    'y No Russel you did not cause the death,',
    'y and it isn\'t a punishment for anything that anyone did wrong.',
    'y also, he would be happy to hear that you appreciate and love him too.',
    'r Thank you for reassuring me,',
    'r but now that he is gone, what do I do now?',
    'jump cGiveAdvice'
  ],
  'BetterPlace': [
    'y In certain situations that may be a comforting thing to say.',
    'y However different people of different cultures may have different rituals related to mourning.',
    'y Even within cultural and religious groups, beliefs and practices can vary widely.',
    'y It is best not to assume Russel\'s views on mourning and death unless you know him well.',
    'jump cCheerUp',
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
    'mc Even though I may not fully comprehend the grief you are goin through, do know that you are not alone as Kitty and I are always here for you.',
    'mc Additionally, applications like Tinkle Friend and Wysa makes it easy to vent when you are uncomfortable talking with your friends.',
    'hide image ear with fadeOut',
    'mc If you need help, an adult like Principal Brown might be able to give some support both financially and emotionally.',
    'mc Come, lets go and find Principal Brown together!',
    'hide character mc hamster at left with fadeOut',
    'hide character r saddog at right with fadeOut',

    'show character y elephant with fadeIn',
    'y When providing PFA to mourning indiviuals, other than giving support, it is vital to give space as well.',
    'y Although death might be a difficult subject to approach, lending a listening ear might help relieve their burden.',
    'y Thank you for playing our game and I hope you learnt how to provide better Psychological First Aid to the people around you in process.',
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
    'y In times like these its important to be empathetic and understanding.',
    'jump cCheerUp'
  ],
  'NotApproach': [
    'y You shouldn\'t leave a friend in need alone!',
    'y When you have seen someone with a distressed reaction, approach them to give support!',
    'jump cApproachorNot'
  ]
})